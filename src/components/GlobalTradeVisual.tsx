import React from 'react';
import { ArrowRight, Anchor, Globe2, Truck, Box } from 'lucide-react';

interface GlobalTradeVisualProps {
  onExploreProducts: () => void;
}

export const GlobalTradeVisual: React.FC<GlobalTradeVisualProps> = ({
  onExploreProducts,
}) => {
  return (
    <section className="relative py-24 bg-[#071426] text-white overflow-hidden">
      {/* Background Seaport Trade Imagery with Deep Navy Scrim */}
      <div className="absolute inset-0">
        <img
          src="/images/hero_export_logistics.jpeg"
          alt="Ocean vessel container port and agro cargo"
          className="w-full h-full object-cover opacity-25 scale-105 filter blur-xs"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071426] via-[#0B1F3A]/90 to-[#071426]/95" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F9B718] mb-4">
            <Anchor className="w-4 h-4 text-[#F9B718]" />
            <span>Export in Motion</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] mb-6">
            FROM LOCAL SOURCING<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF3C7] via-[#F9B718] to-white">
              TO GLOBAL MARKETS.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
            Professional coordination at every stage of the export journey — from sorting farms in Gujarat to ocean container vessels clearing customs worldwide.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 pt-4 border-t border-white/10">
            <div className="flex items-start gap-3">
              <Box className="w-5 h-5 text-[#F9B718] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  Origin Sorting
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Field-level grading, sorting &amp; custom CFB carton packing
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Truck className="w-5 h-5 text-[#F9B718] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  Reefer Transit
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Temperature-logged cold-chain transit to western ports
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Globe2 className="w-5 h-5 text-[#F9B718] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  Customs Clearance
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Clean documentation, Bill of Lading, Phyto &amp; Origin proofs
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={onExploreProducts}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#F9B718] hover:bg-[#e2a40e] text-[#0B1F3A] font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-transform duration-150 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Explore Our Products</span>
            <ArrowRight className="w-4 h-4 text-[#0B1F3A]" />
          </button>
        </div>
      </div>
    </section>
  );
};
