import React, { useState } from 'react';
import { X, Award, ShieldCheck, CheckCircle2, ZoomIn } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company.ts';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCertId?: 'onlineexim' | 'mjacademy' | null;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  selectedCertId = 'onlineexim',
}) => {
  const [activeTab, setActiveTab] = useState<'onlineexim' | 'mjacademy'>(selectedCertId || 'onlineexim');
  const [isZoomed, setIsZoomed] = useState(false);

  React.useEffect(() => {
    if (selectedCertId) {
      setActiveTab(selectedCertId);
    }
  }, [selectedCertId]);

  if (!isOpen) return null;

  const certData = {
    onlineexim: {
      title: 'OnlineExim Certificate of Training (EAEI)',
      institution: 'OnlineExim — International Export Import Training Center',
      recipient: 'Mr. Gadhavara Tehsinraza',
      refId: 'OES7757',
      date: 'October 2026',
      director: 'Paresh Solanki',
      image: '/brand/onlineexim-certificate.jpeg',
      description:
        'During this Practical Training He Has Learned Export Import Procedure, Documentation, International Marketing, Banking, Logistics and other things related to Export and Import.',
    },
    mjacademy: {
      title: 'Master Import-Export Course Certificate',
      institution: 'MJ International Import Export Academy',
      recipient: 'Tehasinraza Gadhavara',
      refId: 'MJ-EXIM-2026',
      date: 'April 2026',
      director: 'Academic Directorate',
      image: '/brand/mj-certificate.jpeg',
      description:
        'Has Successfully Completed The Master Import-Export Course Conducted And Assessed By Our Institution. Acknowledging Participant Commitment In Fulfilling Practical Global Trade Requirements.',
    },
  }[activeTab];

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
        <div
          className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden my-6 p-5 sm:p-8 max-h-[92vh] flex flex-col justify-between"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F9B718]">
                <Award className="w-4 h-4 text-[#F9B718]" />
                <span>Original Government &amp; Institutional Document</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1F3A] tracking-tight mt-0.5">
                Verified Export Training Certificate
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-[#0B1F3A] hover:bg-slate-100 transition-colors"
              aria-label="Close certificate modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Certificate Switcher Tabs */}
          <div className="flex items-center gap-2 my-4 bg-slate-100 p-1.5 rounded-xl">
            <button
              onClick={() => {
                setActiveTab('onlineexim');
                setIsZoomed(false);
              }}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'onlineexim'
                  ? 'bg-[#0B1F3A] text-white shadow-xs'
                  : 'text-[#5E6878] hover:text-[#0B1F3A]'
              }`}
            >
              OnlineExim (Ref: OES7757)
            </button>

            <button
              onClick={() => {
                setActiveTab('mjacademy');
                setIsZoomed(false);
              }}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'mjacademy'
                  ? 'bg-[#0B1F3A] text-white shadow-xs'
                  : 'text-[#5E6878] hover:text-[#0B1F3A]'
              }`}
            >
              MJ International Academy
            </button>
          </div>

          {/* Real Scanned Certificate Display Area */}
          <div className="flex-1 overflow-y-auto pr-1 space-y-4">
            <div className="group relative rounded-xl overflow-hidden border-2 border-slate-200 bg-slate-50 shadow-inner flex items-center justify-center">
              <img
                src={certData.image}
                alt={certData.title}
                className="w-full max-h-[460px] object-contain transition-transform duration-200"
              />

              <button
                onClick={() => setIsZoomed(true)}
                className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0B1F3A]/90 hover:bg-[#0B1F3A] text-white text-xs font-semibold rounded-lg shadow-md backdrop-blur-xs transition-transform hover:scale-105 cursor-pointer"
              >
                <ZoomIn className="w-3.5 h-3.5 text-[#F9B718]" />
                <span>View Full Size</span>
              </button>
            </div>

            {/* Document Details Metadata */}
            <div className="bg-[#FFFDF7] p-4 rounded-xl border border-slate-200 text-xs space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/60 pb-2">
                <span className="font-semibold text-[#0B1F3A]">
                  Issued to: <strong className="text-[#0B1F3A]">{certData.recipient}</strong>
                </span>
                <span className="font-mono text-[11px] font-bold text-[#B88100] bg-[#FFF3C7] px-2 py-0.5 rounded">
                  {certData.refId}
                </span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {certData.description}
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-xs text-[#5E6878]">
            <span className="flex items-center gap-1.5 text-[11px]">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Authentic physical document on file. Verification ID: OES7757</span>
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-[#0B1F3A] hover:bg-[#163660] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen High-Res Zoom Lightbox */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setIsZoomed(false)}
        >
          <button
            onClick={() => setIsZoomed(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
            aria-label="Close Zoom"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={certData.image}
            alt={certData.title}
            className="max-h-[92vh] max-w-[95vw] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </>
  );
};
