import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src="/logo.png" alt="MHE Service Care Logo" className="h-12 w-auto mb-6 bg-white p-2 rounded" />
          <p className="text-sm text-slate-400 mb-6 leading-relaxed">
            Keeping your operations moving with premium material handling equipment, expert service, and enduring partnerships.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link href="/products" className="hover:text-accent transition-colors">Products</Link></li>
            <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
            <li><Link href="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Equipment</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/products#hand-pallet-trucks" className="hover:text-accent transition-colors">Hand Pallet Trucks</Link></li>
            <li><Link href="/products#drum-handling-trucks" className="hover:text-accent transition-colors">Drum Handling Trucks</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Buy Equipment</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Sell Old Equipment</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Request Service</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Contact Info</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent shrink-0" />
              <span>123 Industrial Way, Sector 4, Logistics Park, New Delhi, 110001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-accent shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-accent shrink-0" />
              <span>info@mheservicecares.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
        &copy; 2026 MHE Service Cares. All rights reserved.
      </div>
    </footer>
  );
}
