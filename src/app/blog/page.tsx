import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata = {
  title: "Blog | MHE Service Cares",
  description: "Insights, news, and our foundational pillars.",
};

const blogPosts = [
  {
    id: "our-mission",
    title: "Our Mission: Empowering & Protecting",
    date: "October 10, 2023",
    category: "Company Pillar",
    excerpt: "Our mission is to empower and protect people while ensuring products are moved safely and efficiently across every warehouse floor.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "our-vision",
    title: "Our Vision: Quality & Innovation",
    date: "November 05, 2023",
    category: "Company Pillar",
    excerpt: "We strive for uncompromising quality, constant innovation, and to be recognized globally as the partner of choice in material handling.",
    imageUrl: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "our-core-values",
    title: "Our Core Values: Pioneering Integrity",
    date: "December 12, 2023",
    category: "Company Pillar",
    excerpt: "Guided by our core values of Pioneering spirit, unwavering Integrity, and continuous Excellence, we build lasting industrial partnerships.",
    imageUrl: "https://images.unsplash.com/photo-1565610222536-ce1278b5e94b?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pt-20 pb-24">
      {/* Header */}
      <div className="bg-primary py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Our <span className="text-accent">Insights</span> & Pillars
          </h1>
          <p className="text-xl text-slate-300 font-light">
            Discover the principles that drive our commitment to excellence.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col group transform hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden bg-slate-200">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center text-sm text-slate-400 mb-3 font-medium">
                  <BookOpen className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-slate-600 mb-6 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog#${post.id}`} 
                  className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors mt-auto"
                >
                  Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
