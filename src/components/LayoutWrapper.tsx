import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInObserver from "@/components/FadeInObserver";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <FadeInObserver />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
