import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCT_CATEGORIES, ProductCategory } from '../data/products.ts';

interface CategoryShowcaseProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({
  onSelectCategory,
}) => {
  return (
    <section className="py-20 bg-[#FFFDF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#F9B718] mb-2">
              Primary Export Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
              Export Business Categories
            </h2>
            <p className="text-base text-[#5E6878] mt-2 max-w-xl">
              Specialized B2B product divisions prepared to meet strict international phytosanitary, hygienic, and culinary specifications.
            </p>
          </div>
          <div className="text-xs font-semibold text-[#5E6878] tracking-wide">
            4 Core Divisions · Custom Packing Available
          </div>
        </div>

        {/* 4 Large Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCT_CATEGORIES.map((cat: ProductCategory, idx: number) => {
            const indexNumber = `0${idx + 1}`;
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col"
              >
                {/* Category Image with Zoom Effect */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={cat.bannerImage}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/85 via-transparent to-transparent" />
                  
                  {/* Category Index Number */}
                  <div className="absolute top-3.5 left-3.5 font-mono text-xs font-bold px-2.5 py-1 bg-[#0B1F3A]/80 backdrop-blur-sm text-[#F9B718] rounded border border-white/20">
                    {indexNumber}
                  </div>

                  {/* Subtag text */}
                  <div className="absolute bottom-3 left-4 text-xs font-medium text-slate-200">
                    {cat.shortTag}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#0B1F3A] group-hover:text-[#F9B718] transition-colors leading-snug">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-[#5E6878] leading-relaxed mt-2 line-clamp-3">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-[#0B1F3A]/70">
                      {cat.productCountText}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1F3A] group-hover:text-[#F9B718] transition-colors">
                      Explore
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
