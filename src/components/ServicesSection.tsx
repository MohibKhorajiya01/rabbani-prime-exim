import React from 'react';
import { Search, ShieldCheck, FileCheck, Package, Ship, Headphones, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenQuote: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuote }) => {
  const services = [
    {
      id: 'sourcing',
      title: 'Product Sourcing',
      icon: Search,
      short: 'Find and coordinate suitable products according to buyer requirements.',
      deliverables: [
        'Direct connection with verified farm clusters and manufacturers',
        'Transparent quality grading and sample dispatch',
        'Seasonal availability forecasting and price stability',
      ],
    },
    {
      id: 'quality',
      title: 'Quality Coordination',
      icon: ShieldCheck,
      short: 'Focus on consistency, moisture thresholds, and exact product specifications.',
      deliverables: [
        'Pre-shipment batch inspection and sorting supervision',
        'Laboratory test analysis (curcumin, pesticide residues, microbial checks)',
        'Container loading photo and video verification',
      ],
    },
    {
      id: 'documentation',
      title: 'Export Documentation',
      icon: FileCheck,
      short: 'Professional coordination of required export documentation for customs.',
      deliverables: [
        'Phytosanitary & Fumigation Certificates',
        'Certificate of Origin (Chamber of Commerce / Preferential)',
        'Commercial Invoice, Packing List & Clean On-Board Bill of Lading',
      ],
    },
    {
      id: 'packaging',
      title: 'Packaging Coordination',
      icon: Package,
      short: 'Packaging options based on product and international shipment requirements.',
      deliverables: [
        'Corrugated export cartons (CFB) with ventilated perforations',
        'Bespoke buyer branding, barcode printing, and private labeling',
        'Palletization, shrink wrapping, and container strapping',
      ],
    },
    {
      id: 'logistics',
      title: 'Logistics Coordination',
      icon: Ship,
      short: 'Shipment coordination with premier shipping lines and port authorities.',
      deliverables: [
        'Direct freight booking via Mundra, Kandla, and Nhava Sheva ports',
        'Reefer container set-point management (0°C to 12°C)',
        'Customs house agent (CHA) clearance and tracking oversight',
      ],
    },
    {
      id: 'b2b-support',
      title: 'B2B Export Support',
      icon: Headphones,
      short: 'Professional communication and dedicated coordination for international buyers.',
      deliverables: [
        'Dedicated export manager on WhatsApp and email',
        'Structured milestone updates from harvest to bill of lading issuance',
        'Clear payment term execution (Letter of Credit, T/T)',
      ],
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#F9B718] mb-2">
            Comprehensive Trade Management
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
            End-to-End Export Services
          </h2>
          <p className="text-base text-[#5E6878] mt-3">
            We handle the complexities of procurement, quality control, regulatory documentation, and freight logistics so international buyers receive compliant consignments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="bg-[#FFFDF7] rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] flex items-center justify-center text-[#F9B718] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1F3A] uppercase tracking-wide">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-[#5E6878] leading-relaxed mt-2 font-medium">
                    {svc.short}
                  </p>

                  <div className="mt-6 space-y-2 border-t border-slate-200/70 pt-4">
                    {svc.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#182235]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F9B718] mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60">
                  <button
                    onClick={onOpenQuote}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1F3A] hover:text-[#B88100] transition-colors cursor-pointer"
                  >
                    <span>Request Coordination</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
