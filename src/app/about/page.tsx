import { CheckCircle2, Shield, Users, Target } from "lucide-react";

export const metadata = {
  title: "About Us | MHE Service Cares",
  description: "Learn about MHE Service Cares, your partner for life in material handling equipment.",
};

const features = [
  {
    name: "Enduring Relationships",
    description: "We don't just sell equipment; we build long-term partnerships focused on your continuous success.",
    icon: Users,
  },
  {
    name: "Personalized Support",
    description: "Every operation is unique. We provide tailored solutions to match your specific industrial requirements.",
    icon: Target,
  },
  {
    name: "Expert Guidance",
    description: "With decades of industry experience, our team offers unmatched technical expertise and consultation.",
    icon: Shield,
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pt-20">
      {/* Header Section */}
      <div className="bg-primary py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            About <span className="text-accent">Us</span>
          </h1>
          <p className="text-xl text-slate-300 font-light">
            Dedicated to elevating your operational efficiency.
          </p>
        </div>
      </div>

      {/* Split Screen Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Your <span className="text-accent">Partner For Life</span> in Material Handling
            </h2>
            <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed">
              <p className="mb-6">
                At MHE Service Cares, we believe that the right equipment is only the beginning. True operational excellence requires a partner who understands your challenges and is committed to your long-term success.
              </p>
              <p className="mb-8">
                Since our inception, we have set the standard for premium B2B service in the material handling industry. We don't just supply trucks and stackers; we deliver reliability, safety, and uninterrupted workflow for your enterprise.
              </p>
            </div>

            <dl className="mt-10 space-y-8">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-12 group">
                  <dt className="text-lg font-semibold text-slate-900 mb-2">
                    <div className="absolute left-0 top-1 h-8 w-8 flex items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      <feature.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="text-base text-slate-600 leading-relaxed">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-[600px]">
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?q=80&w=2070&auto=format&fit=crop"
              alt="Industrial warehouse operations"
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg z-20 border border-slate-100 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-slate-900 font-semibold text-lg flex items-center gap-2">
                <CheckCircle2 className="text-accent w-6 h-6" /> Quality Assured
              </p>
              <p className="text-slate-600 text-sm mt-1">Every product is rigorously tested to meet global industrial standards.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
