'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    {
      icon: '📱',
      href: 'https://www.instagram.com/sdrains.tattoo',
      label: 'Instagram',
      color: 'text-[#E4405F]',
    },
    {
      icon: '💬',
      href: 'https://wa.me/+393917634360',
      label: 'WhatsApp',
      color: 'text-[#25D366]',
    },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'bg-transparent border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-8 bg-gradient-to-b from-[#C39E6B] to-[#A41C1C]"></div>
          <h1 className="text-2xl font-bold tracking-widest hover:text-[#C39E6B] transition duration-300">
            SDRAINS
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {['Gallery', 'About', 'Booking', 'Contatti'].map((item, i) => (
            
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-semibold text-gray-300 hover:text-[#C39E6B] transition relative group uppercase tracking-wider"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C39E6B] to-[#A41C1C] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center gap-6">
          {socialLinks.map((social) => (
            
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl hover-lift transition-all duration-300 ${social.color} hover:scale-125`}
              title={social.label}
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white relative w-8 h-8 flex flex-col justify-around"
          aria-label="Menu"
        >
          <span
            className={`block w-full h-0.5 bg-[#C39E6B] transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`block w-full h-0.5 bg-[#C39E6B] transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`block w-full h-0.5 bg-[#C39E6B] transition-all duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-[#C39E6B]/30 py-6 px-6 space-y-4 animate-fade-in-down">
          {['Gallery', 'About', 'Booking', 'Contatti'].map((item) => (
            
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-300 hover:text-[#C39E6B] transition font-semibold uppercase tracking-wider text-sm"
            >
              {item}
            </a>
          ))}
          <div className="border-t border-white/10 pt-4 flex gap-4">
            {socialLinks.map((social) => (
              
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl ${social.color}`}
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}