import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: "speaker",
      title: "Keynote Speaking",
      subtitle: "Inspiration meets Intelligence",
      description: "Heather brings her unique perspective from military intelligence to the world of AI. Perfect for conferences, corporate retreats, and leadership summits looking to cut through the hype and understand the strategic ROI of AI.",
      cta: "Book Heather to Speak",
      link: "/contact?service=speaker",
      featured: true,
      points: [
        "Demystifying AI for Executives",
        "The Intelligence Framework: Security & Strategy",
        "Future-Proofing Your Workforce",
        "Live AI Capability Demonstrations"
      ]
    },
    {
      id: "coaching",
      title: "1:1 Strategic Consulting",
      subtitle: "High-Ticket, Deep-Impact Implementation",
      description: "A premium 3-month partnership where we build your AI Command Center. This is hands-on, high-level strategy and implementation for founders who want a tireless digital workforce.",
      cta: "Apply for 1:1 Consulting",
      link: "/contact?service=coaching",
      featured: true,
      points: [
        "Full Workflow Audit & Optimization",
        "Custom AI Agent Development",
        "Direct 1:1 Implementation Sessions",
        "Security & Privacy Integration"
      ]
    },
    {
      id: "wonderland",
      title: "AI in Wonderland",
      subtitle: "The Community & Learning Hub",
      description: "Our low-ticket, high-value entry point. Join a community of forward-thinking entrepreneurs learning to use AI in real-time. Live classes, replays, and experiments.",
      cta: "Join AI in Wonderland",
      link: "https://skool.com/ai101/plans",
      featured: false,
      points: [
        "Live Weekly AI Experiments",
        "Access to AI Prompt Library",
        "Community Support & Networking",
        "Monthly Q&A with Heather"
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-navy py-24 text-white">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From keynote inspiration to deep-dive implementation, we help you operationalize AI for maximum ROI.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-container py-32">
        <div className="space-y-32">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}>
              <div className="flex-1 space-y-8">
                <div>
                  <h2 className="text-sm font-bold text-cobalt uppercase tracking-widest mb-2">{service.subtitle}</h2>
                  <h3 className="text-4xl font-bold text-navy">{service.title}</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center space-x-3 text-gray-700">
                      <span className="text-cobalt font-bold">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Link
                    href={service.link}
                    className={service.featured ? "btn-primary inline-block" : "btn-secondary inline-block"}
                  >
                    {service.cta}
                  </Link>
                </div>
              </div>
              <div className="flex-1 w-full aspect-video bg-gray-100 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-400 italic">
                [Placeholder: Image for {service.title}]
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Summary */}
      <section className="bg-gray-50 py-24">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy uppercase tracking-tight">Additional Services & FAQs</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-navy mb-2">Do you offer Website Lead Capture Bots?</h4>
              <p className="text-gray-600">Yes! While our focus is on strategy and the Command Center, we offer a "Website Lead Capture Sentry" as a focused add-on for $997 setup + $100/mo. It's a pre-built AI concierge that answers FAQs and captures leads 24/7.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-navy mb-2">How do we get started?</h4>
              <p className="text-gray-600">The best first step is a 15-minute fit call. We'll map where you're losing time or leaving money on the table and decide which path is best for you.</p>
              <Link href="/contact" className="text-cobalt font-bold mt-4 inline-block hover:underline">Book a Fit Call →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
