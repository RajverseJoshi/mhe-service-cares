"use client";

import { useState } from "react";
import { ArrowRight, ShoppingCart, Settings } from "lucide-react";
import ContactModal from "@/components/ContactModal";
import Link from "next/link";
import { products } from "@/data/products";
import { motion } from "framer-motion";

type InquiryType = "Buy" | "Sell" | "Service" | "Enquire" | "Rent" | null;

const handPalletTrucks = products.filter(p => p.category === "Hand Pallet Trucks");
const drumHandlingTrucks = products.filter(p => p.category === "Drum Handling Trucks");

export default function ProductsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState<InquiryType>(null);

  const openModal = (type: InquiryType) => {
    setInquiryType(type);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-transparent pt-20 pb-24">
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        inquiryType={inquiryType}
      />

      <div className="bg-gradient-to-br from-[#0B2A4A] to-[#06182c] py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Our <span className="text-accent">Products</span>
        </h1>
        <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
          Comprehensive material handling solutions designed for durability and ease of use.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 w-full">
        {/* Hand Pallet Trucks */}
        <motion.section 
          id="hand-pallet-trucks" 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
          className="mb-24 scroll-mt-24"
        >
          <h2 className="text-3xl font-bold text-primary mb-8 border-b-2 border-accent pb-4 inline-block">Hand Pallet Trucks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {handPalletTrucks.map((product) => (
              <div key={product.id} className="bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20 group transform hover:-translate-y-1">
                <div className="h-48 bg-white/50 relative overflow-hidden flex items-center justify-center border-b border-white/20">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" />
                  <Link href={`/products/${product.id}`} className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors flex items-center gap-1 z-20">
                    Details <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-accent mb-2 uppercase tracking-wide">Capacity: {product.capacity}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 h-14">{product.name}</h3>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => openModal("Buy")}
                      className="w-full py-2 flex justify-center items-center text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-sm hover:shadow-[0_0_15px_rgba(242,101,34,0.5)] transform hover:-translate-y-1 duration-300"
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
        </motion.section>

        {/* Drum Handling Trucks */}
        <motion.section 
          id="drum-handling-trucks" 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
          className="scroll-mt-24"
        >
          <h2 className="text-3xl font-bold text-primary mb-8 border-b-2 border-accent pb-4 inline-block">Drum Handling Trucks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {drumHandlingTrucks.map((product) => (
              <div key={product.id} className="bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20 group transform hover:-translate-y-1">
                <div className="h-48 bg-white/50 relative overflow-hidden flex items-center justify-center border-b border-white/20">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" />
                  <Link href={`/products/${product.id}`} className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors flex items-center gap-1 z-20">
                    Details <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-accent mb-2 uppercase tracking-wide">Capacity: {product.capacity}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 h-14">{product.name}</h3>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => openModal("Buy")}
                      className="w-full py-2 flex justify-center items-center text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-sm hover:shadow-[0_0_15px_rgba(242,101,34,0.5)] transform hover:-translate-y-1 duration-300"
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
        </motion.section>
      </div>
    </div>
  );
}
