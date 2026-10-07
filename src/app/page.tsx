"use client";

import { useState } from "react";
import { ArrowRight, ShoppingCart, Settings, Repeat, CheckCircle2, Shield, Users, Target, BookOpen } from "lucide-react";
import ContactModal from "@/components/ContactModal";
import Link from "next/link";
import Accordion from "@/components/Accordion";

type InquiryType = "Buy" | "Sell" | "Rent" | "Service" | "Enquire" | null;

// Product Data
const handPalletTrucks = [
  { id: "VI-01", name: "Hydraulic Hand Pallet Truck", capacity: "2.5-3 Tons", img: "/hp.png", style: { width: "300%", height: "250%", top: "-30%", left: "0%" } },
  { id: "VI-02", name: "Heavy Duty Hand Pallet Truck", capacity: "3-5 Tons", img: "/hp.png", style: { width: "300%", height: "250%", top: "-30%", left: "-100%" } },
  { id: "VI-03", name: "Heavy Duty Hand Pallet Truck (SS)", capacity: "1-1.5 Tons", img: "/hp.png", style: { width: "300%", height: "250%", top: "-30%", left: "-200%" } },
  { id: "VI-04", name: "High Lift Pallet Truck", capacity: "Varies", img: "/hp.png", style: { width: "300%", height: "250%", top: "-130%", left: "0%" } },
  { id: "VI-05", name: "Small Hand Pallet Truck", capacity: "Varies", img: "/hp.png", style: { width: "300%", height: "250%", top: "-130%", left: "-100%" } },
  { id: "VI-06", name: "Transformer Hand Pallet Truck", capacity: "Varies", img: "/hp.png", style: { width: "300%", height: "250%", top: "-130%", left: "-200%" } },
];

const drumHandlingTrucks = [
  { id: "VI-07", name: "3 Wheel Drum Truck", capacity: "300kg", img: "/drum1.png", style: { width: "300%", height: "130%", top: "-30%", left: "0%" } },
  { id: "VI-08", name: "4 Wheel Drum Truck", capacity: "Varies", img: "/drum1.png", style: { width: "300%", height: "130%", top: "-30%", left: "-100%" } },
  { id: "VI-09", name: "Drum Tilter & Mover", capacity: "Varies", img: "/drum1.png", style: { width: "300%", height: "130%", top: "-30%", left: "-200%" } },
  { id: "VI-10", name: "Drum Palletizer Stacker", capacity: "Varies", img: "/drum2.png", style: { width: "300%", height: "130%", top: "-30%", left: "0%" } },
  { id: "VI-11", name: "Manual Drum Stacker", capacity: "Varies", img: "/drum2.png", style: { width: "300%", height: "130%", top: "-30%", left: "-100%" } },
  { id: "VI-12", name: "Semi Battery Drum Stacker", capacity: "Varies", img: "/drum2.png", style: { width: "300%", height: "130%", top: "-30%", left: "-200%" } },
];

const ClientLogos = [
  { 
    name: "FedEx", 
    Logo: ({className}: {className: string}) => (
      <svg className={className} viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="24" fill="#4d148c" letterSpacing="-1">Fed</text>
        <text x="42" y="22" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="24" fill="#ff6600" letterSpacing="-1">Ex</text>
      </svg>
    )
  },
  {
    name: "Amul",
    Logo: ({className}: {className: string}) => (
      <svg className={className} viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="24" fontFamily="Georgia, serif" fontWeight="bold" fontSize="26" fill="#e31837">Amul</text>
      </svg>
    )
  },
  {
    name: "SBL",
    Logo: ({className}: {className: string}) => (
      <svg className={className} viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
        <text x="15" y="24" fontFamily="Verdana, sans-serif" fontWeight="900" fontSize="24" fill="#005a9c">SBL</text>
      </svg>
    )
  },
  {
    name: "Usha",
    Logo: ({className}: {className: string}) => (
      <svg className={className} viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
        <text x="15" y="24" fontFamily="Times New Roman, serif" fontWeight="900" fontSize="24" fill="#cc0000" letterSpacing="2">USHA</text>
      </svg>
    )
  },
  {
    name: "Denso",
    Logo: ({className}: {className: string}) => (
      <svg className={className} viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="24" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="24" fill="#d80e15" letterSpacing="-1">DENSO</text>
      </svg>
    )
  },
  {
    name: "Luminous",
    Logo: ({className}: {className: string}) => (
      <svg className={className} viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="22" fontFamily="Trebuchet MS, sans-serif" fontWeight="bold" fontSize="20" fill="#ffb600">LUMINOUS</text>
      </svg>
    )
  },
  {
    name: "VRL Logistics",
    Logo: ({className}: {className: string}) => (
      <svg className={className} viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
        <text x="5" y="22" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="22" fill="#003399" fontStyle="italic">VRL</text>
        <text x="55" y="22" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="12" fill="#333">LOGISTICS</text>
      </svg>
    )
  },
  {
    name: "Tarun Paint",
    Logo: ({className}: {className: string}) => (
      <svg className={className} viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="8" fill="#e63946"/>
        <circle cx="30" cy="15" r="8" fill="#f4a261"/>
        <circle cx="45" cy="15" r="8" fill="#2a9d8f"/>
        <text x="60" y="20" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="14" fill="#264653">TARUN</text>
      </svg>
    )
  }
];

