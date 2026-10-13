import React, { useState } from 'react';
import { X, Send, CheckCircle, ShieldCheck } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company.ts';
import { PRODUCTS } from '../data/products.ts';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedProduct = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    product: preselectedProduct,
    quantity: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (preselectedProduct) {
      setFormData((prev) => ({ ...prev, product: preselectedProduct }));
    }
  }, [preselectedProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(
      `RFQ: ${formData.product || 'General Export'} - ${formData.company || formData.name}`
    );
    const body = encodeURIComponent(
      `Hello Rabbani Prime Exim,\n\n` +
      `Request for Quotation Details:\n` +
      `Name: ${formData.name}\n` +
      `Company: ${formData.company || 'N/A'}\n` +
      `Email: ${formData.email}\n` +
      `Phone/WhatsApp: ${formData.phone || 'N/A'}\n` +
      `Destination: ${formData.country || 'N/A'}\n` +
      `Product: ${formData.product || 'N/A'}\n` +
      `Volume/Requirement: ${formData.quantity || 'N/A'}\n` +
      `Message: ${formData.message}\n`
    );

    window.location.href = `mailto:${COMPANY_CONFIG.contact.exportInquiryEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 p-6 sm:p-8 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-[#0B1F3A] hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="text-xs font-bold uppercase tracking-widest text-[#F9B718] mb-1">
            B2B Commercial Desk
          </div>
          <h3 className="text-2xl font-extrabold text-[#0B1F3A] tracking-tight">
            Request an Export Quotation
          </h3>
          <p className="text-xs text-[#5E6878] mt-1">
            Receive official FOB/CIF freight rates, packaging options &amp; specification sheets.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-center animate-in fade-in">
            <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
            <h4 className="text-base font-bold text-emerald-900">
              Quotation Request Initialized
            </h4>
            <p className="text-xs text-emerald-700 mt-2">
              Your default email client has received this pre-formatted export dispatch for{' '}
              <span className="font-semibold">{COMPANY_CONFIG.contact.exportInquiryEmail}</span>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-5 px-5 py-2.5 bg-[#0B1F3A] text-white text-xs font-bold uppercase tracking-wider rounded-lg"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Full name"
                  className="w-full px-3.5 py-2.5 bg-[#FFFDF7] border border-slate-200 rounded-lg text-sm text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#F9B718]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Trading / Import firm"
                  className="w-full px-3.5 py-2.5 bg-[#FFFDF7] border border-slate-200 rounded-lg text-sm text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#F9B718]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-1">
                  Corporate Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@domain.com"
                  className="w-full px-3.5 py-2.5 bg-[#FFFDF7] border border-slate-200 rounded-lg text-sm text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#F9B718]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-1">
                  Destination Country
                </label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="Destination port / country"
                  className="w-full px-3.5 py-2.5 bg-[#FFFDF7] border border-slate-200 rounded-lg text-sm text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#F9B718]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-1">
                  Product *
                </label>
                <select
                  required
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FFFDF7] border border-slate-200 rounded-lg text-sm text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#F9B718]"
                >
                  <option value="">Select product...</option>
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                  <option value="Consolidated Mixed Cargo">Consolidated Mixed Cargo</option>
                  <option value="Other Sourcing Request">Other Sourcing Request</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-1">
                  Quantity / Target Volume
                </label>
                <input
                  type="text"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  placeholder="e.g. 1 FCL (20ft / 40ft)"
                  className="w-full px-3.5 py-2.5 bg-[#FFFDF7] border border-slate-200 rounded-lg text-sm text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#F9B718]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-1">
                Specification Notes
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Mention Incoterms (FOB/CIF), discharge port, packaging requirements..."
                className="w-full px-3.5 py-2.5 bg-[#FFFDF7] border border-slate-200 rounded-lg text-sm text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#F9B718] resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[11px] text-[#5E6878]">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Encrypted &amp; confidential RFQ</span>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F9B718] hover:bg-[#e2a40e] text-[#0B1F3A] font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all"
              >
                <span>Request Quote</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
