/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ProductsPage } from './pages/ProductsPage.tsx';
import { GlobalReachPage } from './pages/GlobalReachPage.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { ProductDetailModal } from './components/ProductDetailModal.tsx';
import { QuoteModal } from './components/QuoteModal.tsx';
import { LegalModal } from './components/LegalModal.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { Product, PRODUCTS } from './data/products.ts';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeProductDetail, setActiveProductDetail] = useState<Product | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [preselectedProduct, setPreselectedProduct] = useState('');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [contactInitialProduct, setContactInitialProduct] = useState('');

  // Handle URL hash changes or back/forward browser navigation (including dynamic category & product routes)
  useEffect(() => {
    const handleHash = () => {
      const rawHash = window.location.hash.replace('#', '');
      if (!rawHash) {
        setActiveTab('home');
        return;
      }

      // Check for category sub-routes e.g. #products/fresh-produce
      if (rawHash.startsWith('products/')) {
        const sub = rawHash.replace('products/', '');
        if (['fresh-produce', 'spices', 'tissue-products', 'kitchenware'].includes(sub)) {
          setActiveTab('products');
          setSelectedCategory(sub);
          return;
        }
      }

      // Check for direct product modal route e.g. #product/green-chilli
      if (rawHash.startsWith('product/')) {
        const prodId = rawHash.replace('product/', '');
        const found = PRODUCTS.find((p) => p.id === prodId);
        if (found) {
          setActiveProductDetail(found);
          setActiveTab('products');
          return;
        }
      }

      if (['home', 'about', 'products', 'global-reach', 'services', 'contact'].includes(rawHash)) {
        setActiveTab(rawHash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (tab: string, categoryId?: string) => {
    setActiveTab(tab);
    if (tab === 'products' && categoryId) {
      setSelectedCategory(categoryId);
      window.location.hash = `products/${categoryId}`;
    } else {
      window.location.hash = tab;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (productName?: string) => {
    setPreselectedProduct(productName || '');
    setQuoteModalOpen(true);
  };

  const handleEnquireProduct = (productName: string) => {
    setContactInitialProduct(productName);
    setActiveTab('contact');
    window.location.hash = 'contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF7] text-[#182235]">
      {/* Sticky Header with Top Bar Contract */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => handleNavigate(tab)}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            onNavigate={(tab) => handleNavigate(tab)}
            onSelectCategory={(catId) => {
              setSelectedCategory(catId);
              handleNavigate('products', catId);
            }}
            onEnquireProduct={handleEnquireProduct}
            onOpenProductDetail={(prod) => {
              setActiveProductDetail(prod);
              window.location.hash = `product/${prod.id}`;
            }}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage
            onOpenQuote={() => handleOpenQuote()}
            onExploreProducts={() => handleNavigate('products')}
          />
        )}

        {activeTab === 'products' && (
          <ProductsPage
            selectedCategory={selectedCategory}
            setSelectedCategory={(catId) => {
              setSelectedCategory(catId);
              window.location.hash = catId === 'all' ? 'products' : `products/${catId}`;
            }}
            onEnquireProduct={handleEnquireProduct}
            onOpenProductDetail={(prod) => {
              setActiveProductDetail(prod);
              window.location.hash = `product/${prod.id}`;
            }}
          />
        )}

        {activeTab === 'global-reach' && (
          <GlobalReachPage
            onOpenQuote={() => handleOpenQuote()}
            onExploreProducts={() => handleNavigate('products')}
          />
        )}

        {activeTab === 'services' && (
          <ServicesPage
            onOpenQuote={() => handleOpenQuote()}
            onExploreProducts={() => handleNavigate('products')}
          />
        )}

        {activeTab === 'contact' && (
          <div className="pt-24 pb-12">
            <ContactSection initialProduct={contactInitialProduct} />
          </div>
        )}
      </main>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={activeProductDetail}
        onClose={() => {
          setActiveProductDetail(null);
          if (window.location.hash.startsWith('#product/')) {
            window.location.hash = 'products';
          }
        }}
        onEnquire={(prodName) => handleEnquireProduct(prodName)}
      />

      {/* Global Quote Request Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preselectedProduct={preselectedProduct}
      />

      {/* Privacy Policy & Terms Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Master Dark Navy Footer */}
      <Footer
        onNavClick={(tab) => handleNavigate(tab)}
        onOpenLegal={(type) => setLegalModalType(type)}
      />
    </div>
  );
}
