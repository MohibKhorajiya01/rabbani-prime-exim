import React from 'react';
import { GlobalReachMap } from '../components/GlobalReachMap.tsx';
import { ExportProcessTimeline } from '../components/ExportProcessTimeline.tsx';
import { Anchor, ShieldCheck, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

interface GlobalReachPageProps {
  onOpenQuote: () => void;
  onExploreProducts: () => void;
}

export const GlobalReachPage: React.FC<GlobalReachPageProps> = ({
  onOpenQuote,
  onExploreProducts,
}) => {
  return (
    <div className="pt-24 pb-20 bg-[#FFFDF7]">
      {/* Global Reach Hero */}
      <section className="py-16 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#F9B718] mb-2">
              International Trade Corridors
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight mb-4">
              FROM INDIA TO GLOBAL MARKETS.
            </h1>
            <p className="text-base text-[#5E6878] leading-relaxed">
              Leveraging our strategic hub in western India to bridge domestic agricultural belts and industrial manufacturers with buyers across the Middle East, Southeast Asia, Europe, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive World Map & 5-Step Export Approach */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlobalReachMap />
        </div>
      </section>

      {/* Port Logistics & Documentation Compliance */}
      <section className="py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#F9B718] mb-2">
                Strategic Western Gateway
              </div>
              <h2 className="text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
                Gujarat Port Infrastructure: Mundra &amp; Kandla
              </h2>
              <p className="text-sm text-[#5E6878] leading-relaxed mt-3">
                Our base provides unmatched strategic proximity to India&apos;s two most modern, deep-water automated maritime hubs — Mundra and Kandla.
              </p>

              <div className="mt-6 space-y-3 text-xs text-[#182235]">
                <div className="p-3.5 bg-[#FFFDF7] rounded-xl border border-slate-200 flex items-start gap-3">
                  <Anchor className="w-4 h-4 text-[#0B1F3A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#0B1F3A]">Short Ocean Transit Windows:</strong>
                    <span>Direct feeder and mainline vessels connect Gujarat ports to Jebel Ali, Dammam, Singapore, and Europe with minimal transit time.</span>
                  </div>
                </div>

                <div className="p-3.5 bg-[#FFFDF7] rounded-xl border border-slate-200 flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#0B1F3A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#0B1F3A]">State-of-the-Art Reefer Plug Points:</strong>
                    <span>Continuous cold-chain monitoring at dockside holding facilities before container vessel loading.</span>
                  </div>
                </div>

                <div className="p-3.5 bg-[#FFFDF7] rounded-xl border border-slate-200 flex items-start gap-3">
                  <FileText className="w-4 h-4 text-[#0B1F3A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#0B1F3A]">Expedited Customs &amp; Quarantines:</strong>
                    <span>On-site plant quarantine inspection, phyto certification, and electronic customs clearing.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0B1F3A] text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold tracking-tight mb-2">
                Standard Export Documentation Suite
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Every consignment shipped by Rabbani Prime Exim is accompanied by clean, verifiable international trade documentation:
              </p>

              <div className="space-y-2.5 text-xs">
                {[
                  'Commercial Invoice & Detailed Packing List',
                  'Clean On-Board Ocean Bill of Lading (B/L) / Air Waybill',
                  'Phytosanitary Certificate issued by Ministry of Agriculture (Govt. of India)',
                  'Certificate of Origin (Chamber of Commerce / Trade Council)',
                  'Fumigation & Pest-Free Certificate',
                  'Third-Party Inspection Certificate (SGS/Bureau Veritas upon request)',
                ].map((doc, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#F9B718] shrink-0" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-slate-300">Custom buyer terms supported (LC / TT)</span>
                <button
                  onClick={onOpenQuote}
                  className="px-4 py-2 bg-[#F9B718] text-[#0B1F3A] font-bold text-xs uppercase tracking-wider rounded-md"
                >
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Step Export Process Timeline */}
      <ExportProcessTimeline />

      {/* Bottom CTA */}
      <section className="py-16 bg-[#071426] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
            Inquire About Shipping to Your Destination Port
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-6">
            Share your port of discharge and commodity requirements for immediate freight and packaging coordination.
          </p>
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F9B718] hover:bg-[#e2a40e] text-[#0B1F3A] font-bold text-xs uppercase tracking-wider rounded-lg"
          >
            <span>Inquire Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
