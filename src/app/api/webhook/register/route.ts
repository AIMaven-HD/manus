import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: NextRequest) {
  try {
    // Basic security: check for a shared secret header
    const authHeader = req.headers.get('x-webhook-secret');
    const secret = process.env.WEBHOOK_SECRET;

    if (secret && authHeader !== secret) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await req.json();

    // Mapping fields from Zapier (based on the Sawyer email sample provided)
    // We expect Zapier to send something like:
    // {
    //   "child_name": "Kailani Beyer",
    //   "parent_email": "meagan.l.beyer@gmail.com",
    //   "parent_phone": "8084905804",
    //   "camp_name": "Pop Star Art Studio Camp",
    //   "start_date": "2026-06-01",
    //   "end_date": "2026-06-05",
    //   "order_number": "7195781"
    // }

    const {
      child_name,
      parent_email,
      parent_phone,
      camp_name,
      start_date,
      end_date,
      order_number
    } = data;

    if (!child_name || !parent_email || !camp_name || !start_date || !end_date) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Use the Admin Client to bypass RLS for registration ingestion
    const supabase = createAdminClient();

    // Generate a unique ID for the QR code
    const qr_id = uuidv4();

    const { data: registration, error } = await supabase
      .from('registrations')
      .insert({
        qr_id,
        child_name,
        parent_email,
        parent_phone,
        camp_name,
        start_date,
        end_date,
        order_number
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Generate the URL that the QR code will point to
    // This will be the staff scanning endpoint
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const qr_url = `${baseUrl}/scan?id=${qr_id}`;

    // Return the qr_url to Zapier so it can be sent via Mailchimp
    return NextResponse.json({
      success: true,
      registration_id: registration.id,
      qr_id: qr_id,
      qr_url: qr_url
    });

  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