// About Us Features
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

// Blog Posts
const blogPosts = [
  {
    id: "our-mission",
    title: "Our Mission: Empowering & Protecting",
    date: "October 10, 2023",
    category: "Company Pillar",
    excerpt: "Our mission is to empower and protect people while ensuring products are moved safely and efficiently across every warehouse floor.",
    imageUrl: "https://www.inboundlogistics.com/wp-content/uploads/materials-handling-equipment.jpg",
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
    imageUrl: "https://locusrobotics.com/wp-content/uploads/2024/05/AdobeStock_550032636-scaled.jpeg",
  },
];

// FAQs
const faqs = [
  {
    question: "What capacities are available for your Hand Pallet Trucks?",
    answer: "Our standard Hydraulic Hand Pallet Trucks support 2.5 to 3 Tons, while our Heavy Duty models can handle between 3 and 5 Tons. We also offer High Lift and Small Hand Pallet variants depending on your operational needs.",
  },
  {
    question: "Do you provide maintenance and servicing for the equipment?",
    answer: "Yes, absolute reliability is our promise. We offer comprehensive maintenance and repair services for all equipment we sell, ensuring minimal downtime and maximum operational efficiency.",
  },
  {
    question: "What is the warranty period for your Drum Handling Trucks?",
    answer: "All our standard equipment comes with a 1-year manufacturer's warranty covering parts and labor for defects. Extended warranty options and annual maintenance contracts (AMCs) are also available.",
  },
  {
    question: "Can I sell or trade-in my old material handling equipment?",
    answer: "Absolutely. We buy and accept trade-ins for used equipment. You can submit a 'Sell' inquiry via our homepage with the details of your machinery, and our team will provide a competitive evaluation.",
  },
  {
    question: "How do I choose the right Drum Handling Equipment for my warehouse?",
    answer: "The right choice depends on the drum material, weight, and your vertical stacking requirements. For simple movement, a 3 or 4 Wheel Drum Truck is sufficient. For lifting and stacking, we recommend our Manual or Semi Battery Drum Stackers. Contact our experts for a personalized consultation.",
  },
];

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState<InquiryType>(null);

  const openModal = (type: InquiryType) => {
    setInquiryType(type);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Contact Modal */}
      <ContactModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        inquiryType={inquiryType} 
      />

      {/* Hero Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40 z-10" />
        <div 
          className="absolute inset-0 z-0 opacity-60 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
        />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight drop-shadow-lg">
              Keeping Your <span className="text-accent drop-shadow-md">Operations</span> Moving
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-slate-200 mb-10 font-light drop-shadow">
              Premium material handling equipment solutions for modern industrial demands.
            </p>
            
            {/* Action Bar */}
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <button 
                onClick={() => openModal("Buy")}
                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-xl hover:shadow-primary/30 transform hover:-translate-y-1"
              >
                <ShoppingCart className="w-5 h-5" /> Buy Equipment
              </button>
              <button 
                onClick={() => openModal("Rent")}
                className="flex items-center gap-2 bg-white hover:bg-slate-50 text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-xl transform hover:-translate-y-1"
              >
                <Repeat className="w-5 h-5" /> Rent Equipment
              </button>
              <button 
                onClick={() => openModal("Service")}
                className="flex items-center gap-2 bg-slate-800/80 hover:bg-slate-800 backdrop-blur-md border border-slate-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-xl transform hover:-translate-y-1"
              >
                <Settings className="w-5 h-5" /> Request Service
              </button>
            </div>
          </div>

          <div className="hidden lg:block relative pl-10">
            <div className="absolute inset-0 bg-accent blur-[120px] opacity-20 rounded-full" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://www.inboundlogistics.com/wp-content/uploads/materials-handling-equipment.jpg" 
                alt="Material Handling Equipment" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 border border-slate-100 flex items-center gap-4 animate-bounce hover:animate-none transition-all cursor-default">
              <div className="bg-accent/10 p-3 rounded-full text-accent">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-slate-800 leading-tight">ISO Certified</p>
                <p className="text-xs text-slate-500">Premium Quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valued Clients (Marquee) */}
      <section className="py-12 bg-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-wider text-slate-700 uppercase">Trusted By Industry Leaders</h3>
        </div>
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center py-4">
            {ClientLogos.concat(ClientLogos).map((client, index) => (
              <div key={index} className="flex flex-col items-center mx-8 w-32 shrink-0 justify-center min-h-[80px]">
                <client.Logo className="h-8 w-auto md:h-12 object-contain" />
              </div>
            ))}
          </div>
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center py-4">
            {ClientLogos.concat(ClientLogos).map((client, index) => (
              <div key={index} className="flex flex-col items-center mx-8 w-32 shrink-0 justify-center min-h-[80px]">
                <client.Logo className="h-8 w-auto md:h-12 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-white">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Your <span className="text-accent">Partner For Life</span> in Material Handling
            </h2>
            <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed">
              <p className="mb-6">
                At MHE Service Cares, we believe that the right equipment is only the beginning. True operational excellence requires a partner who understands your challenges and is committed to your long-term success.
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
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-[600px]">
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img
              src="https://locusrobotics.com/wp-content/uploads/2024/05/AdobeStock_550032636-scaled.jpeg"
              alt="Industrial warehouse operations"
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg z-20 border border-slate-100 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-slate-900 font-semibold text-lg flex items-center gap-2">
                <CheckCircle2 className="text-accent w-6 h-6" /> Quality Assured
              </p>
              <p className="text-slate-600 text-sm mt-1">Every product is rigorously tested to meet global industrial standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-slate-50" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Premium Equipment</h2>
            <p className="text-lg text-slate-600">Built for durability and performance. Explore our wide range of material handling solutions.</p>
          </div>

          {/* Category 1 */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-primary mb-8 border-b-2 border-accent pb-4 inline-block">Hand Pallet Trucks</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {handPalletTrucks.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 group transform hover:-translate-y-1">
                  <div className="h-48 bg-white relative overflow-hidden flex items-center justify-center border-b border-slate-100">
                    <img src={product.img} className="absolute max-w-none transition-transform group-hover:scale-105 duration-500" style={product.style} />
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-bold text-accent mb-2 uppercase tracking-wide">Capacity: {product.capacity}</div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-4 h-14">{product.name}</h4>
                    <div className="grid grid-cols-3 gap-2">
                      <button 
                        onClick={() => openModal("Buy")}
                        className="w-full py-2 flex justify-center items-center text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
                      >
                        Buy
                      </button>
                      <button 
                        onClick={() => openModal("Rent")}
                        className="w-full py-2 flex justify-center items-center text-sm font-medium bg-slate-100 text-slate-800 rounded-lg hover:bg-slate-200 transition-colors shadow-sm"
                      >
                        Rent
                      </button>
                      <button 
                        onClick={() => openModal("Service")}
                        className="w-full py-2 flex justify-center items-center text-sm font-medium border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
                      >
                        Service
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category 2 */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8 border-b-2 border-accent pb-4 inline-block">Drum Handling Trucks</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {drumHandlingTrucks.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 group transform hover:-translate-y-1">
                  <div className="h-48 bg-white relative overflow-hidden flex items-center justify-center border-b border-slate-100">
                    <img src={product.img} className="absolute max-w-none transition-transform group-hover:scale-105 duration-500" style={product.style} />
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-bold text-accent mb-2 uppercase tracking-wide">Capacity: {product.capacity}</div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-4 h-14">{product.name}</h4>
                    <div className="grid grid-cols-3 gap-2">
                      <button 
                        onClick={() => openModal("Buy")}
                        className="w-full py-2 flex justify-center items-center text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
                      >
                        Buy
                      </button>
                      <button 
                        onClick={() => openModal("Rent")}
                        className="w-full py-2 flex justify-center items-center text-sm font-medium bg-slate-100 text-slate-800 rounded-lg hover:bg-slate-200 transition-colors shadow-sm"
                      >
                        Rent
                      </button>
                      <button 
                        onClick={() => openModal("Service")}
                        className="w-full py-2 flex justify-center items-center text-sm font-medium border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
                      >
                        Service
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Latest Insights</h2>
            <p className="text-lg text-slate-600">Discover the principles that drive our commitment to excellence.</p>
          </div>
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Everything you need to know about our equipment and services.</p>
          </div>
          <Accordion items={faqs} />
        </div>
      </section>
    </div>
  );
}
