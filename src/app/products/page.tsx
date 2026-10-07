"use client";

import { useState } from "react";
import { ArrowRight, ShoppingCart, Settings } from "lucide-react";
import ContactModal from "@/components/ContactModal";

type InquiryType = "Buy" | "Sell" | "Service" | "Enquire" | "Rent" | null;

const handPalletTrucks = [
  { id: "h1", name: "Hydraulic Hand Pallet Truck", capacity: "2.5-3 Tons" },
  { id: "h2", name: "Heavy Duty Hand Pallet Truck", capacity: "3-5 Tons" },
  { id: "h3", name: "High Lift Pallet Truck", capacity: "1-1.5 Tons" },
  { id: "h4", name: "Small Hand Pallet Truck", capacity: "Varies" },
  { id: "h5", name: "Transformer Hand Pallet Truck", capacity: "Varies" },
];

const drumHandlingTrucks = [
  { id: "d1", name: "3 Wheel Drum Truck", capacity: "300kg" },
  { id: "d2", name: "4 Wheel Drum Truck", capacity: "Varies" },
  { id: "d3", name: "Drum Tilter & Mover", capacity: "Varies" },
  { id: "d4", name: "Drum Palletizer Stacker", capacity: "Varies" },
  { id: "d5", name: "Manual & Semi Battery Drum Stackers", capacity: "Varies" },
];

export default function ProductsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState<InquiryType>(null);

  const openModal = (type: InquiryType) => {
    setInquiryType(type);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pt-20 pb-24">
      <ContactModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        inquiryType={inquiryType} 
      />

      <div className="bg-primary py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Our <span className="text-accent">Products</span>
        </h1>
        <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
          Comprehensive material handling solutions designed for durability and ease of use.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 w-full">
        {/* Hand Pallet Trucks */}
        <section id="hand-pallet-trucks" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl font-bold text-primary mb-8 border-b-2 border-accent pb-4 inline-block">Hand Pallet Trucks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {handPalletTrucks.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 group transform hover:-translate-y-1">
                <div className="h-48 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-500" />
                  <ShoppingCart className="w-16 h-16 text-slate-400 relative z-10 transition-transform group-hover:scale-110 duration-300" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-accent mb-2 uppercase tracking-wide">Capacity: {product.capacity}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 h-14">{product.name}</h3>
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
        </section>

        {/* Drum Handling Trucks */}
        <section id="drum-handling-trucks" className="scroll-mt-24">
          <h2 className="text-3xl font-bold text-primary mb-8 border-b-2 border-accent pb-4 inline-block">Drum Handling Trucks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {drumHandlingTrucks.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 group transform hover:-translate-y-1">
                <div className="h-48 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-500" />
                  <Settings className="w-16 h-16 text-slate-400 relative z-10 transition-transform group-hover:scale-110 duration-300" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-accent mb-2 uppercase tracking-wide">Capacity: {product.capacity}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 h-14">{product.name}</h3>
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
        </section>
      </div>
    </div>
  );
}
