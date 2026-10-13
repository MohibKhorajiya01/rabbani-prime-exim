import React, { useState } from 'react';
import { Anchor, MapPin, Truck, ShieldCheck } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company.ts';

export const GujaratTradeHubMap: React.FC = () => {
  const [activePort, setActivePort] = useState<string>('mundra');

  const hubs = [
    {
      id: 'mundra',
      name: 'Mundra Port Hub',
      type: 'Major Deep-Water Container Terminal',
      description: 'India’s largest automated commercial port handling refrigerated container vessels and direct sailings to Gulf, Europe, and Asia.',
      transit: 'Direct deep-draft berths with continuous reefer monitoring points',
    },
    {
      id: 'kandla',
      name: 'Deendayal / Kandla Port Hub',
      type: 'Premier Bulk & Agro Commodity Port',
      description: 'Historic major port on the Gulf of Kutch specializing in bulk agro export cargo, spices, dry containers, and proximity to Saurashtra crop belts.',
      transit: 'Customs bonded warehousing and phytosanitary inspection stations',
    },
    {
      id: 'saurashtra-north',
      name: 'Agro Procurement Belts',
      type: 'Farming Clusters (Saurashtra & North Gujarat)',
      description: 'Direct origin clusters for high-grade green chillies, red onions, cumin seeds (Unjha market), and dried turmeric.',
      transit: 'Direct farm-gate pre-cooling and sortex processing infrastructure',
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#F9B718] mb-1">
            Export Logistics Corridor
          </div>
          <h3 className="text-xl font-bold text-[#0B1F3A]">
            Gujarat Maritime Sourcing &amp; Port Hub
          </h3>
          <p className="text-xs text-[#5E6878] mt-0.5">
            {COMPANY_CONFIG.contact.address}
          </p>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFF3C7] text-[#0B1F3A] rounded-lg text-xs font-bold">
          <Anchor className="w-3.5 h-3.5 text-[#B88100]" />
          <span>Gateway to Arabian Sea &amp; World Oceans</span>
        </div>
      </div>

      {/* Stylized Visual Hub Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {hubs.map((hub) => (
          <div
            key={hub.id}
            onClick={() => setActivePort(hub.id)}
            className={`p-4 rounded-xl border transition-all cursor-pointer ${
              activePort === hub.id
                ? 'bg-[#0B1F3A] text-white border-[#0B1F3A] shadow-sm'
                : 'bg-[#FFFDF7] text-[#182235] border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className={`text-[10px] uppercase font-bold tracking-wider ${
                activePort === hub.id ? 'text-[#F9B718]' : 'text-[#B88100]'
              }`}>
                {hub.type}
              </span>
              <MapPin className={`w-4 h-4 ${
                activePort === hub.id ? 'text-[#F9B718]' : 'text-slate-400'
              }`} />
            </div>
            <h4 className="text-sm font-bold">{hub.name}</h4>
            <p className={`text-xs mt-1.5 leading-relaxed line-clamp-2 ${
              activePort === hub.id ? 'text-slate-300' : 'text-[#5E6878]'
            }`}>
              {hub.description}
            </p>
          </div>
        ))}
      </div>

      {/* Selected Node Details Bar */}
      <div className="p-4 bg-[#FFFDF7] rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-[#0B1F3A]">
          <Truck className="w-4 h-4 text-[#F9B718] shrink-0" />
          <span>
            <strong>Operational Readiness:</strong>{' '}
            {hubs.find((h) => h.id === activePort)?.transit}
          </span>
        </div>
        <span className="text-[11px] font-mono text-[#5E6878]">
          FOB Mundra / FOB Kandla Available
        </span>
      </div>
    </div>
  );
};
