import React from 'react';
import { ArrowRight, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { HeroSection } from '../components/HeroSection.tsx';
import { TrustStrip } from '../components/TrustStrip.tsx';
import { CategoryShowcase } from '../components/CategoryShowcase.tsx';
import { ProductSlidersSection } from '../components/ProductSlidersSection.tsx';
import { FeaturedProducts } from '../components/FeaturedProducts.tsx';
import { ExportProcessTimeline } from '../components/ExportProcessTimeline.tsx';
import { GlobalTradeVisual } from '../components/GlobalTradeVisual.tsx';
import { CredentialsSection } from '../components/CredentialsSection.tsx';
import { WhyChooseUs } from '../components/WhyChooseUs.tsx';
import { Product } from '../data/products.ts';
import { COMPANY_CONFIG } from '../config/company.ts';

interface HomePageProps {
  onNavigate: (tab: string) => void;
  onSelectCategory: (categoryId: string) => void;
  onEnquireProduct: (productName: string) => void;
  onOpenProductDetail: (product: Product) => void;
  onOpenQuote: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectCategory,
  onEnquireProduct,
  onOpenProductDetail,
  onOpenQuote,
}) => {
  return (
    <div className="flex flex-col">
      {/* 1. Full-Width Centered Hero Slider with Direct Category & About Navigation */}
      <HeroSection
        onNavigateToCategory={(catId) => onSelectCategory(catId)}
        onNavigateToAbout={() => onNavigate('about')}
      />

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* 3. Featured Export Categories (4 Large Divisions) */}
      <CategoryShowcase
        onSelectCategory={(catId) => {
          onSelectCategory(catId);
          onNavigate('products');
        }}
      />

      {/* 4. Visual Product Sliders / Carousels (Section 21 of Master Prompt) */}
      <ProductSlidersSection
        onOpenProductDetail={onOpenProductDetail}
        onEnquireProduct={onEnquireProduct}
        onExploreCategory={(catId) => {
          onSelectCategory(catId);
          onNavigate('products');
        }}
      />

      {/* 5. About RPE & Certified Leadership Preview with Real Founder Photo */}
      <section id="about-preview" className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-[#F9B718]">
                About Rabbani Prime Exim
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight">
                BUILT FOR GLOBAL TRADE.<br />
                DRIVEN BY QUALITY.
              </h2>
              <p className="text-base text-[#5E6878] leading-relaxed">
                Rabbani Prime Exim is an India-based export business focused on supplying carefully selected agricultural products, spices, tissue products and kitchenware to international markets.
              </p>
              <p className="text-sm text-[#5E6878] leading-relaxed">
                Operating with direct farm-gate procurement connections across Gujarat and Maharashtra, we ensure rigorous post-harvest handling, sortex grading, export-grade packaging, and seamless container loading.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0B1F3A] hover:text-[#B88100] transition-colors cursor-pointer"
                >
                  <span>Learn More About Our Operations</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Founder Card with Real Uploaded Photo */}
            <div className="lg:col-span-6 bg-[#FFFDF7] p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 border-[#F9B718] shrink-0 shadow-sm">
                  <img
                    src="/brand/tehsinraza-founder.jpeg"
                    alt={COMPANY_CONFIG.founder.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#B88100]">
                    <Award className="w-3.5 h-3.5" />
                    <span>Certified Export Professional</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0B1F3A] mt-0.5">
                    {COMPANY_CONFIG.founder.name}
                  </h3>
                  <p className="text-xs text-[#5E6878] font-semibold">
                    {COMPANY_CONFIG.founder.title}
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#5E6878] leading-relaxed">
                Holding formal certifications in international trade procedures, documentation, banking, and ocean logistics from premier institutions in India.
              </p>

              <div className="space-y-2.5 pt-2 border-t border-slate-200/70 text-xs text-[#182235]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>OnlineExim EAEI:</strong> Practical Export-Import Training under Director Paresh Solanki (Ref ID: OES7757).
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>MJ International Academy:</strong> Master Import-Export Course completion in global trade compliance.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Featured Export Products (6 Commodities) */}
      <section id="featured-products">
        <FeaturedProducts
          onViewAllProducts={() => onNavigate('products')}
          onEnquireProduct={onEnquireProduct}
          onOpenProductDetail={onOpenProductDetail}
        />
      </section>

      {/* 7. Export Process Timeline (7-Step Workflow) */}
      <section id="process">
        <ExportProcessTimeline />
      </section>

      {/* 8. Export In Motion Global Trade Visual */}
      <GlobalTradeVisual onExploreProducts={() => onNavigate('products')} />

      {/* 9. Registered Business Credentials (APEDA, FSSAI, MSME, GST, IEC) */}
      <section id="credentials">
        <CredentialsSection />
      </section>

      {/* 10. Why Choose RPE (6 Cards) */}
      <WhyChooseUs />

      {/* 11. Final Call to Action Section (Rule #58) */}
      <section className="py-20 bg-[#0B1F3A] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-[#F9B718] mb-3">
            Trade Partnership
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            READY TO EXPLORE GLOBAL TRADE OPPORTUNITIES?
          </h2>
          <p className="text-base text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Tell us what you need. We&apos;ll help you explore the right product, specification, and custom export solution tailored to your market.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-slate-100 text-[#0B1F3A] font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all duration-150 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#F9B718] hover:bg-[#e2a40e] text-[#0B1F3A] font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all duration-150 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Request A Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
