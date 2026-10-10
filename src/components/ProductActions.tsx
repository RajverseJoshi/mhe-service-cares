"use client";

import { useState } from "react";
import ContactModal from "@/components/ContactModal";
import { PhoneCall, Repeat, Settings } from "lucide-react";

type InquiryType = "Buy" | "Sell" | "Service" | "Enquire" | "Rent" | null;

export default function ProductActions() {
  const [modalOpen, setModalOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState<InquiryType>(null);

  const openModal = (type: InquiryType) => {
    setInquiryType(type);
    setModalOpen(true);
  };

  return (
    <>
      <ContactModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        inquiryType={inquiryType} 
      />
      <div className="flex flex-col sm:flex-row gap-4 mt-auto">
        <button 
          onClick={() => openModal("Buy")}
          className="flex-1 bg-[#0b5146] hover:bg-[#084239] text-white py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(242,101,34,0.5)] transform hover:-translate-y-1 duration-300"
        >
          <PhoneCall className="w-5 h-5" /> Click to Call / Buy
        </button>
        
        <button 
          onClick={() => openModal("Rent")}
          className="bg-slate-100 hover:bg-slate-200 text-slate-800 py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
          title="Rent this equipment"
        >
          <Repeat className="w-5 h-5" />
        </button>
        
        <button 
          onClick={() => openModal("Service")}
          className="bg-slate-100 hover:bg-slate-200 text-slate-800 py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
          title="Request Service"
        >
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </>
  );
}
