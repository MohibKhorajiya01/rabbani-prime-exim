import React, { useState, useEffect } from 'react';
import {
  X,
  ArrowRight,
  Home,
  Info,
  Package,
  Globe,
  ShieldCheck,
  PhoneCall,
  Phone,
  MessageCircle,
  FileText,
  ChevronRight,
} from 'lucide-react';
import { Logo } from './Logo.tsx';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenQuote?: (productName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenQuote,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', desc: 'Overview & Certifications', icon: Home },
    { id: 'about', label: 'About Us', desc: 'Company Profile & Vision', icon: Info },
    { id: 'products', label: 'Products', desc: 'Agri, Spices & Paper Items', icon: Package },
    { id: 'global-reach', label: 'Global Reach', desc: 'Export Network & Ports', icon: Globe },
    { id: 'services', label: 'Services', desc: 'Cold Chain & Custom Packaging', icon: ShieldCheck },
    { id: 'contact', label: 'Contact Us', desc: 'Direct Inquiries & Office', icon: PhoneCall },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuoteClick = () => {
    setMobileMenuOpen(false);
    if (onOpenQuote) {
      onOpenQuote();
    } else {
      handleNavClick('contact');
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
            : 'bg-[#FFFDF7]/95 backdrop-blur-sm border-b border-slate-200/50 py-3.5 sm:py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Zone 1: Brand Wordmark & Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F9B718] rounded-lg shrink-0 cursor-pointer"
              aria-label="Rabbani Prime Exim Home"
            >
              <Logo variant="dark" size="md" />
            </button>

            {/* Zone 2: Desktop Navigation Links (Hidden on mobile) */}
            <nav
              aria-label="Main Navigation"
              className="hidden md:flex items-center gap-6 lg:gap-8"
            >
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative py-1 text-sm font-semibold tracking-wide transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'text-[#0B1F3A]'
                        : 'text-[#5E6878] hover:text-[#0B1F3A]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F9B718] rounded-full"
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Actions & Mobile Hamburger Menu Toggle */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Desktop / Tablet CTA */}
              <button
                onClick={() => handleNavClick('contact')}
                className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-[#F9B718] hover:bg-[#e2a40e] text-[#0B1F3A] font-bold text-xs uppercase tracking-wider rounded-lg shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0B1F3A]" />
              </button>

              {/* 3-LINE MOBILE HAMBURGER BUTTON (Clearly prominent on mobile) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden flex items-center justify-center p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 active:scale-95 text-[#0B1F3A] shadow-xs transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#F9B718] cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open 3-line Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#0B1F3A]" />
                ) : (
                  <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.25">
                    {/* Crisp 3 lines */}
                    <span className="w-5.5 h-0.5 bg-[#0B1F3A] rounded-full"></span>
                    <span className="w-5.5 h-0.5 bg-[#F9B718] rounded-full"></span>
                    <span className="w-5.5 h-0.5 bg-[#0B1F3A] rounded-full"></span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU BACKDROP OVERLAY */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs md:hidden transition-opacity duration-200"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* MOBILE MENU DRAWER / PANEL */}
      {mobileMenuOpen && (
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed top-0 right-0 bottom-0 w-full max-w-sm z-50 bg-white shadow-2xl flex flex-col md:hidden animate-in slide-in-from-right duration-250 ease-out overflow-y-auto"
        >
          {/* Drawer Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-4 bg-[#FFFDF7] border-b border-slate-200">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#F9B718] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A]">
                Navigation Menu
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-slate-500 hover:text-[#0B1F3A] hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F9B718] cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links List */}
          <div className="flex-1 px-4 py-5 flex flex-col gap-1.5 overflow-y-auto">
            <p className="px-3 text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1">
              Main Pages
            </p>

            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-left transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'bg-[#FFF3C7] text-[#0B1F3A] shadow-xs border border-[#F9B718]/40 font-bold'
                      : 'text-[#334155] hover:bg-slate-100 hover:text-[#0B1F3A] font-medium'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'bg-[#F9B718] text-[#0B1F3A]'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold leading-tight">
                        {item.label}
                      </span>
                      <span className="text-[11px] text-slate-500 leading-tight mt-0.5">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isActive ? 'text-[#0B1F3A] translate-x-0.5' : 'text-slate-400'
                    }`}
                  />
                </button>
              );
            })}

            {/* Quick Actions inside Drawer */}
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={handleQuoteClick}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#F9B718] hover:bg-[#e2a40e] text-[#0B1F3A] font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-all duration-150 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Request Instant Quote</span>
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#0B1F3A] hover:bg-[#132c4e] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-all duration-150 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#F9B718]" />
                <span>Contact Export Desk</span>
              </button>
            </div>
          </div>

          {/* Direct Contact Footer in Drawer */}
          <div className="p-4 bg-slate-50 border-t border-slate-200">
            <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-2">
              Direct Export Inquiry Support
            </p>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://wa.me/919313971360?text=Hello%20Rabbani%20Prime%20Exim,%20I%20have%20an%20export/import%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+919313971360"
                className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-white border border-slate-200 text-[#0B1F3A] text-xs font-semibold hover:bg-slate-100 transition-colors shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                <span>Call Desk</span>
              </a>
            </div>
            <div className="mt-2 text-center">
              <a
                href="mailto:info@rabbaniprimeexim.com"
                className="text-[11px] text-slate-500 hover:text-[#0B1F3A] transition-colors"
              >
                info@rabbaniprimeexim.com
              </a>
            </div>
          </div>
        </aside>
      )}
    </>
  );
};
