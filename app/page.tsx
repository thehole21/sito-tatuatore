"use client";
import { useState } from "react";

export default function Home() {
  // Stato per controllare quale sezione è attiva
  const [activeTab, setActiveTab] = useState("home");
  // Stato per controllare se il menu del telefono è aperto o chiuso
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "portfolio", label: "Lavori" },
    { id: "booking", label: "Appuntamento" },
    { id: "contatti", label: "Contatti" },
  ];

  // Le foto del portfolio
  const portfolio = [
    "https://images.unsplash.com/photo-1611501271407-f28c242c5109?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1621360841013-c76831f1a3b5?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550537687-c91072c4792d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1589994160839-163c8efb6cb4?q=80&w=800&auto=format&fit=crop",
  ];

  // Funzione per cambiare pagina
  const handleNavigation = (id: string) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false); // Chiude il menu su mobile dopo aver cliccato
  };

  return (
    <main className="min-h-screen bg-[#050505] text-[#EAEAEA] font-sans selection:bg-white selection:text-black flex flex-col">
      
      {/* NAVBAR (Menu di Navigazione Fissa in Alto) */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo / Nome a sinistra */}
          <div 
            className="text-xl font-serif tracking-[0.2em] uppercase cursor-pointer"
            onClick={() => handleNavigation("home")}
          >
            Nome Studio
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`uppercase text-xs tracking-widest pb-1 transition-all duration-300 relative ${
                  activeTab === item.id ? "text-white" : "text-gray-500 hover:text-white"
                }`}
              >
                {item.label}
                {/* La barretta dinamica che compare sotto la voce attiva */}
                <span 
                  className={`absolute left-0 bottom-0 w-full h-[1px] bg-white transition-transform duration-300 ${
                    activeTab === item.id ? "scale-x-100" : "scale-x-0"
                  }`}
                ></span>
              </button>
            ))}
          </div>

          {/* Pulsante Menu Mobile (Hamburger) */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="space-y-2">
              <span className={`block w-8 h-px bg-white transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
              <span className={`block w-8 h-px bg-white transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`block w-8 h-px bg-white transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* MENU MOBILE FULLSCREEN (Si apre solo su telefono) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050505] flex flex-col items-center justify-center space-y-8 pt-20 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`text-2xl font-serif uppercase tracking-widest transition-colors ${
                activeTab === item.id ? "text-white" : "text-gray-600"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* CORPO DEL SITO (Cambia dinamicamente in base a cosa hai cliccato) */}
      <div className="flex-grow pt-20">
        
        {/* VISTA 1: HOME */}
        {activeTab === "home" && (
          <section className="h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center px-4 relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611501271407-f28c242c5109?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10 grayscale"></div>
            <div className="z-10 flex flex-col items-center">
              <h1 className="text-5xl md:text-7xl font-serif tracking-widest uppercase mb-6 text-white">
                L'Arte Sulla Pelle
              </h1>
              <p className="text-sm md:text-lg tracking-[0.4em] uppercase text-gray-400 mb-12">
                Fine Line & Blackwork Artist
              </p>
              <button 
                onClick={() => handleNavigation("booking")}
                className="border border-white/50 px-10 py-4 uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-white hover:text-black transition-all duration-500"
              >
                Inizia il tuo progetto
              </button>
            </div>
          </section>
        )}

        {/* VISTA 2: PORTFOLIO */}
        {activeTab === "portfolio" && (
          <section className="py-16 px-4 md:px-12 max-w-7xl mx-auto animate-fade-in">
            <h2 className="text-2xl font-serif tracking-widest uppercase mb-12 text-center text-gray-300">
              Lavori Recenti
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {portfolio.map((img, index) => (
                <div key={index} className="aspect-[4/5] overflow-hidden group relative bg-black border border-white/5">
                  <img 
                    src={img} 
                    alt={`Tattoo ${index + 1}`} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* VISTA 3: APPUNTAMENTO (BOOKING) */}
        {activeTab === "booking" && (
          <section className="py-16 px-4 max-w-4xl mx-auto animate-fade-in text-center">
            <h2 className="text-2xl font-serif tracking-widest uppercase mb-6 text-gray-300">
              Prenota la tua sessione
            </h2>
            <p className="text-gray-400 leading-relaxed mb-12 max-w-xl mx-auto font-light text-sm md:text-base">
              Seleziona il giorno e l'orario desiderato nel calendario sottostante. I giorni in grigio non sono disponibili.
            </p>
            {/* Box Calendly */}
            <div className="w-full h-[600px] border border-white/10 flex items-center justify-center bg-[#0a0a0a] rounded-sm">
              <p className="text-gray-600 uppercase tracking-widest text-xs md:text-sm px-6">
                [Qui andrà inserito il codice iframe del calendario di Calendly]
              </p>
            </div>
          </section>
        )}

        {/* VISTA 4: CONTATTI */}
        {activeTab === "contatti" && (
          <section className="py-16 px-4 max-w-4xl mx-auto animate-fade-in text-center">
            <h2 className="text-2xl font-serif tracking-widest uppercase mb-12 text-gray-300">
              Lo Studio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Indirizzo</h3>
                  <p className="text-lg font-serif">Via Roma 123<br/>00100 Roma, Italia</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Contatti</h3>
                  <p className="text-lg font-serif">info@nomestudio.com<br/>+39 333 123 4567</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Orari</h3>
                  <p className="text-lg font-serif">Lun - Ven: 10:00 - 19:00<br/>Sab - Dom: Chiuso</p>
                </div>
              </div>
              {/* Mappa Google Maps Placeholder */}
              <div className="h-[300px] border border-white/10 bg-[#0a0a0a] flex items-center justify-center">
                 <p className="text-gray-600 uppercase tracking-widest text-xs text-center px-4">
                  [Qui andrà la mappa di Google Maps]
                </p>
              </div>
            </div>
          </section>
        )}
      </div>

    </main>
  );
}