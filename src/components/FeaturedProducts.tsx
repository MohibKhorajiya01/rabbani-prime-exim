import React from 'react';
import { ArrowRight, Eye } from 'lucide-react';
import { PRODUCTS, Product } from '../data/products.ts';

interface FeaturedProductsProps {
  onViewAllProducts: () => void;
  onEnquireProduct: (productName: string) => void;
  onOpenProductDetail: (product: Product) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  onViewAllProducts,
  onEnquireProduct,
  onOpenProductDetail,
}) => {
  // 6 marquee export products as specified: Green Chilli, Onion, Sweet Corn, Red Chilli, Turmeric, Cumin Seeds
  const featuredList = PRODUCTS.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#F9B718] mb-2">
              International Trade Catalog
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
              Featured Export Products
            </h2>
            <p className="text-base text-[#5E6878] mt-2 max-w-xl">
              High-volume commodities and value-added consumer products packaged to ocean freight and air cargo standards.
            </p>
          </div>

          <button
            onClick={onViewAllProducts}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0B1F3A] hover:text-[#B88100] transition-colors py-2 whitespace-nowrap cursor-pointer"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 6 Featured Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredList.map((product) => {
            return (
              <div
                key={product.id}
                className="group bg-[#FFFDF7] rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Product Image */}
                <div
                  onClick={() => onOpenProductDetail(product)}
                  className="relative h-52 overflow-hidden bg-slate-100 cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />

                  {/* Quick Detail View Overlay Hint */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm p-2 rounded-lg text-[#0B1F3A] shadow-sm">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed clean metadata (Zero-pill discipline) */}
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#B88100] mb-1.5">
                      {product.categoryLabel}
                    </div>

                    <h3
                      onClick={() => onOpenProductDetail(product)}
                      className="text-xl font-bold text-[#0B1F3A] hover:text-[#F9B718] transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h3>

                    <p className="text-sm text-[#5E6878] leading-relaxed mt-2 line-clamp-2">
                      {product.shortDescription}
                    </p>
                  </div>

                  {/* Packaging spec summary line */}
                  <div className="mt-5 pt-4 border-t border-slate-200/70 flex items-center justify-between">
                    <button
                      onClick={() => onOpenProductDetail(product)}
                      className="text-xs font-semibold text-[#5E6878] hover:text-[#0B1F3A] transition-colors cursor-pointer"
                    >
                      Specs &amp; Packaging
                    </button>

                    <button
                      onClick={() => onEnquireProduct(product.name)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#0B1F3A] hover:bg-[#163660] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer"
                    >
                      <span>Enquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#F9B718]" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-[#0B1F3A] rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h4 className="text-xl font-bold tracking-tight">
              Looking for Custom Packaging or Specific Destination Parameters?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              We coordinate private labeling, customized master cartons, reefer temperature monitoring, and bespoke buyer requirements.
            </p>
          </div>
          <button
            onClick={onViewAllProducts}
            className="px-6 py-3 bg-[#F9B718] hover:bg-[#e2a40e] text-[#0B1F3A] font-bold text-xs uppercase tracking-wider rounded-lg shrink-0 transition-transform duration-150 hover:-translate-y-0.5 cursor-pointer"
          >
            Browse Full Catalog
          </button>
        </div>
      </div>
    </section>
  );
};
