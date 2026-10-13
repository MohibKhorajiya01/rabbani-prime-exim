import React, { useState } from 'react';
import { Search, ArrowRight, Eye, Package, ShieldCheck, Filter } from 'lucide-react';
import { PRODUCTS, PRODUCT_CATEGORIES, Product } from '../data/products.ts';

interface ProductsPageProps {
  selectedCategory: string;
  setSelectedCategory: (catId: string) => void;
  onEnquireProduct: (productName: string) => void;
  onOpenProductDetail: (product: Product) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  selectedCategory,
  setSelectedCategory,
  onEnquireProduct,
  onOpenProductDetail,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'all', label: 'All Products' },
    { id: 'fresh-produce', label: 'Fresh Produce' },
    { id: 'spices', label: 'Spices & Dried Products' },
    { id: 'tissue-products', label: 'Tissue & Paper' },
    { id: 'kitchenware', label: 'Stainless Steel Kitchenware' },
  ];

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory =
      selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20 bg-[#FFFDF7]">
      {/* Products Hero */}
      <section className="py-14 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#F9B718] mb-2">
              Export Product Catalog
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight mb-4">
              Export-Ready Products &amp; Commodities
            </h1>
            <p className="text-sm sm:text-base text-[#5E6878] leading-relaxed">
              Explore our verified export portfolio across agricultural produce, pure Indian spices, commercial sanitary paper, and food-grade stainless steel kitchenware.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar & Search */}
      <div className="sticky top-[73px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category Filter Tabs (Interactive Functional Buttons) */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {filterTabs.map((tab) => {
                const isActive = selectedCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                      isActive
                        ? 'bg-[#0B1F3A] text-white shadow-xs'
                        : 'bg-[#FFFDF7] text-[#5E6878] hover:text-[#0B1F3A] hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[260px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search commodities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#FFFDF7] border border-slate-200 rounded-lg text-xs text-[#0B1F3A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F9B718] transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 p-8">
              <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#0B1F3A]">No Commodities Found</h3>
              <p className="text-xs text-[#5E6878] mt-1 max-w-sm mx-auto">
                No products match &ldquo;{searchQuery}&rdquo;. Try another search term or reset category filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 bg-[#0B1F3A] text-white text-xs font-bold uppercase rounded-lg"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Product Image */}
                    <div
                      onClick={() => onOpenProductDetail(product)}
                      className="relative h-48 overflow-hidden bg-slate-100 cursor-pointer"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />

                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 p-2 rounded-lg text-[#0B1F3A] shadow-xs">
                        <Eye className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#B88100] mb-1">
                        {product.categoryLabel}
                      </div>

                      <h3
                        onClick={() => onOpenProductDetail(product)}
                        className="text-lg font-bold text-[#0B1F3A] hover:text-[#F9B718] transition-colors cursor-pointer leading-snug"
                      >
                        {product.name}
                      </h3>

                      <p className="text-xs text-[#5E6878] leading-relaxed mt-2 line-clamp-2">
                        {product.shortDescription}
                      </p>

                      <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-[#5E6878] flex items-center justify-between">
                        <span>Standard Packaging:</span>
                        <span className="font-semibold text-[#0B1F3A] truncate max-w-[130px]">
                          {product.packagingOptions[0]?.split(' ')[0]} {product.packagingOptions[0]?.split(' ')[1] || 'Cartons'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="p-5 pt-0">
                    <button
                      onClick={() => onEnquireProduct(product.name)}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#0B1F3A] hover:bg-[#163660] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer shadow-xs"
                    >
                      <span>Enquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#F9B718]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Export Packaging Standards Info Section (Section 48 of prompt) */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B1F3A] text-white rounded-2xl p-8 sm:p-10 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="text-xs font-bold uppercase tracking-widest text-[#F9B718] mb-2">
                  Protective Packaging Protocol
                </div>
                <h3 className="text-2xl font-bold tracking-tight">
                  Packaging Engineered for Marine &amp; Air Freight
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Every export product is packed in compliance with international quarantine and physical transit guidelines: heavy-duty 5-ply/7-ply corrugated cartons, food-grade poly barrier films, micro-perforated produce liners, moisture desiccants, and fumigated wooden pallets.
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold text-slate-200">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#F9B718]" />
                    Fumigated Pallets (ISPM 15)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#F9B718]" />
                    Custom Master Carton Branding
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#F9B718]" />
                    Reefer Temperature Logging
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <button
                  onClick={() => onEnquireProduct('Custom Export Packaging')}
                  className="px-6 py-3.5 bg-[#F9B718] hover:bg-[#e2a40e] text-[#0B1F3A] font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm"
                >
                  Request Packaging Specs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
