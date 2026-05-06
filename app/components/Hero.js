'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();

      const x = (clientX - left - width / 2) / 60;
      const y = (clientY - top - height / 2) / 60;

      if (titleRef.current) {
        titleRef.current.style.transform = `perspective(1200px) rotateX(${y}deg) rotateY(${x}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="bg-black pt-40 pb-40 md:pt-56 md:pb-56 border-b border-[#C39E6B]/20 min-h-screen flex items-center justify-center overflow-hidden relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-5 w-96 h-96 bg-[#A41C1C]/10 rounded-full blur-3xl animate-pulse-gold"></div>
        <div className="absolute bottom-10 right-5 w-96 h-96 bg-[#C39E6B]/5 rounded-full blur-3xl animate-pulse-gold" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#C39E6B] to-transparent animate-fade-in-down"></div>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#A41C1C] to-transparent animate-fade-in-up"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="text-center space-y-8 md:space-y-12">
          {/* Overline */}
          <div className="animate-fade-in-down" style={{ animationDelay: '0.1s' }}>
            <p className="text-sm font-mono tracking-widest text-[#C39E6B] uppercase flex items-center justify-center gap-3">
              <span className="w-8 h-0.5 bg-gradient-to-r from-[#C39E6B] to-transparent"></span>
              Caravaggio's Tattoo Atelier
              <span className="w-8 h-0.5 bg-gradient-to-l from-[#C39E6B] to-transparent"></span>
            </p>
          </div>

          {/* Main Title */}
          <div
            ref={titleRef}
            className="animate-scale-in"
            style={{ animationDelay: '0.2s' }}
          >
            <h1 className="text-7xl md:text-9xl font-light italic tracking-tighter leading-none gradient-text">
              SDRAINS
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg md:text-2xl text-gray-400 font-light">
              Tattoo Artist • Custom Design • San Lorenzo, Roma
            </p>
          </div>

          {/* Info Card */}
          <div
            className="animate-fade-in-up glass-gold max-w-2xl mx-auto p-6 md:p-8 border-l-4 border-[#C39E6B]"
            style={{ animationDelay: '0.5s' }}
          >
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              Lorenzo Semprini - <span className="text-[#C39E6B] font-semibold">SDRAINS</span>
              <br />
              <span className="text-gray-500">Resident @ Caravaggio's Tattoo Atelier</span>
              <br />
              <span className="text-gray-500">Guest @ Lakimii Tattoo Bern</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <button
              onClick={() => scrollToSection('gallery')}
              className="px-10 md:px-16 py-4 md:py-6 bg-gradient-to-r from-[#C39E6B] to-[#A41C1C] text-black font-bold text-sm tracking-widest hover:shadow-lg hover:shadow-[#C39E6B]/30 hover:scale-105 active:scale-95 relative overflow-hidden group"
            >
              <span className="relative z-10">Vedi Portfolio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#A41C1C] to-[#C39E6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="px-10 md:px-16 py-4 md:py-6 border-2 border-[#C39E6B] text-[#C39E6B] font-bold text-sm tracking-widest hover:bg-[#C39E6B] hover:text-black hover:shadow-lg hover:shadow-[#C39E6B]/30 transition duration-300 hover:scale-105 active:scale-95"
            >
              Prenota Ora
            </button>
          </div>

          {/* Scroll Indicator */}
          <div
            className="pt-12 md:pt-20 animate-fade-in-up"
            style={{ animationDelay: '0.7s' }}
          >
            <div className="flex justify-center">
              <div className="animate-bounce">
                <svg
                  className="w-6 h-6 text-[#C39E6B]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}