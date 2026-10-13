import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Eye } from 'lucide-react';
import { PRODUCTS, Product } from '../data/products.ts';

interface ProductSlidersSectionProps {
  onOpenProductDetail: (product: Product) => void;
  onEnquireProduct: (productName: string) => void;
  onExploreCategory: (categoryId: string) => void;
}

export const ProductSlidersSection: React.FC<ProductSlidersSectionProps> = ({
  onOpenProductDetail,
  onEnquireProduct,
  onExploreCategory,
}) => {
  const [activeCategory, setActiveCategory] = useState<'fresh-produce' | 'spices' | 'tissue-products' | 'kitchenware'>('fresh-produce');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const categories = [
    { id: 'fresh-produce', label: 'Fresh Produce' },
    { id: 'spices', label: 'Spices & Dried' },
    { id: 'tissue-products', label: 'Tissue & Paper' },
    { id: 'kitchenware', label: 'Kitchenware' },
  ] as const;

  const currentProducts = PRODUCTS.filter((p) => p.category === activeCategory);

  // Reset index when changing category
  const handleCategoryChange = (catId: 'fresh-produce' | 'spices' | 'tissue-products' | 'kitchenware') => {
    setActiveCategory(catId);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % currentProducts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + currentProducts.length) % currentProducts.length);
  };

  // Auto-play feature (5s interval, pauses on hover)
  useEffect(() => {
    if (!isPaused && currentProducts.length > 1) {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [currentIndex, isPaused, currentProducts.length]);

  const activeProduct = currentProducts[currentIndex] || currentProducts[0];

  return (
    <section className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#F9B718] mb-2">
              Visual Product Showcases
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
              Export Commodity Sliders
            </h2>
            <p className="text-sm text-[#5E6878] mt-2 max-w-xl">
              Inspect physical packaging standards, grading characteristics, and export varieties by category.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-[#0B1F3A] text-white shadow-xs'
                    : 'bg-[#FFFDF7] text-[#5E6878] hover:text-[#0B1F3A] hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Showcase Card */}
        {activeProduct && (
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="bg-[#FFFDF7] rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Visual Media Column */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[440px] bg-slate-100 overflow-hidden">
              <img
                src={activeProduct.image}
                alt={activeProduct.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />

              {/* Prev / Next Floating Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#0B1F3A] shadow-md transition-transform hover:scale-110 focus:outline-none"
                aria-label="Previous product"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#0B1F3A] shadow-md transition-transform hover:scale-110 focus:outline-none"
                aria-label="Next product"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Pagination Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-y-0 -translate-x-1/2 flex items-center gap-2 bg-[#0B1F3A]/60 backdrop-blur-xs px-3 py-1.5 rounded-full">
                {currentProducts.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      currentIndex === idx ? 'w-6 bg-[#F9B718]' : 'w-2 bg-white/50 hover:bg-white'
                    }`}
                    aria-label={`Go to item ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Content & Specs Column */}
            <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-[#B88100] uppercase tracking-wider mb-2">
                  <span>{activeProduct.categoryLabel}</span>
                  <span className="font-mono text-slate-400">
                    {currentIndex + 1} / {currentProducts.length}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
                  {activeProduct.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#5E6878] leading-relaxed mt-3">
                  {activeProduct.overview}
                </p>

                {/* Packaging Highlights */}
                <div className="mt-6 pt-5 border-t border-slate-200">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B1F3A] block mb-2">
                    Standard Packaging Configurations:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#182235]">
                    {activeProduct.packagingOptions.map((pkg, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F9B718] mt-1.5 shrink-0" />
                        <span>{pkg}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-8 mt-6 border-t border-slate-200 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onEnquireProduct(activeProduct.name)}
                  className="px-5 py-2.5 bg-[#F9B718] hover:bg-[#e2a40e] text-[#0B1F3A] font-bold text-xs uppercase tracking-wider rounded-lg shadow-xs transition-transform hover:-translate-y-0.5 cursor-pointer"
                >
                  Enquire This Product
                </button>

                <button
                  onClick={() => onOpenProductDetail(activeProduct)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white border border-slate-300 hover:border-[#0B1F3A] text-[#0B1F3A] font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Full Technical Specs</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
