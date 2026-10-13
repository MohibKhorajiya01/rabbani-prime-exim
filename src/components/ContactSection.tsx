import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, MapPin, Send, CheckCircle, Copy, Check } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company.ts';
import { PRODUCTS } from '../data/products.ts';
import { GujaratTradeHubMap } from './GujaratTradeHubMap.tsx';

interface ContactSectionProps {
  initialProduct?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialProduct = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    product: initialProduct || '',
    quantity: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Sync if initialProduct updates from outside
  React.useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({ ...prev, product: initialProduct }));
    }
  }, [initialProduct]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Build mailto URI as immediate fallback so user mail client opens with pre-composed RFQ
    const subject = encodeURIComponent(
      `Export Inquiry: ${formData.product || 'General Inquiry'} - ${formData.companyName || formData.fullName}`
    );
    const body = encodeURIComponent(
      `Hello Rabbani Prime Exim Team,\n\n` +
      `Here is my export requirement:\n\n` +
      `Full Name: ${formData.fullName}\n` +
      `Company Name: ${formData.companyName || 'N/A'}\n` +
      `Email: ${formData.email}\n` +
      `Phone/WhatsApp: ${formData.phone || 'N/A'}\n` +
      `Destination Country: ${formData.country || 'N/A'}\n` +
      `Product Interested In: ${formData.product || 'N/A'}\n` +
      `Target Quantity / Spec: ${formData.quantity || 'N/A'}\n\n` +
      `Message:\n${formData.message}\n`
    );

    window.location.href = `mailto:${COMPANY_CONFIG.contact.exportInquiryEmail}?subject=${subject}&body=${body}`;
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(COMPANY_CONFIG.contact.exportInquiryEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 bg-[#FFFDF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#F9B718] mb-2">
            Direct Trade Communications
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
            LET&apos;S BUILD A GLOBAL TRADE PARTNERSHIP.
          </h2>
          <p className="text-base text-[#5E6878] mt-3">
            Tell us what you are looking for and our team will get back to you with FOB/CIF pricing, packaging schedules, and product certificates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Boxes (Rule #26, #27, #28) */}
          <div className="lg:col-span-5 space-y-6">
            {/* 1. Email Box with clickable mailto & copy action (Rule #26) */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs hover:border-[#0B1F3A]/30 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] flex items-center justify-center text-[#F9B718]">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="inline-flex items-center gap-1.5 text-xs text-[#5E6878] hover:text-[#0B1F3A] py-1 px-2.5 rounded bg-slate-50 border border-slate-200 transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <h3 className="text-lg font-bold text-[#0B1F3A] uppercase tracking-wide">
                Email Us
              </h3>
              <p className="text-xs text-[#5E6878] leading-relaxed mt-1">
                For export inquiries, product details and quotations.
              </p>

              <div className="mt-4 font-mono text-sm font-semibold text-[#0B1F3A] bg-[#FFF3C7]/60 p-3 rounded-lg border border-[#F9B718]/30">
                {COMPANY_CONFIG.contact.exportInquiryEmail}
              </div>

              <a
                href={`mailto:${COMPANY_CONFIG.contact.exportInquiryEmail}`}
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#0B1F3A] hover:text-[#B88100] uppercase tracking-wider transition-colors"
              >
                <span>Contact Via Email</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            {/* 2. WhatsApp Direct Chat Box */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs hover:border-[#0B1F3A]/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] flex items-center justify-center text-[#F9B718] mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F3A] uppercase tracking-wide">
                Chat on WhatsApp
              </h3>
              <p className="text-xs text-[#5E6878] leading-relaxed mt-1">
                Direct mobile messaging for active buyer negotiations and instant cargo status inquiries.
              </p>
              <div className="mt-4 font-mono text-sm font-semibold text-[#0B1F3A]">
                {COMPANY_CONFIG.contact.whatsappDisplay}
              </div>

              <a
                href={COMPANY_CONFIG.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 bg-[#0B1F3A] hover:bg-[#163660] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                <span>Start WhatsApp Chat</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            {/* 3. Business Location Card */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] flex items-center justify-center text-[#F9B718] mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F3A] uppercase tracking-wide">
                Export Sourcing Hub
              </h3>
              <p className="text-xs text-[#5E6878] leading-relaxed mt-1">
                {COMPANY_CONFIG.contact.address}
              </p>
              <div className="mt-3 text-xs text-[#5E6878]">
                <span>Operating Schedule: </span>
                <span className="font-semibold text-[#0B1F3A]">{COMPANY_CONFIG.contact.businessHours}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Complete Inquiry / RFQ Form (Rule #25) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0B1F3A] tracking-tight">
                  Request an Export Quotation
                </h3>
                <p className="text-xs text-[#5E6878] mt-1">
                  Complete the specifications below. Our export desk will review requirements and reply promptly.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-emerald-50 rounded-xl border border-emerald-200 text-center animate-in fade-in duration-300">
                  <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-emerald-900">
                    Inquiry Generated Successfully
                  </h4>
                  <p className="text-xs text-emerald-700 mt-2 max-w-md mx-auto leading-relaxed">
                    Your default mail application has been triggered to dispatch the RFQ directly to{' '}
                    <span className="font-semibold">{COMPANY_CONFIG.contact.exportInquiryEmail}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Johnathan Smith"
                        className="w-full px-4 py-3 bg-[#FFFDF7] border border-slate-200 rounded-lg text-sm text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#F9B718] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Al-Mansoor Trading LLC"
                        className="w-full px-4 py-3 bg-[#FFFDF7] border border-slate-200 rounded-lg text-sm text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#F9B718] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="procurement@company.com"
                        className="w-full px-4 py-3 bg-[#FFFDF7] border border-slate-200 rounded-lg text-sm text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#F9B718] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+971 50 123 4567"
                        className="w-full px-4 py-3 bg-[#FFFDF7] border border-slate-200 rounded-lg text-sm text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#F9B718] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-1.5">
                        Destination Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="e.g. United Arab Emirates / UK"
                        className="w-full px-4 py-3 bg-[#FFFDF7] border border-slate-200 rounded-lg text-sm text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#F9B718] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-1.5">
                        Product Interested In *
                      </label>
                      <select
                        name="product"
                        required
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#FFFDF7] border border-slate-200 rounded-lg text-sm text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#F9B718] focus:border-transparent transition-all"
                      >
                        <option value="">Select an export commodity...</option>
                        {PRODUCTS.map((prod) => (
                          <option key={prod.id} value={prod.name}>
                            {prod.name} ({prod.categoryLabel})
                          </option>
                        ))}
                        <option value="Multiple Products / Mixed Container">
                          Multiple Products / Mixed Container
                        </option>
                        <option value="Custom Sourcing Requirement">
                          Custom Sourcing Requirement
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-1.5">
                      Target Quantity / Requirement
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 1x 40ft Reefer Container (approx. 24 MT) / 500 Master Cartons"
                      className="w-full px-4 py-3 bg-[#FFFDF7] border border-slate-200 rounded-lg text-sm text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#F9B718] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-1.5">
                      Message / Port of Discharge *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify your preferred Incoterms (FOB/CIF), discharge seaport, grading preferences, packaging dimensions, and timeline..."
                      className="w-full px-4 py-3 bg-[#FFFDF7] border border-slate-200 rounded-lg text-sm text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#F9B718] focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#F9B718] hover:bg-[#e2a40e] text-[#0B1F3A] font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                    >
                      <span>Send Inquiry</span>
                      <Send className="w-4 h-4 text-[#0B1F3A]" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Gujarat Maritime Port & Agro Hub Map (Section 50 & 51 Compliance) */}
            <GujaratTradeHubMap />
          </div>
        </div>
      </div>
    </section>
  );
};
