import Link from 'next/link';

export default function Blog() {
  const posts = [
    {
      title: "How to Reclaim 20 Hours a Week Using AI Agents",
      excerpt: "The secret to scaling isn't hiring more people—it's building better systems. Learn how to operationalize your first AI intern.",
      date: "March 15, 2024",
      category: "Strategy",
      slug: "reclaim-20-hours"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-navy py-16 text-white mb-12">
        <div className="section-container">
          <h1 className="text-4xl font-bold uppercase tracking-tight">The Command Center Blog</h1>
          <p className="text-gray-400 mt-4">Insights on AI, automation, and high-growth operations.</p>
        </div>
      </section>

      <div className="section-container pb-32">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content (70%) */}
          <div className="lg:w-[70%]">
            <div className="space-y-16">
              {posts.map((post) => (
                <article key={post.slug} className="group cursor-pointer">
                  <div className="aspect-video bg-gray-100 rounded-2xl mb-6 overflow-hidden border border-gray-200 flex items-center justify-center text-gray-400 italic">
                    [Placeholder Image for {post.title}]
                  </div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-xs font-bold text-cobalt uppercase tracking-widest">{post.category}</span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-navy mb-4 group-hover:text-cobalt transition-colors">{post.title}</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`} className="font-bold text-navy border-b-2 border-cobalt pb-1 hover:text-cobalt transition-colors">
                    Read Post
                  </Link>
                </article>
              ))}

              <div className="p-12 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                <h3 className="text-xl font-bold text-navy mb-2">More Insights Coming Soon</h3>
                <p className="text-gray-600">We are busy building AI systems. Check back soon for more practical tactics.</p>
              </div>
            </div>
          </div>

          {/* Sidebar (30%) */}
          <aside className="lg:w-[30%] space-y-12">
            <div className="bg-navy text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Join the Class</h3>
              <p className="text-gray-400 text-sm mb-6">Ready to operationalize AI in your business? Join "AI in Wonderland" today.</p>
              <Link href="https://skool.com/ai101/plans" className="btn-primary block text-center text-sm">
                Get Started
              </Link>
            </div>

            <div>
              <h4 className="font-bold text-navy uppercase tracking-widest text-xs mb-6 border-b border-gray-100 pb-2">Categories</h4>
              <ul className="space-y-3 text-sm">
                {['AI Strategy', 'Automation', 'Case Studies', 'News'].map((cat) => (
                  <li key={cat}>
                    <Link href="#" className="text-gray-600 hover:text-cobalt transition-colors flex justify-between items-center">
                      <span>{cat}</span>
                      <span className="text-gray-300">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sticky top-28">
               <h4 className="font-bold text-navy uppercase tracking-widest text-xs mb-6 border-b border-gray-100 pb-2">Newsletter</h4>
               <p className="text-sm text-gray-600 mb-4">Get AI tactics delivered to your inbox.</p>
               <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-cobalt mb-2"
                />
                <button className="w-full bg-navy text-white rounded-md px-4 py-2 text-sm font-semibold hover:bg-black transition-colors">
                  Subscribe
                </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
