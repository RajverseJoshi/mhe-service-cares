import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact Us | MHE Service Cares",
  description: "Get in touch with us for all your material handling needs.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pt-20 pb-24">
      <div className="bg-primary py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Contact <span className="text-accent">Us</span>
        </h1>
        <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
          We are here to help. Reach out to our team of experts today.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none resize-none"></textarea>
              </div>
              <button type="button" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg shadow-md transition-colors text-lg">
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-8">
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100 flex items-start gap-6 group hover:shadow-md transition-shadow">
              <div className="bg-primary/10 p-4 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Our Headquarters</h3>
                <p className="text-slate-600 leading-relaxed">
                  123 Industrial Way<br />
                  Sector 4, Logistics Park<br />
                  New Delhi, 110001
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100 flex items-start gap-6 group hover:shadow-md transition-shadow">
              <div className="bg-primary/10 p-4 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Phone className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Phone</h3>
                <p className="text-slate-600 leading-relaxed">
                  Sales: +91 98765 43210<br />
                  Service: +91 98765 43211
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100 flex items-start gap-6 group hover:shadow-md transition-shadow">
              <div className="bg-primary/10 p-4 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Mail className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
                <p className="text-slate-600 leading-relaxed">
                  info@mheservicecares.com<br />
                  support@mheservicecares.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
