import { notFound } from "next/navigation";
import { products } from "@/data/products";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ProductActions from "@/components/ProductActions";

// Required for Next.js 16 Static Export of dynamic routes
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200 py-4 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center text-sm text-slate-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800 font-medium">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <Link href="/products" className="inline-flex items-center text-primary font-medium hover:text-primary/80 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
        </Link>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
          
          {/* Left Column: Image */}
          <div className="lg:w-1/2 bg-white flex flex-col p-8 border-b lg:border-b-0 lg:border-r border-slate-100 items-center justify-center">
            <div className="w-full relative aspect-square rounded-xl overflow-hidden bg-slate-50 shadow-inner p-4 flex items-center justify-center">
              <img 
                src={product.img} 
                alt={product.name} 
                className="w-full h-full object-contain rounded-lg drop-shadow-xl"
              />
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col">
            <div className="mb-2 text-xs font-bold tracking-widest uppercase text-accent">
              {product.category}
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
              {product.name} <span className="font-light text-slate-500 text-2xl">| {product.id}</span>
            </h1>
            
            <div className="mb-8 pb-8 border-b border-slate-100">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Super Deals
                </span>
                <span className="text-3xl font-black text-slate-900">{product.price || "Contact for Price"}</span>
              </div>
              <p className="text-sm text-slate-500">GST Extra. Bulk Discount Available. Contact For Best Prices.</p>
            </div>

            <div className="flex-grow mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Technical Specifications:</h3>
              <ul className="space-y-3">
                {product.specs.map((spec, index) => {
                  const parts = spec.split(":");
                  return (
                    <li key={index} className="flex items-start text-slate-700 text-base">
                      <span className="text-accent mr-3 mt-1.5 w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span>
                      {parts.length > 1 ? (
                        <span>
                          <strong className="font-semibold text-slate-900">{parts[0]}:</strong> {parts.slice(1).join(":")}
                        </span>
                      ) : (
                        <span>{spec}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Actions (Client Component) */}
            <ProductActions />
          </div>
        </div>
      </div>
    </div>
  );
}
