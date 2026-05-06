'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import portfolio from '@/app/data/portfolio.json';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemsRef = useRef([]);

  const categories = ['all', ...new Set(portfolio.map(item => item.category))];
  const filteredPortfolio = selectedCategory === 'all'
    ? portfolio
    : portfolio.filter(item => item.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.15 }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, [filteredPortfolio]);

  return (
    <>
      <section id="gallery" className="bg-black py-24 md:py-40 border-b border-[#C39E6B]/20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#A41C1C]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="mb-20">
            <p className="text-sm font-mono tracking-widest text-[#C39E6B] uppercase mb-4 animate-fade-in-down flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#C39E6B]"></span>
              Portfolio
            </p>
            <h2 className="text-5xl md:text-6xl font-light mb-8 animate-fade-in-up accent-line">
              I Miei Lavori
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Ogni tatuaggio è unico. Scopri la collezione di opere custom realizzate con passione e tecnica raffinata.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-500 border ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#C39E6B] to-[#A41C1C] text-black border-[#C39E6B] shadow-lg shadow-[#C39E6B]/30'
                    : 'bg-transparent border-white/20 text-gray-400 hover:border-[#C39E6B]/50 hover:text-[#C39E6B]'
                }`}
              >
                {cat === 'all' ? 'Tutti' : cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredPortfolio.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => (itemsRef.current[index] = el)}
                id={`item-${item.id}`}
                onClick={() => setSelectedImage(item)}
                className={`group cursor-pointer overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-[#C39E6B]/50 transition-all duration-700 aspect-square relative hover-lift hover-glow ${
                  visibleItems.has(`item-${item.id}`) ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{
                  animationDelay: visibleItems.has(`item-${item.id}`) ? `${index * 0.08}s` : '0s',
                }}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-130 transition-transform duration-1000 group-hover:rotate-1"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-gradient-to-r group-hover:from-[#A41C1C]/20 group-hover:to-transparent transition-all duration-500"></div>

                  {/* Info Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="font-bold text-lg text-white">{item.title}</p>
                    <p className="text-sm text-[#C39E6B] uppercase tracking-wider">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal - Immagine Ingrandita */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/98 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] animate-scale-in flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Immagine */}
            <div className="relative flex-1 overflow-hidden bg-black border border-[#C39E6B]/30 rounded-lg">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 border-2 border-[#C39E6B]/20 pointer-events-none"></div>
            </div>

            {/* Info */}
            <div className="bg-black border-l border-r border-b border-[#C39E6B]/30 p-8 space-y-4">
              <h3 className="text-3xl md:text-4xl font-light gradient-text">{selectedImage.title}</h3>
              <p className="text-gray-400 text-lg">{selectedImage.description}</p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {selectedImage.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-[#C39E6B]/10 border border-[#C39E6B]/30 text-xs uppercase tracking-wider text-[#C39E6B] hover:bg-[#C39E6B]/20 transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 md:-top-16 md:right-0 text-white text-4xl hover:text-[#C39E6B] transition font-light"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}