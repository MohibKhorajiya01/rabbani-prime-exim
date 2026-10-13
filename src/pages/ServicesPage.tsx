import React from 'react';
import { ServicesSection } from '../components/ServicesSection.tsx';
import { ExportProcessTimeline } from '../components/ExportProcessTimeline.tsx';
import { ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';

interface ServicesPageProps {
  onOpenQuote: () => void;
  onExploreProducts: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenQuote,
  onExploreProducts,
}) => {
  return (
    <div className="pt-24 pb-20 bg-[#FFFDF7]">
      {/* Services Hero */}
      <section className="py-16 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#F9B718] mb-2">
              B2B Export Execution
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight mb-4">
              Comprehensive Export Services
            </h1>
            <p className="text-base text-[#5E6878] leading-relaxed">
              From harvest-level sorting and sortex processing to customs clearance and ocean logistics, RPE provides turnkey international export management.
            </p>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <ServicesSection onOpenQuote={onOpenQuote} />

      {/* Quality Control Standards */}
      <section className="py-16 bg-[#FFFDF7] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 shadow-sm">
            <div className="max-w-3xl mb-10">
              <div className="text-xs font-bold uppercase tracking-widest text-[#F9B718] mb-1">
                Quality Assurance Protocols
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
                Our Pre-Shipment Inspection Guarantee
              </h2>
              <p className="text-sm text-[#5E6878] mt-2">
                We safeguard every consignment through standardized inspection checklists before any container doors are locked and customs seals are clamped.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-[#FFFDF7] border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-[#0B1F3A] text-[#F9B718] flex items-center justify-center font-bold text-xs mb-3">
                  01
                </div>
                <h4 className="text-sm font-bold text-[#0B1F3A] uppercase tracking-wide">
                  Agronomic &amp; Physical Grading
                </h4>
                <p className="text-xs text-[#5E6878] mt-2 leading-relaxed">
                  Screening for size uniformities, mechanical bruises, color consistency, and seed purity levels across all fresh produce and spice lots.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FFFDF7] border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-[#0B1F3A] text-[#F9B718] flex items-center justify-center font-bold text-xs mb-3">
                  02
                </div>
                <h4 className="text-sm font-bold text-[#0B1F3A] uppercase tracking-wide">
                  Moisture &amp; Laboratory Testing
                </h4>
                <p className="text-xs text-[#5E6878] mt-2 leading-relaxed">
                  Digital moisture meter testing ensuring chillies, turmeric, and cumin fall safely within maritime shelf-life thresholds to eliminate mold risk.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FFFDF7] border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-[#0B1F3A] text-[#F9B718] flex items-center justify-center font-bold text-xs mb-3">
                  03
                </div>
                <h4 className="text-sm font-bold text-[#0B1F3A] uppercase tracking-wide">
                  Container Stuffing Supervision
                </h4>
                <p className="text-xs text-[#5E6878] mt-2 leading-relaxed">
                  Physical supervision during warehouse loading with photo/video proof sent directly to buyers showing container cleanliness, desiccants, and seal verification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Process Timeline */}
      <ExportProcessTimeline />

      {/* Bottom CTA */}
      <section className="py-16 bg-[#0B1F3A] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
            Ready to Streamline Your International Procurement?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-6">
            Contact our export coordinators to receive product specifications, lab certificates, and custom packaging estimates.
          </p>
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F9B718] hover:bg-[#e2a40e] text-[#0B1F3A] font-bold text-xs uppercase tracking-wider rounded-lg"
          >
            <span>Request Export Coordination</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
