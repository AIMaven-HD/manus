import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-navy py-24 text-white overflow-hidden relative">
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-sm font-bold text-cobalt-light uppercase tracking-[0.3em] mb-4">The AI Maven</h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Precision Intelligence for the AI Age.</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Heather spent 20 years in military intelligence, mastering the art of data, security, and strategic foresight. Today, she applies those same high-stakes principles to help business leaders operationalize AI.
            </p>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-1/3 h-full hidden lg:block opacity-20 grayscale">
           {/* Decorative placeholder */}
           <div className="w-full h-full bg-gradient-to-l from-cobalt to-transparent"></div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-container py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
             <div className="absolute inset-0 flex items-center justify-center text-gray-400 italic">
               [Placeholder: Professional Portrait of Heather]
             </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-navy uppercase tracking-tight">The Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              InsureBot Solutions started in the high-complexity world of insurance. Heather realized that if AI systems could handle the strict requirements and complex data of that industry, they could revolutionize any business.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission isn't just to "give you a bot." It's to teach you how to think differently about your operations. We build systems that don't just work—they support your sales, content, and delivery without turning your life into a tech project.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <p className="text-4xl font-bold text-cobalt mb-2">20yr</p>
                <p className="text-sm font-bold text-navy uppercase tracking-wider">Intelligence Exp.</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-cobalt mb-2">100+</p>
                <p className="text-sm font-bold text-navy uppercase tracking-wider">Systems Built</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values/Philosophy */}
      <section className="bg-gray-50 py-32">
        <div className="section-container">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-navy uppercase tracking-tight">The AI Command Center Philosophy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Security First",
                description: "With a background in military intelligence, security isn't an afterthought. We use reputable tools and follow best practices to protect your data."
              },
              {
                title: "Human-Centric",
                description: "AI should serve the founder, not the other way around. We build simple, plain-English workflows that you actually enjoy using."
              },
              {
                title: "Actionable ROI",
                description: "We don't do experiments for the sake of experiments. Every system we build must reclaim time or drive revenue."
              }
            ].map((value) => (
              <div key={value.title} className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="text-xl font-bold text-navy mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
