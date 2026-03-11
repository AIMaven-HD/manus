"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold tracking-tighter text-navy uppercase">
              AI Command <span className="text-cobalt">Center</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-cobalt transition-colors">Home</Link>
            <Link href="/services" className="text-sm font-medium hover:text-cobalt transition-colors">Services</Link>
            <Link href="/about" className="text-sm font-medium hover:text-cobalt transition-colors">About</Link>
            <Link href="/blog" className="text-sm font-medium hover:text-cobalt transition-colors">Blog</Link>
            <Link href="/contact" className="btn-primary !py-2 text-sm">
              Join the Class
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-navy">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-4">
          <Link href="/" className="block text-base font-medium" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/services" className="block text-base font-medium" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/about" className="block text-base font-medium" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/blog" className="block text-base font-medium" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/contact" className="btn-primary block text-center" onClick={() => setIsOpen(false)}>
            Join the Class
          </Link>
        </div>
      )}
    </nav>
  );
}
