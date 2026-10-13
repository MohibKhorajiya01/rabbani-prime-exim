import React from 'react';
import { FileText, CheckSquare, Calculator, PackageCheck, FileCheck, Ship, CheckCircle } from 'lucide-react';

export const ExportProcessTimeline: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Inquiry',
      icon: FileText,
      desc: 'Buyer submits initial specifications, target destination, and required export volume.',
    },
    {
      num: '02',
      title: 'Product Requirements',
      desc: 'Technical confirmation of variety, grade, moisture limits, and phytosanitary parameters.',
      icon: CheckSquare,
    },
    {
      num: '03',
      title: 'Quotation',
      desc: 'Transparent FOB, CIF, or CNF pricing tailored to international shipping terms.',
      icon: Calculator,
    },
    {
      num: '04',
      title: 'Packaging Confirmation',
      desc: 'Master carton design, palletization specs, and custom labeling approvals.',
      icon: PackageCheck,
    },
    {
      num: '05',
      title: 'Documentation',
      desc: 'Issuance of Phytosanitary, Certificate of Origin, Test Reports, and Customs Shipping Bills.',
      icon: FileCheck,
    },
    {
      num: '06',
      title: 'Shipment',
      desc: 'Stuffing in inspected reefer/dry containers and dispatch from western Indian seaports.',
      icon: Ship,
    },
    {
      num: '07',
      title: 'Delivery',
      desc: 'Tracking oversight and seamless handover of shipping documents to the consignee.',
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-20 bg-[#FFFDF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#F9B718] mb-2">
            Structured Execution
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
            The International Export Process
          </h2>
          <p className="text-base text-[#5E6878] mt-3">
            A rigorous seven-stage protocol engineered to safeguard product condition, compliance, and on-time port dispatch.
          </p>
        </div>

        {/* Process Flow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.slice(0, 4).map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative bg-white rounded-xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-full bg-[#F9B718] text-[#0B1F3A] font-extrabold text-sm flex items-center justify-center font-mono shadow-xs">
                    {step.num}
                  </span>
                  <Icon className="w-5 h-5 text-[#0B1F3A]/40" />
                </div>
                <h3 className="text-base font-bold text-[#0B1F3A] uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-xs text-[#5E6878] leading-relaxed mt-2">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stages 05 - 07 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {steps.slice(4).map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative bg-white rounded-xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-full bg-[#F9B718] text-[#0B1F3A] font-extrabold text-sm flex items-center justify-center font-mono shadow-xs">
                    {step.num}
                  </span>
                  <Icon className="w-5 h-5 text-[#0B1F3A]/40" />
                </div>
                <h3 className="text-base font-bold text-[#0B1F3A] uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-xs text-[#5E6878] leading-relaxed mt-2">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
