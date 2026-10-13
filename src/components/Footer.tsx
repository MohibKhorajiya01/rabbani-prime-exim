import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo.tsx';
import { COMPANY_CONFIG } from '../config/company.ts';

interface FooterProps {
  onNavClick: (tab: string) => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071426] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="cursor-pointer" onClick={() => onNavClick('home')}>
              <Logo variant="light" size="lg" />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mt-3">
              {COMPANY_CONFIG.description}
            </p>
            <div className="text-xs text-[#F9B718] font-semibold italic">
              &ldquo;Connecting Indian products with global markets.&rdquo;
            </div>

            {/* Quick Sourcing Hub */}
            <div className="pt-2 text-xs text-slate-400 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#F9B718] shrink-0 mt-0.5" />
              <span>{COMPANY_CONFIG.contact.address}</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F9B718]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => onNavClick('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('about')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('products')}
                  className="hover:text-white transition-colors"
                >
                  Products Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('global-reach')}
                  className="hover:text-white transition-colors"
                >
                  Global Reach
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('services')}
                  className="hover:text-white transition-colors"
                >
                  Export Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Product Categories Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F9B718]">
              Export Categories
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => onNavClick('products')}
                  className="hover:text-white transition-colors text-left"
                >
                  Fresh Produce (Chilli, Onion, Corn, Mango)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('products')}
                  className="hover:text-white transition-colors text-left"
                >
                  Spices &amp; Dried Products (Chilli, Turmeric, Cumin)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('products')}
                  className="hover:text-white transition-colors text-left"
                >
                  Tissue &amp; Paper Products (Toilet, Facial, Kitchen)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('products')}
                  className="hover:text-white transition-colors text-left"
                >
                  Stainless Steel Kitchenware &amp; Vacuum Flasks
                </button>
              </li>
            </ul>
          </div>

          {/* Statutory Credentials & Direct Inquiries */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F9B718]">
              Business Credentials
            </h4>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['APEDA', 'FSSAI', 'MSME', 'GST', 'IEC'].map((code) => (
                <span
                  key={code}
                  className="text-[10px] font-mono font-bold px-2 py-0.5 bg-white/10 text-slate-200 rounded border border-white/10"
                >
                  {code}
                </span>
              ))}
            </div>

            <div className="pt-3 space-y-2">
              <div className="text-xs text-slate-300 flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#F9B718] shrink-0" />
                <a
                  href={`mailto:${COMPANY_CONFIG.contact.exportInquiryEmail}`}
                  className="hover:text-[#F9B718] transition-colors"
                >
                  {COMPANY_CONFIG.contact.exportInquiryEmail}
                </a>
              </div>
              <div className="text-xs text-slate-300 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#F9B718] shrink-0" />
                <span>{COMPANY_CONFIG.contact.phoneDisplay}</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-slate-400 block italic">
                Verified compliance credentials available upon request.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; 2026 Rabbani Prime Exim. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-white transition-colors"
            >
              Terms &amp; Conditions
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#F9B718] transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
