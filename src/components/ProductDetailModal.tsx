import React, { useState } from 'react';
import { X, ArrowRight, ShieldCheck, Box, Package, Truck, CheckCircle2, Maximize2 } from 'lucide-react';
import { Product } from '../data/products.ts';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onEnquire: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onEnquire,
}) => {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.image);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Sync activeImage if product changes
  React.useEffect(() => {
    if (product) {
      setActiveImage(product.image);
    }
  }, [product]);

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
        <div
          className="relative bg-white rounded-2xl max-w-4xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 hover:bg-slate-100 text-[#0B1F3A] shadow-sm transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Left Column: Image Gallery */}
            <div className="md:col-span-5 bg-slate-50 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200">
              <div>
                <div className="group relative aspect-square rounded-xl overflow-hidden bg-white border border-slate-200 shadow-xs mb-4">
                  <img
                    src={activeImage}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                  {/* Lightbox Trigger Button */}
                  <button
                    onClick={() => setLightboxOpen(true)}
                    className="absolute bottom-3 right-3 p-2 rounded-lg bg-black/60 hover:bg-black/80 text-white shadow-md transition-transform hover:scale-105"
                    title="View Fullscreen"
                    aria-label="Open Lightbox"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Thumbnails */}
                {product.gallery.length > 1 && (
                  <div className="flex gap-2">
                    {product.gallery.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImage(img)}
                        className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                          activeImage === img
                            ? 'border-[#F9B718] shadow-xs'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${product.name} view ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200 text-xs text-[#5E6878]">
                <div className="flex items-center gap-1.5 font-bold text-[#0B1F3A] mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#F9B718]" />
                  <span>Export Inspection Ready</span>
                </div>
                <span>Batch testing, phytosanitary checks &amp; custom reefer settings configured per destination port.</span>
              </div>
            </div>

            {/* Right Column: Technical Details & Specifications */}
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between max-h-[80vh] overflow-y-auto">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B88100]">
                    {product.categoryLabel}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight mt-1">
                    {product.name}
                  </h2>
                  <p className="text-sm text-[#5E6878] mt-3 leading-relaxed">
                    {product.overview}
                  </p>
                </div>

                {/* Quality Focus */}
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F9B718]" />
                    <span>Quality &amp; Sourcing Focus</span>
                  </h3>
                  <p className="text-xs text-[#5E6878] leading-relaxed">
                    {product.qualityFocus}
                  </p>
                </div>

                {/* Packaging Options */}
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-2 flex items-center gap-1.5">
                    <Package className="w-4 h-4 text-[#0B1F3A]" />
                    <span>Packaging Options</span>
                  </h3>
                  <ul className="space-y-1.5">
                    {product.packagingOptions.map((opt, idx) => (
                      <li key={idx} className="text-xs text-[#182235] flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F9B718] mt-1.5 shrink-0" />
                        <span>{opt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Export Specifications Grid */}
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-3 flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-[#0B1F3A]" />
                    <span>Export &amp; Shipment Parameters</span>
                  </h3>
                  <div className="grid grid-cols-2 gap-3 bg-[#FFFDF7] p-3.5 rounded-xl border border-slate-200">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400">Origin Hub</span>
                      <p className="text-xs font-semibold text-[#0B1F3A]">{product.exportSpecs.origin}</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400">Grade / Standard</span>
                      <p className="text-xs font-semibold text-[#0B1F3A]">{product.exportSpecs.shelfLifeOrGrade}</p>
                    </div>
                    <div className="col-span-2">
                      <span className="text-[10px] uppercase font-bold text-slate-400">Statutory Readiness</span>
                      <p className="text-xs font-semibold text-[#0B1F3A]">{product.exportSpecs.inspectionReady}</p>
                    </div>
                    {product.exportSpecs.temperatureOrStorage && (
                      <div className="col-span-2">
                        <span className="text-[10px] uppercase font-bold text-slate-400">Transit Storage Condition</span>
                        <p className="text-xs font-semibold text-[#0B1F3A]">{product.exportSpecs.temperatureOrStorage}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Bottom Actions */}
              <div className="pt-6 mt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3 justify-end">
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-[#5E6878] hover:text-[#0B1F3A] transition-colors cursor-pointer"
                >
                  Close
                </button>

                <button
                  onClick={() => {
                    onEnquire(product.name);
                    onClose();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F9B718] hover:bg-[#e2a40e] text-[#0B1F3A] font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all cursor-pointer"
                >
                  <span>Request Quotation for {product.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox View (Section 41 Compliance) */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-60 bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={activeImage}
            alt={product.name}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </>
  );
};
