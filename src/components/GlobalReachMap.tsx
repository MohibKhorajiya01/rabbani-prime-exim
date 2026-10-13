import React, { useState } from 'react';
import { Globe, Compass, Ship, Anchor, ArrowUpRight } from 'lucide-react';

export const GlobalReachMap: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const tradeCorridors = [
    {
      id: 'gulf',
      name: 'Gulf & Middle East Corridor',
      keyPorts: 'Jebel Ali, Dammam, Doha, Kuwait, Muscat',
      commodities: 'Fresh Green Chilli, Red Onion, Seasonal Mangoes, Spices',
      transitTime: '3 - 6 Days (Short Sea Shipping from Western Indian Ports)',
      x: 580,
      y: 240,
    },
    {
      id: 'southeast-asia',
      name: 'Southeast Asia Corridor',
      keyPorts: 'Singapore, Port Klang, Tanjung Pelepas, Bangkok',
      commodities: 'Red Onion, Cumin Seeds, Whole Dried Red Chilli, Kitchenware',
      transitTime: '7 - 12 Days Direct Sea Freight',
      x: 770,
      y: 310,
    },
    {
      id: 'europe',
      name: 'European & Mediterranean Corridor',
      keyPorts: 'Rotterdam, Antwerp, Hamburg, Piraeus, Valencia',
      commodities: 'High-Curcumin Turmeric, Sortex Cumin Seeds, SS Cookware, Vacuum Flasks',
      transitTime: '18 - 25 Days Ocean Container Liner',
      x: 480,
      y: 170,
    },
    {
      id: 'africa',
      name: 'East & Southern Africa Corridor',
      keyPorts: 'Mombasa, Dar es Salaam, Durban, Port Louis',
      commodities: 'Spices, Commercial Tissue Rolls, Stainless Steel Cookware',
      transitTime: '10 - 16 Days Maritime Connection',
      x: 540,
      y: 340,
    },
    {
      id: 'americas',
      name: 'North American Corridor',
      keyPorts: 'New York / New Jersey, Savannah, Los Angeles, Toronto',
      commodities: 'Vacuum Products, Commercial Kitchenware, Sortex Spices & Food Ingredients',
      transitTime: '24 - 32 Days Trans-Oceanic Container Routing',
      x: 230,
      y: 200,
    },
  ];

  const exportApproach = [
    {
      step: '01',
      title: 'Source',
      desc: 'Products are sourced directly from verified farm clusters, sortex mills, and certified manufacturing units.',
    },
    {
      step: '02',
      title: 'Verify',
      desc: 'Rigorous batch quality testing, moisture analysis, sorting checks, and document verification prior to dispatch.',
    },
    {
      step: '03',
      title: 'Prepare',
      desc: 'Packaging designed specifically to protect against sea moisture, transit vibration, and temperature swings.',
    },
    {
      step: '04',
      title: 'Ship',
      desc: 'Seamless coordination with leading ocean container carriers and customs clearance agents at Mundra and Kandla.',
    },
    {
      step: '05',
      title: 'Deliver',
      desc: 'Continuous container tracking, temperature log transfer, and professional consignee document handover.',
    },
  ];

  return (
    <div className="space-y-16">
      {/* World Map Section */}
      <div className="bg-[#0B1F3A] rounded-2xl p-6 sm:p-10 text-white relative overflow-hidden shadow-xl border border-slate-700">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F9B718] mb-2">
              <Compass className="w-4 h-4 text-[#F9B718]" />
              <span>International Trade Corridors</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              From India to Global Maritime Markets
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Strategically positioned in Gujarat with direct proximity to Kandla and Mundra ports — connecting Indian agricultural and industrial products to world seaports.
            </p>
          </div>
          <div className="text-xs font-mono text-[#F9B718] bg-white/10 px-3 py-1.5 rounded border border-white/10">
            Origin Port Hub: Mundra / Kandla, India
          </div>
        </div>

        {/* Interactive World Map SVG Visualization */}
        <div className="relative w-full aspect-[2/1] min-h-[300px] sm:min-h-[400px] bg-[#071426] rounded-xl overflow-hidden border border-white/10 flex items-center justify-center p-4">
          <svg
            viewBox="0 0 1000 500"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* World Grid Lines */}
            <line x1="0" y1="250" x2="1000" y2="250" stroke="#ffffff10" strokeDasharray="4 4" />
            <line x1="0" y1="125" x2="1000" y2="125" stroke="#ffffff08" strokeDasharray="4 4" />
            <line x1="0" y1="375" x2="1000" y2="375" stroke="#ffffff08" strokeDasharray="4 4" />
            <line x1="500" y1="0" x2="500" y2="500" stroke="#ffffff10" strokeDasharray="4 4" />

            {/* Stylized Simplified Continents Outline */}
            {/* North America */}
            <path
              d="M 120 120 Q 180 80 250 110 Q 280 150 250 220 Q 200 240 180 220 Q 150 180 120 120 Z"
              fill="#ffffff0a"
              stroke="#ffffff15"
            />
            {/* South America */}
            <path
              d="M 280 270 Q 340 280 320 380 Q 280 440 250 380 Q 240 320 280 270 Z"
              fill="#ffffff0a"
              stroke="#ffffff15"
            />
            {/* Europe */}
            <path
              d="M 450 110 Q 520 100 540 150 Q 510 190 460 180 Q 430 150 450 110 Z"
              fill="#ffffff0a"
              stroke="#ffffff15"
            />
            {/* Africa */}
            <path
              d="M 470 200 Q 550 210 560 300 Q 520 400 480 380 Q 440 300 470 200 Z"
              fill="#ffffff0a"
              stroke="#ffffff15"
            />
            {/* Asia Mainland */}
            <path
              d="M 580 110 Q 750 90 850 160 Q 820 260 700 250 Q 640 220 580 110 Z"
              fill="#ffffff0a"
              stroke="#ffffff15"
            />
            {/* Australia */}
            <path
              d="M 780 340 Q 860 330 870 390 Q 820 430 760 400 Q 750 360 780 340 Z"
              fill="#ffffff0a"
              stroke="#ffffff15"
            />

            {/* INDIA ORIGIN HUB (Gujarat / Western Coast) */}
            {/* Coordinates: approx (660, 240) */}
            <g>
              {/* Radiating pulse waves */}
              <circle cx="660" cy="240" r="18" fill="#F9B71815" className="animate-ping" />
              <circle cx="660" cy="240" r="10" fill="#F9B71830" />
              <circle cx="660" cy="240" r="6" fill="#F9B718" />
              <text x="660" y="270" fill="#F9B718" fontSize="12" fontWeight="bold" textAnchor="middle">
                INDIA (ORIGIN)
              </text>
            </g>

            {/* Trade Route Connecting Arcs from India to Global Corridors */}
            {/* To Gulf */}
            <path
              d="M 660 240 Q 620 230 580 240"
              stroke="#F9B718"
              strokeWidth="2.5"
              strokeDasharray="5 3"
              opacity="0.85"
            />
            {/* To Southeast Asia */}
            <path
              d="M 660 240 Q 715 285 770 310"
              stroke="#F9B718"
              strokeWidth="2.5"
              strokeDasharray="5 3"
              opacity="0.85"
            />
            {/* To Europe */}
            <path
              d="M 660 240 Q 560 170 480 170"
              stroke="#F9B718"
              strokeWidth="2.5"
              strokeDasharray="5 3"
              opacity="0.85"
            />
            {/* To East Africa */}
            <path
              d="M 660 240 Q 600 300 540 340"
              stroke="#F9B718"
              strokeWidth="2.5"
              strokeDasharray="5 3"
              opacity="0.85"
            />
            {/* To Americas */}
            <path
              d="M 660 240 Q 420 120 230 200"
              stroke="#F9B718"
              strokeWidth="2"
              strokeDasharray="5 3"
              opacity="0.6"
            />

            {/* Destination Nodes */}
            {tradeCorridors.map((c) => (
              <g
                key={c.id}
                className="cursor-pointer"
                onClick={() => setSelectedRegion(c.id)}
              >
                <circle
                  cx={c.x}
                  cy={c.y}
                  r={selectedRegion === c.id ? 9 : 6}
                  fill={selectedRegion === c.id ? '#FFF3C7' : '#FFFFFF'}
                  stroke="#F9B718"
                  strokeWidth="2"
                />
                <text
                  x={c.x}
                  y={c.y - 12}
                  fill={selectedRegion === c.id ? '#FFF3C7' : '#E2E8F0'}
                  fontSize="11"
                  fontWeight="600"
                  textAnchor="middle"
                >
                  {c.name.split(' ')[0]}
                </text>
              </g>
            ))}
          </svg>

          {/* Floating Instructions Hint */}
          <div className="absolute bottom-3 left-4 text-[11px] text-slate-400 flex items-center gap-1.5 bg-[#0B1F3A]/80 px-2.5 py-1 rounded">
            <Ship className="w-3.5 h-3.5 text-[#F9B718]" />
            <span>Click any trade node on the map to inspect corridor details</span>
          </div>
        </div>

        {/* Selected or Default Corridor Details Banner */}
        <div className="mt-6 p-5 rounded-xl bg-white/5 border border-white/10">
          {(() => {
            const active =
              tradeCorridors.find((c) => c.id === selectedRegion) ||
              tradeCorridors[0];
            return (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#F9B718] tracking-wider">
                    Selected Trade Corridor
                  </div>
                  <div className="text-base font-bold text-white mt-0.5">
                    {active.name}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Key Maritime Discharge Ports
                  </div>
                  <div className="text-xs text-slate-200 mt-0.5 font-medium">
                    {active.keyPorts}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Primary Export Commodities
                  </div>
                  <div className="text-xs text-slate-200 mt-0.5">
                    {active.commodities}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Estimated Transit Window
                  </div>
                  <div className="text-xs text-[#FFF3C7] font-semibold mt-0.5">
                    {active.transitTime}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>

      {/* Section: OUR EXPORT APPROACH (Section 18 of prompt) */}
      <div className="py-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-[#F9B718] mb-2">
            Systematic Methodology
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
            Our Export Approach
          </h3>
          <p className="text-sm text-[#5E6878] mt-2">
            Every international shipment follows a five-point disciplined cycle from origin cluster to foreign vessel discharge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {exportApproach.map((item) => (
            <div
              key={item.step}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-sm font-extrabold text-[#F9B718]">
                  {item.step}
                </span>
                <h4 className="text-base font-bold text-[#0B1F3A] uppercase tracking-wide mt-2">
                  {item.title}
                </h4>
                <p className="text-xs text-[#5E6878] leading-relaxed mt-2">
                  {item.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-[11px] font-semibold text-[#0B1F3A]">
                <span>Standardized Protocol</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
