import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company.ts';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Link pre-configured with international trade prompt
  const whatsappUrl = `https://wa.me/${COMPANY_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
    'Hello Rabbani Prime Exim, I would like to inquire about your export commodities.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Floating Tooltip Pill */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#0B1F3A] text-white text-xs font-semibold py-2 px-3.5 rounded-xl shadow-lg border border-slate-700 animate-in fade-in slide-in-from-right-4 duration-200">
          <span>Chat directly with Export Desk</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </a>
    </div>
  );
};
