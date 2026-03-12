'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { createClient } from '@/lib/supabase/client';
import { useSearchParams } from 'next/navigation';

import { Registration } from '@/lib/supabase/database.types';

export default function ScanPage() {
  const searchParams = useSearchParams();
  const initialQrId = searchParams.get('id');
  const [registration, setRegistration] = useState<Registration | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);
  const supabase = createClient();

  useEffect(() => {
    if (initialQrId) {
      fetchRegistration(initialQrId);
    }

    const scanner = new Html5QrcodeScanner(
      'reader',
      { fps: 10, qrbox: { width: 250, height: 250 } },
      /* verbose= */ false
    );

    scanner.render(
      (decodedText) => {
        // Assume decodedText is either the full URL or just the ID
        let id = decodedText;
        if (decodedText.includes('?id=')) {
          id = decodedText.split('?id=')[1];
        }
        fetchRegistration(id);
      },
      () => {
        // ignore errors
      }
    );

    scannerRef.current = scanner;

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch(console.error);
      }
    };
  }, [initialQrId, fetchRegistration]);

  const fetchRegistration = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    setMessage(null);
    try {
      const { data, error } = await supabase
        .from('registrations')
        .select('*')
        .eq('qr_id', id)
        .single();

      if (error) throw error;
      setRegistration(data);
    } catch {
      setError('Registration not found');
      setRegistration(null);
    } finally {
      setLoading(false);
    }
  }, [supabase]);

  async function handleAttendance(type: 'drop-off' | 'pick-up') {
    if (!registration) return;
    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Not authenticated');

      const { error } = await supabase.from('attendance').insert({
        registration_id: registration.id,
        type,
        recorded_by: user.id,
      });

      if (error) throw error;
      setMessage(`Successfully recorded ${type} for ${registration.child_name}`);
      // Clear after 3 seconds
      setTimeout(() => {
        setMessage(null);
        setRegistration(null);
      }, 3000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-slate-50 p-4">
      <h1 className="text-2xl font-bold text-pink-600 mb-6">Staff Scanner</h1>

      <div id="reader" className="w-full max-w-md bg-white rounded-lg shadow-sm overflow-hidden mb-6"></div>

      {loading && <p className="text-gray-500">Processing...</p>}

      {error && (
        <div className="w-full max-w-md p-4 mb-4 text-red-700 bg-red-100 rounded-lg">
          {error}
        </div>
      )}

      {message && (
        <div className="w-full max-w-md p-4 mb-4 text-green-700 bg-green-100 rounded-lg">
          {message}
        </div>
      )}

      {registration && !message && (
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md border-2 border-pink-200">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{registration.child_name}</h2>
          <p className="text-gray-600 mb-4">{registration.camp_name}</p>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleAttendance('drop-off')}
              disabled={loading}
              className="py-3 px-4 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 disabled:opacity-50"
            >
              Drop-off
            </button>
            <button
              onClick={() => handleAttendance('pick-up')}
              disabled={loading}
              className="py-3 px-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 disabled:opacity-50"
            >
              Pick-up
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
