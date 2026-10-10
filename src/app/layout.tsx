import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MHE Service Cares | Material Handling Equipment",
  description: "Keeping Your Operations Moving. Partner for life in material handling equipment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans relative overflow-x-hidden">
        {/* Global Animated Orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
          <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-[#0B2A4A]/25 rounded-full mix-blend-multiply filter blur-[150px] animate-pulse"></div>
          <div className="absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] bg-[#F26522]/20 rounded-full mix-blend-multiply filter blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="relative z-10 flex flex-col min-h-full w-full">
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
