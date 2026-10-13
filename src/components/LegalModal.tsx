import React from 'react';
import { X, Shield } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company.ts';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 p-6 sm:p-8 my-8 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-[#0B1F3A] hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#F9B718] mb-2">
          <Shield className="w-4 h-4 text-[#F9B718]" />
          <span>Institutional Policies</span>
        </div>

        {type === 'privacy' ? (
          <div className="space-y-4 text-xs text-[#5E6878] leading-relaxed">
            <h3 className="text-2xl font-bold text-[#0B1F3A]">
              Privacy &amp; Data Policy
            </h3>
            <p>
              This Privacy Policy explains how <strong>{COMPANY_CONFIG.name}</strong> collects, utilizes, and safeguards business information submitted through our official import-export communication channels.
            </p>
            <h4 className="text-sm font-bold text-[#0B1F3A] pt-2">
              1. Commercial Data Collection
            </h4>
            <p>
              We collect corporate contact details, port requirements, product specifications, and company identifiers submitted voluntarily through our export quotation forms, emails, and direct correspondence.
            </p>
            <h4 className="text-sm font-bold text-[#0B1F3A] pt-2">
              2. Purpose of Processing
            </h4>
            <p>
              Information is processed strictly to furnish FOB/CIF commercial quotations, verify customs compliance, coordinate shipment scheduling, and execute international trade contracts.
            </p>
            <h4 className="text-sm font-bold text-[#0B1F3A] pt-2">
              3. Confidentiality &amp; Third Parties
            </h4>
            <p>
              We do not sell, rent, or lease commercial data to third-party marketing entities. Information is shared only with verified statutory logistics partners (ocean carriers, customs agents, phytosanitary inspection agencies) strictly required to fulfill consignment orders.
            </p>
            <h4 className="text-sm font-bold text-[#0B1F3A] pt-2">
              4. Contact for Inquiries
            </h4>
            <p>
              For data protection questions, please write to{' '}
              <a href={`mailto:${COMPANY_CONFIG.contact.email}`} className="text-[#0B1F3A] font-semibold underline">
                {COMPANY_CONFIG.contact.email}
              </a>.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-xs text-[#5E6878] leading-relaxed">
            <h3 className="text-2xl font-bold text-[#0B1F3A]">
              Export Trading Terms &amp; Conditions
            </h3>
            <p>
              Standard operational conditions governing commercial quotations and trade inquiries issued by{' '}
              <strong>{COMPANY_CONFIG.name}</strong>.
            </p>
            <h4 className="text-sm font-bold text-[#0B1F3A] pt-2">
              1. Quotations &amp; Incoterms
            </h4>
            <p>
              All commercial offers are issued subject to Incoterms® 2020 (principally FOB Mundra/Kandla, CIF, or CFR destination port). Rates fluctuate according to seasonal agricultural yields, ocean freight bunker surcharges, and currency exchange rates until proforma confirmation.
            </p>
            <h4 className="text-sm font-bold text-[#0B1F3A] pt-2">
              2. Quality Specifications &amp; Inspection
            </h4>
            <p>
              Commodity parameters (moisture thresholds, sizing, sortex purity, count per box) are verified at the packing station prior to container sealing. Third-party inspection (e.g. SGS / Bureau Veritas) may be arranged upon buyer request and mutual agreement.
            </p>
            <h4 className="text-sm font-bold text-[#0B1F3A] pt-2">
              3. Regulatory Compliance
            </h4>
            <p>
              Shipments comply with applicable Indian statutory export regulations under APEDA, Spices Board, FSSAI, and the Directorate General of Foreign Trade (DGFT).
            </p>
            <h4 className="text-sm font-bold text-[#0B1F3A] pt-2">
              4. Jurisdiction
            </h4>
            <p>
              Commercial contracts entered into with {COMPANY_CONFIG.name} shall be governed by the laws of India under the jurisdiction of competent courts in Gujarat.
            </p>
          </div>
        )}

        <div className="pt-6 mt-6 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#0B1F3A] text-white text-xs font-bold uppercase tracking-wider rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
