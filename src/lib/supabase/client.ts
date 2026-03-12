import { createBrowserClient } from '@supabase/ssr';
import { Database } from './database.types';

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    // Return a dummy client or handle the missing env vars gracefully
    // In a real app, you'd want to ensure these are present
    return createBrowserClient<Database>(
      'https://placeholder.supabase.co',
      'placeholder'
    );
  }

  return createBrowserClient<Database>(
    supabaseUrl,
    supabaseAnonKey
  );
}
