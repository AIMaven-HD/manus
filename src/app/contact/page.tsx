export default function Contact() {
  return (
    <div className="bg-white">
      <section className="bg-navy py-24 text-white">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight">Connect with the Command Center</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to reclaim your time and build smarter systems? Tell us a bit about your business and let's see if we're a fit.
          </p>
        </div>
      </section>

      <section className="section-container py-24">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-8">Let's talk ROI.</h2>
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-navy mb-2">Location</h4>
                <p className="text-gray-600">Based in beautiful Kailua, Hawaii. Serving clients globally.</p>
              </div>
              <div>
                <h4 className="font-bold text-navy mb-2">Email</h4>
                <p className="text-gray-600">hello@aicommandcenter.ai</p>
              </div>
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-navy mb-4 italic">"I spent 20 years in military intelligence. Your data and strategy are in safe hands."</h4>
                <p className="text-sm text-gray-500">— Heather, Founder</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-2xl">
            {/* GHL Form Placeholder */}
            <div className="space-y-6">
              <div className="text-center pb-6 border-b border-gray-100 mb-6">
                 <p className="text-xs font-bold text-cobalt uppercase tracking-widest">Application Form</p>
              </div>

              <div className="p-12 border-2 border-dashed border-gray-200 rounded-xl text-center">
                 <p className="text-gray-400 font-medium mb-4">[ INSERT GOHIGHLEVEL FORM HERE ]</p>
                 <p className="text-xs text-gray-400">Include fields for: Name, Company, AI Maturity Level, and Message.</p>
              </div>

              {/* Static backup fields for visual representation */}
              <div className="opacity-30 pointer-events-none space-y-4">
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold text-navy uppercase">Full Name</label>
                  <div className="h-10 bg-gray-100 rounded-md"></div>
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold text-navy uppercase">Company</label>
                  <div className="h-10 bg-gray-100 rounded-md"></div>
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold text-navy uppercase">AI Maturity Level</label>
                  <div className="h-10 bg-gray-100 rounded-md"></div>
                </div>
                <div className="h-12 bg-navy rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
