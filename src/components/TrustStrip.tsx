import React from 'react';
import { Award, Repeat, Network, Handshake } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: Award,
      title: 'Quality Products',
      description: 'Carefully sourced products from reliable suppliers and compliant farms.',
    },
    {
      icon: Repeat,
      title: 'Reliable Supply',
      description: 'Consistent sourcing, transparent communication, and professional shipment coordination.',
    },
    {
      icon: Network,
      title: 'Global Network',
      description: 'Focused on connecting Indian products with international markets and buyers.',
    },
    {
      icon: Handshake,
      title: 'Long-Term Partnerships',
      description: 'Built around transparency, operational reliability, and mutual commercial growth.',
    },
  ];

  return (
    <section className="bg-white border-y border-slate-200/80 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y md:divide-y-0 lg:divide-x divide-slate-100">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex items-start gap-4 ${
                  index !== 0 ? 'pt-6 md:pt-0 lg:pl-6' : ''
                }`}
              >
                <div className="w-11 h-11 rounded-lg bg-[#0B1F3A]/5 flex items-center justify-center text-[#0B1F3A] shrink-0 border border-slate-200/60">
                  <Icon className="w-5 h-5 text-[#0B1F3A]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#0B1F3A]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5E6878] leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
