import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-white pt-20 pb-32 overflow-hidden">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-10 fade-in">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-navy leading-tight mb-6">
                Transform your business with AI in the first week.
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                Stop the guesswork. We help leaders harness AI to build high-ROI systems and reclaim 20+ hours of their work week.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/contact" className="btn-primary text-center">
                  Join the Command Center
                </Link>
                <Link href="/services" className="btn-secondary text-center">
                  View the Curriculum
                </Link>
              </div>
            </div>
            <div className="relative fade-in" style={{ transitionDelay: '0.2s' }}>
              <div className="relative w-full aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium italic">
                  [Placeholder: Professional cutout of Heather]
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-cobalt text-white p-6 rounded-lg shadow-xl hidden md:block">
                <p className="font-bold text-2xl">20+</p>
                <p className="text-xs uppercase tracking-wider">Hours reclaimed / week</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Bar */}
      <section className="bg-gray-50 py-12 border-y border-gray-100 fade-in">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">Featured & Member of</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale opacity-60">
             {['Kailua Chamber', 'Kailua Town Magazine', 'BNI Member', 'Junior League', 'Her Nation', 'Women of the World'].map((logo) => (
               <div key={logo} className="text-lg font-bold text-navy whitespace-nowrap">{logo}</div>
             ))}
          </div>
        </div>
      </section>

      {/* The Value Stack */}
      <section className="section-container bg-white">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 uppercase tracking-tight">The Value Stack</h2>
          <div className="w-20 h-1 bg-cobalt mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Learn Something Today",
              description: "Practical AI tactics you can deploy immediately to see instant results in your daily workflow.",
              icon: "⚡"
            },
            {
              title: "Build Lasting Systems",
              description: "Construct a 3-month foundation that revolutionizes your operations and scales with your growth.",
              icon: "🏗️"
            },
            {
              title: "Hire Your Best Intern",
              description: "Use AI to create a tireless digital workforce that handles repetitive tasks while you focus on strategy.",
              icon: "🤖"
            }
          ].map((item, idx) => (
            <div key={item.title} className="p-10 border border-gray-100 rounded-2xl hover:shadow-2xl transition-all duration-300 group fade-in" style={{ transitionDelay: `${idx * 0.1}s` }}>
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
              <h3 className="text-xl font-bold text-navy mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Offer Section */}
      <section className="bg-navy py-24 text-white">
        <div className="section-container">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-16 overflow-hidden relative fade-in">
            <div className="absolute top-0 right-0 p-8">
               <span className="bg-cobalt text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">3-Month Intensive</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">The AI Command Center Offer</h2>
                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                  A high-touch, strategic implementation program designed for founders who want to stop being the bottleneck.
                </p>
                <div className="space-y-4">
                  {[
                    "Live Weekly Strategy Sprints",
                    "Private Community of Forward-Thinking Leaders",
                    "Custom AI Frameworks Tailored to Your Business",
                    "Direct 1:1 Implementation Support",
                    "Lifetime Access to the Resource Library"
                  ].map((check) => (
                    <div key={check} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cobalt flex items-center justify-center text-xs">✓</div>
                      <span className="text-gray-200">{check}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-12">
                  <Link href="/contact" className="btn-primary inline-block">
                    Apply for the Next Cohort
                  </Link>
                </div>
              </div>
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10 flex flex-col justify-center">
                 <blockquote className="text-2xl italic text-gray-300 mb-8 leading-relaxed">
                   "Heather's background in military intelligence brings a level of precision to AI implementation that I haven't seen anywhere else. We saved 15 hours in the first two weeks."
                 </blockquote>
                 <div className="flex items-center space-x-4">
                   <div className="w-14 h-14 bg-gray-600 rounded-full"></div>
                   <div>
                     <p className="font-bold">Sarah Jenkins</p>
                     <p className="text-sm text-gray-400">Founder, Scale Ops</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
