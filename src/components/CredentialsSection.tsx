import React, { useState } from 'react';
import { ShieldCheck, Award, CheckCircle, ExternalLink } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company.ts';
import { CertificateModal } from './CertificateModal.tsx';

export const CredentialsSection: React.FC = () => {
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [activeCert, setActiveCert] = useState<'onlineexim' | 'mjacademy'>('onlineexim');

  const openCert = (cert: 'onlineexim' | 'mjacademy') => {
    setActiveCert(cert);
    setCertModalOpen(true);
  };

  return (
    <>
      <section className="py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-[#F9B718] mb-2">
              Statutory Compliance &amp; Verification
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
              Registered &amp; Export Ready
            </h2>
            <p className="text-base text-[#5E6878] mt-3">
              Rabbani Prime Exim maintains formal institutional registrations across trade councils, food safety authorities, and national customs frameworks.
            </p>
          </div>

          {/* 5 Registered Credentials Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {COMPANY_CONFIG.credentials.map((cred) => (
              <div
                key={cred.code}
                className="bg-[#FFFDF7] p-6 rounded-xl border border-slate-200/90 hover:border-[#0B1F3A]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-extrabold text-[#0B1F3A] tracking-tight font-['Manrope']">
                      {cred.code}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-[#B88100]" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wide text-[#0B1F3A] mb-1">
                    {cred.role}
                  </h3>
                  <p className="text-[11px] text-[#5E6878] leading-relaxed line-clamp-3">
                    {cred.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-[#0B1F3A] bg-[#FFF3C7] px-2 py-0.5 rounded">
                    {cred.status}
                  </span>
                  <CheckCircle className="w-3.5 h-3.5 text-[#B88100]" />
                </div>
              </div>
            ))}
          </div>

          {/* Verified Founder Export Training Credential Block with Interactive View */}
          <div className="mt-10 p-6 sm:p-8 bg-[#0B1F3A] rounded-2xl text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F9B718] mb-2">
                  <Award className="w-4 h-4" />
                  <span>Certified International Trade Professional</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight">
                  Leadership Credential: {COMPANY_CONFIG.founder.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Formally trained and certified in practical international export procedures, custom documentation, international marketing, export banking, and cold-chain sea/air logistics under OnlineExim (Ref: OES7757) and the MJ International Import Export Academy.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <button
                  onClick={() => openCert('onlineexim')}
                  className="p-3 rounded-lg bg-white/10 hover:bg-white/15 backdrop-blur-xs border border-white/10 text-left transition-colors cursor-pointer group"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-white">
                    <span>OnlineExim Certification</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#F9B718] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <div className="text-[11px] text-slate-300 mt-0.5">Ref ID: OES7757 · View Curriculum Details &rarr;</div>
                </button>

                <button
                  onClick={() => openCert('mjacademy')}
                  className="p-3 rounded-lg bg-white/10 hover:bg-white/15 backdrop-blur-xs border border-white/10 text-left transition-colors cursor-pointer group"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-white">
                    <span>MJ Import Export Academy</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#F9B718] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <div className="text-[11px] text-slate-300 mt-0.5">Master Course Completion · View Record &rarr;</div>
                </button>
              </div>
            </div>
          </div>

          {/* Mandatory Verification Notice (Rule #12 Compliance) */}
          <div className="mt-8 text-center">
            <p className="text-xs text-[#5E6878] italic">
              &ldquo;Relevant registrations and business credentials available for verification upon request.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      <CertificateModal
        isOpen={certModalOpen}
        onClose={() => setCertModalOpen(false)}
        selectedCertId={activeCert}
      />
    </>
  );
};
