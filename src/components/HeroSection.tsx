import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onNavigateToCategory: (categoryId: string) => void;
  onNavigateToAbout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigateToCategory,
  onNavigateToAbout,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    // 1. Welcome to Rabbani Prime Exim
    {
      id: 'welcome-ship',
      image: '/src/assets/images/hero_cargo_ship_ocean_1791885772004.jpg',
      badge: 'GLOBAL IMPORT & EXPORT',
      title: 'Welcome to Rabbani Prime Exim',
      subtitle: 'Connecting High-Quality Indian Products with International Markets',
      buttonText: 'Company Information',
      action: () => onNavigateToAbout(),
    },
    // 2. Fresh Vegetables & Fruits (Rich Bountiful Farm & Kitchen Setup)
    {
      id: 'fresh-produce',
      image: '/src/assets/images/veg_fruits_rich_luxury_1791890748260.jpg',
      badge: 'FRESH PRODUCE EXPORTS',
      title: 'Fresh Vegetables & Seasonal Fruits',
      subtitle: 'Export-Grade Green Chillies, Red Onions, Sweet Corn, Mangoes, Lemons & Pomegranates',
      buttonText: 'Explore Fresh Produce',
      action: () => onNavigateToCategory('fresh-produce'),
    },
    // 3. Indian Spices (Luxury Slate Presentation)
    {
      id: 'spices',
      image: '/src/assets/images/spices_luxury_export_1791890095182.jpg',
      badge: 'PURE INDIAN SPICES',
      title: 'Pure Indian Spices & Dried Products',
      subtitle: 'Sortex Machine-Cleaned Cumin Seeds (Jeera), Red Chillies & Turmeric',
      buttonText: 'Explore Spices',
      action: () => onNavigateToCategory('spices'),
    },
    // 4. Fancy Tissue Paper (RPE Branded Luxury Packaging)
    {
      id: 'tissue-paper',
      image: '/src/assets/images/tissue_paper_rpe_brand_1791890749260.jpg',
      badge: 'TISSUE & SANITARY PAPER',
      title: 'RPE Premium Tissue & Paper Products',
      subtitle: 'RPE Virgin Pulp Toilet Rolls, Facial Tissue Boxes, Kitchen Towels & Napkins',
      buttonText: 'Explore Tissue Products',
      action: () => onNavigateToCategory('tissue-products'),
    },
    // 5. Stainless Steel Luxury Vacuum Bottles (Bottles Only, RPE Branded)
    {
      id: 'stainless-bottles',
      image: '/src/assets/images/ss_bottles_only_rpe_1791890748920.jpg',
      badge: 'STAINLESS STEEL DRINKWARE',
      title: 'RPE Stainless Steel Bottles & Thermal Flasks',
      subtitle: 'Double-Wall Vacuum Insulated Thermal Flasks & Classic Single-Wall Sleek Bottles',
      buttonText: 'Explore RPE Bottles',
      action: () => onNavigateToCategory('kitchenware'),
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance slides smoothly every 5 seconds
  useEffect(() => {
    timerRef.current = setInterval(() => {
      handleNext();
    }, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentSlide]);

  const active = slides[currentSlide];

  return (
    <section className="relative w-full h-[72vh] sm:h-[80vh] min-h-[500px] max-h-[780px] overflow-hidden select-none bg-slate-950">
      {/* 100% Crisp, Clear, Sharp Photos - No blur, completely unblocked */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
            loading={idx === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* Gentle subtle gradient so the photo stays bright and vibrant while text remains crisp */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-black/35 z-20 pointer-events-none" />

      {/* Centered Minimal Content Overlay - NO bulky blue card, photo is 100% visible */}
      <div className="relative z-30 h-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        {/* Subtle pill badge */}
        <div className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-[#F9B718]/60 text-[#F9B718] font-bold text-[11px] sm:text-xs uppercase tracking-widest mb-3 shadow-md animate-in fade-in duration-300">
          <span>{active.badge}</span>
        </div>

        {/* Clean, readable heading without any covering card */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] max-w-3xl animate-in fade-in duration-300">
          {active.title}
        </h1>

        {/* Short, crisp subtitle */}
        <p className="text-xs sm:text-sm md:text-base text-slate-100 font-medium leading-relaxed max-w-xl mx-auto mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] animate-in fade-in duration-300">
          {active.subtitle}
        </p>

        {/* Clean Explore / Info button directly centered */}
        <div className="flex justify-center animate-in fade-in zoom-in-95 duration-300">
          <button
            onClick={active.action}
            className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#F9B718] hover:bg-[#e5a610] text-[#0B1F3A] font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>{active.buttonText}</span>
            <ArrowRight className="w-4 h-4 text-[#0B1F3A]" />
          </button>
        </div>
      </div>

      {/* Left Navigation Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm border border-white/20 shadow-lg transition-transform hover:scale-110 focus:outline-none cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      {/* Right Navigation Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm border border-white/20 shadow-lg transition-transform hover:scale-110 focus:outline-none cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      {/* Bottom Center Slide Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/15">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentSlide === idx
                ? 'w-6 h-2 bg-[#F9B718]'
                : 'w-2 h-2 bg-white/50 hover:bg-white'
            }`}
            aria-label={`Jump to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
