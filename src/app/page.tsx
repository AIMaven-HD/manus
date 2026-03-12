import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 text-center p-6">
      <h1 className="text-5xl font-black text-pink-600 mb-4 tracking-tight">
        KIDZART & <br />
        <span className="text-blue-600">CLUB SCIENTIFIC</span>
      </h1>
      <p className="text-xl text-gray-700 mb-12 max-w-md font-medium">
        Hawaii&apos;s most creative and fun science &amp; art camps!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-lg">
        <Link
          href="/login"
          className="bg-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-pink-700 transition transform hover:scale-105"
        >
          Staff & Admin Login
        </Link>
        <Link
          href="/scan"
          className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
        >
          Open Scanner
        </Link>
      </div>

      <div className="mt-16 text-gray-400 text-sm">
        © 2026 KidzArt and Club Scientific Hawaii
      </div>
    </div>
  );
}
