import React from 'react';
import { CheckCircle2, Shield, Layers, MessageSquare, Package, Users } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: 'Quality Sourcing',
      desc: 'Products selected with attention to quality, freshness, and strict consistency standards.',
      icon: CheckCircle2,
    },
    {
      title: 'Export Ready',
      desc: 'Products, statutory documentation, and container clearances prepared for international trade.',
      icon: Shield,
    },
    {
      title: 'Reliable Communication',
      desc: 'Clear, proactive, and transparent coordination from initial inquiry to final vessel discharge.',
      icon: MessageSquare,
    },
    {
      title: 'Flexible Product Sourcing',
      desc: 'Multiple verified product categories — agro, spices, tissue, and steel — consolidated under one partner.',
      icon: Layers,
    },
    {
      title: 'Careful Packaging',
      desc: 'Packaging designed according to specific commodity properties and destination ocean freight requirements.',
      icon: Package,
    },
    {
      title: 'Long-Term Partnerships',
      desc: 'Built around repeat commercial cycles, stable pricing principles, and sustainable buyer trust.',
      icon: Users,
    },
  ];

  return (
    <section className="py-20 bg-[#FFFDF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#F9B718] mb-2">
            The RPE Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
            Why Rabbani Prime Exim
          </h2>
          <p className="text-base text-[#5E6878] mt-3">
            Engineered from ground-up to remove friction from international sourcing through dependable Indian execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-7 rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0B1F3A]/5 flex items-center justify-center text-[#0B1F3A] mb-5 border border-slate-200/60">
                  <Icon className="w-5 h-5 text-[#0B1F3A]" />
                </div>
                <h3 className="text-base font-bold text-[#0B1F3A] uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5E6878] leading-relaxed mt-2.5">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
