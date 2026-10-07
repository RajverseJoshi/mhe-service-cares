import Accordion from "@/components/Accordion";

export const metadata = {
  title: "FAQ | MHE Service Cares",
  description: "Frequently Asked Questions about our Material Handling Equipment.",
};

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

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pt-20 pb-24">
      {/* Header */}
      <div className="bg-primary py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked <span className="text-accent">Questions</span>
          </h1>
          <p className="text-xl text-slate-300 font-light">
            Everything you need to know about our equipment and services.
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">Have a different question?</h2>
          <p className="text-slate-600">
            If you cannot find the answer you are looking for, please feel free to{" "}
            <a href="/contact" className="text-primary font-medium hover:underline hover:text-accent transition-colors">
              contact our team
            </a>.
          </p>
        </div>
        
        <Accordion items={faqs} />
      </section>
    </div>
  );
}
