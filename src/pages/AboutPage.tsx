import React, { useState } from 'react';
import { ShieldCheck, Award, ArrowRight, CheckCircle2, FileCheck, Globe, Anchor, ExternalLink, ZoomIn } from 'lucide-react';
import { WhyChooseUs } from '../components/WhyChooseUs.tsx';
import { CredentialsSection } from '../components/CredentialsSection.tsx';
import { CertificateModal } from '../components/CertificateModal.tsx';
import { COMPANY_CONFIG } from '../config/company.ts';

interface AboutPageProps {
  onOpenQuote: () => void;
  onExploreProducts: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenQuote,
  onExploreProducts,
}) => {
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [activeCert, setActiveCert] = useState<'onlineexim' | 'mjacademy'>('onlineexim');

  const openCert = (cert: 'onlineexim' | 'mjacademy') => {
    setActiveCert(cert);
    setCertModalOpen(true);
  };

  return (
    <div className="pt-24 pb-16 bg-[#FFFDF7]">
      {/* About Hero */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#F9B718] mb-3">
              Corporate Overview &amp; Mission
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight leading-[1.1] mb-6">
              BUILT FOR GLOBAL TRADE.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B1F3A] to-[#B88100]">
                DRIVEN BY QUALITY.
              </span>
            </h1>
            <p className="text-lg text-[#5E6878] leading-relaxed mb-6 font-medium">
              Rabbani Prime Exim is an India-based export business focused on supplying carefully selected agricultural products, spices, tissue products and kitchenware to international markets.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Profile with Original Real Photograph */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold uppercase tracking-widest text-[#F9B718] mb-2">
              Founder &amp; Certified Leadership
            </div>
            <h2 className="text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
              Export Leadership: {COMPANY_CONFIG.founder.name}
            </h2>
            <p className="text-sm text-[#5E6878] mt-2">
              {COMPANY_CONFIG.founder.title} — personally dedicated to transparent procurement, statutory international compliance, and long-term buyer relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Original Photograph of Tehsinraza Gadhavara */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-100 group">
                <img
                  src="/brand/tehsinraza-founder.jpeg"
                  alt={`${COMPANY_CONFIG.founder.name} receiving Export-Import training certification with Director Paresh Solanki at OnlineExim`}
                  className="w-full h-[460px] object-cover object-top transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/90 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <Award className="w-5 h-5 text-[#F9B718] shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-[#0B1F3A]">
                        {COMPANY_CONFIG.founder.name}
                      </div>
                      <div className="text-[11px] text-[#5E6878]">
                        Practical Export Import Certification with Director Paresh Solanki
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Certified Credentials & Real Document Previews */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-[#FFFDF7] p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded">
                      OnlineExim Training Center
                    </span>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mt-1.5">
                      Certificate of Training — EAEI (Everything About Export Import)
                    </h3>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#B88100] bg-[#FFF3C7] px-2.5 py-1 rounded">
                    Ref ID: OES7757
                  </span>
                </div>

                <p className="text-xs text-[#5E6878] leading-relaxed">
                  Certified by export director <strong>Paresh Solanki</strong>. Hands-on training covering export procedures, documentation, foreign exchange banking, ocean/air logistics, and global B2B marketing.
                </p>

                {/* Scanned Certificate Thumbnail Clickable */}
                <div
                  onClick={() => openCert('onlineexim')}
                  className="group relative h-36 rounded-xl overflow-hidden border border-slate-300 bg-slate-100 cursor-pointer shadow-xs hover:border-[#0B1F3A] transition-all"
                >
                  <img
                    src="/brand/onlineexim-certificate.jpeg"
                    alt="OnlineExim Certificate Document"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0B1F3A]/40 group-hover:bg-[#0B1F3A]/20 transition-colors flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-[#0B1F3A] font-bold text-xs rounded-lg shadow-md">
                      <ZoomIn className="w-3.5 h-3.5 text-[#F9B718]" />
                      <span>Click to Inspect Full Certificate</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#FFFDF7] p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded">
                      MJ International Academy
                    </span>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mt-1.5">
                      Master Import-Export Course Certificate
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    Issued: April 2026
                  </span>
                </div>

                <p className="text-xs text-[#5E6878] leading-relaxed">
                  Advanced certification in global commercial contract negotiation, container stuffing protocols, customs HS classifications, and international food safety standards.
                </p>

                {/* Scanned Certificate Thumbnail Clickable */}
                <div
                  onClick={() => openCert('mjacademy')}
                  className="group relative h-36 rounded-xl overflow-hidden border border-slate-300 bg-slate-100 cursor-pointer shadow-xs hover:border-[#0B1F3A] transition-all"
                >
                  <img
                    src="/brand/mj-certificate.jpeg"
                    alt="MJ International Certificate Document"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0B1F3A]/40 group-hover:bg-[#0B1F3A]/20 transition-colors flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-[#0B1F3A] font-bold text-xs rounded-lg shadow-md">
                      <ZoomIn className="w-3.5 h-3.5 text-[#F9B718]" />
                      <span>Click to Inspect Full Certificate</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing & Operational Rigor */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-[#F9B718]">
                Operational Pillars
              </div>
              <h2 className="text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
                Quality-Focused Sourcing &amp; Export Readiness
              </h2>
              <p className="text-sm text-[#5E6878] leading-relaxed">
                Operating from Gujarat — one of India&apos;s primary agrarian and manufacturing epicenters with immediate access to Mundra and Kandla ports — we coordinate end-to-end procurement and quality verification.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FFF3C7] flex items-center justify-center text-[#0B1F3A] shrink-0 font-bold text-xs mt-0.5">
                    01
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1F3A]">Direct Source Integration</h4>
                    <p className="text-xs text-[#5E6878] mt-0.5">
                      Direct connections with certified agricultural growers and modern manufacturing mills ensure batch trace-ability and consistent grade delivery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FFF3C7] flex items-center justify-center text-[#0B1F3A] shrink-0 font-bold text-xs mt-0.5">
                    02
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1F3A]">Technical Documentation &amp; Compliance</h4>
                    <p className="text-xs text-[#5E6878] mt-0.5">
                      Complete regulatory compliance with APEDA, FSSAI, MSME, GST, and DGFT Import Export Code standards for swift customs clearances.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FFF3C7] flex items-center justify-center text-[#0B1F3A] shrink-0 font-bold text-xs mt-0.5">
                    03
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1F3A]">Packaging &amp; Cold-Chain Protection</h4>
                    <p className="text-xs text-[#5E6878] mt-0.5">
                      Customized corrugated cartons, moisture-barrier sacks, and temperature-monitored reefer container loading designed for trans-oceanic voyages.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white">
                <img
                  src="/images/hero_export_logistics.jpeg"
                  alt="Export logistics and container port terminal"
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 bg-[#0B1F3A] text-white">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#F9B718] uppercase tracking-wider mb-1">
                    <Anchor className="w-4 h-4" />
                    <span>Western Coast Gateway</span>
                  </div>
                  <h4 className="text-lg font-bold">Mundra &amp; Kandla Port Connectivity</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Direct access to India&apos;s largest automated container terminals enables rapid vessel booking, competitive freight tariffs, and short transit windows to Gulf, European, and Asian destination ports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Feature Cards */}
      <WhyChooseUs />

      {/* Statutory Credentials (APEDA, FSSAI, MSME, GST, IEC) */}
      <CredentialsSection />

      {/* Bottom CTA */}
      <section className="py-16 bg-[#0B1F3A] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
            Partner With Rabbani Prime Exim
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-8">
            Experience reliable procurement, prompt quotation response, and meticulous execution for your export requirements.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onExploreProducts}
              className="px-6 py-3 bg-white text-[#0B1F3A] font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Explore Products
            </button>
            <button
              onClick={onOpenQuote}
              className="px-6 py-3 bg-[#F9B718] text-[#0B1F3A] font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-[#e2a40e] transition-colors cursor-pointer"
            >
              Request Quotation
            </button>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      <CertificateModal
        isOpen={certModalOpen}
        onClose={() => setCertModalOpen(false)}
        selectedCertId={activeCert}
      />
    </div>
  );
};
