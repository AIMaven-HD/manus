import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const supabase = await createClient();

  // Get current user and their profile/role
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single();

  // If not an admin, redirect to scanner
  if (profile?.role !== 'admin') {
    redirect('/scan');
  }

  const { data: registrations, error } = await supabase
    .from('registrations')
    .select(`
      *,
      attendance (
        type,
        timestamp
      )
    `)
    .order('created_at', { ascending: false });

  if (error) {
    return <div className="p-8 text-red-600">Error loading dashboard: {error.message}</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-pink-600">Admin Dashboard</h1>
          <p className="text-gray-600">KidzArt & Club Scientific Hawaii</p>
        </div>
        <div className="flex gap-4">
          <Link
            href="/scan"
            className="px-6 py-2 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition"
          >
            Open Scanner
          </Link>
          <form action="/auth/signout" method="post">
            <button className="px-6 py-2 border border-gray-300 rounded-lg font-semibold hover:bg-gray-100 transition">
              Sign Out
            </button>
          </form>
        </div>
      </header>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-pink-50 text-pink-700 font-semibold">
              <tr>
                <th className="px-6 py-4 border-b">Child Name</th>
                <th className="px-6 py-4 border-b">Camp</th>
                <th className="px-6 py-4 border-b">Dates</th>
                <th className="px-6 py-4 border-b">Last Event</th>
                <th className="px-6 py-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {registrations?.map((reg) => {
                const latestAttendance = Array.isArray(reg.attendance)
                  ? [...reg.attendance].sort((a, b) => {
                      const timeA = a.timestamp ? new Date(a.timestamp).getTime() : 0;
                      const timeB = b.timestamp ? new Date(b.timestamp).getTime() : 0;
                      return timeB - timeA;
                    })[0]
                  : null;

                const status = latestAttendance
                  ? latestAttendance.type === 'drop-off' ? 'Checked In' : 'Checked Out'
                  : 'Not Arrived';

                const statusColor = status === 'Checked In'
                  ? 'bg-green-100 text-green-700'
                  : status === 'Checked Out'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-700';

                return (
                  <tr key={reg.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 font-medium text-gray-900">{reg.child_name}</td>
                    <td className="px-6 py-4 text-gray-600">{reg.camp_name}</td>
                    <td className="px-6 py-4 text-gray-500 text-sm">
                      {new Date(reg.start_date).toLocaleDateString()} - {new Date(reg.end_date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-sm">
                      {latestAttendance && latestAttendance.timestamp
                        ? `${latestAttendance.type} at ${new Date(latestAttendance.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
                        : '-'}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${statusColor}`}>
                        {status}
                      </span>
                    </td>
                  </tr>
                );
              })}
              {registrations?.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                    No registrations found. Send a webhook to see data here.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
