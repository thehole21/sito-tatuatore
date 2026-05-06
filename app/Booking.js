'use client';

import { useState } from 'react';
import Script from 'next/script';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    tattooDescription: '',
    preferences: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Qui puoi aggiungere logica per inviare il form
    // Per ora: mostra messaggio di successo
    console.log('Form:', formData);
    setSubmitted(true);
    
    // Reset dopo 5 secondi
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredDate: '',
        tattooDescription: '',
        preferences: '',
      });
    }, 5000);
  };

  return (
    <section id="booking" className="bg-black py-24 md:py-40 border-b border-[#C39E6B]/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C39E6B]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20">
          <p className="text-sm font-mono tracking-widest text-[#C39E6B] uppercase mb-4 animate-fade-in-down flex items-center gap-2">
            <span className="w-4 h-0.5 bg-[#C39E6B]"></span>
            Consulenza & Prenotazione
          </p>
          <h2 className="text-5xl md:text-6xl font-light mb-8 animate-fade-in-up accent-line">
            Prenota il Tuo Tatuaggio
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Colonna Sinistra - Info */}
          <div className="space-y-10 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            {/* Studio Info */}
            <div className="glass-gold p-8 border-l-4 border-[#C39E6B]">
              <p className="text-sm uppercase tracking-widest text-[#C39E6B] font-bold mb-3">Studio Principale</p>
              <h3 className="text-2xl font-light mb-3">Caravaggio's Tattoo Atelier</h3>
              <p className="text-gray-400">
                Via di Porta Labicana 56a<br />
                00185 Roma (San Lorenzo)<br />
                Italia
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex gap-4">
                
                  href="https://www.instagram.com/sdrains.tattoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-[#E4405F] hover:scale-125 transition"
                  title="Instagram"
                >
                  📱
                </a>
                
                  href="https://wa.me/+393917634360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-[#25D366] hover:scale-125 transition"
                  title="WhatsApp"
                >
                  💬
                </a>
              </div>
            </div>

            {/* Guest Studio */}
            <div className="glass p-8 border-l-4 border-[#A41C1C]">
              <p className="text-sm uppercase tracking-widest text-[#A41C1C] font-bold mb-3">Guest Tattoo Artist</p>
              <h3 className="text-2xl font-light mb-3">Lakimii Tattoo Bern</h3>
              <p className="text-gray-400">
                Berna, Svizzera<br />
                <span className="text-gray-500 text-sm">Guest periodico</span>
              </p>
            </div>

            {/* Hours */}
            <div>
              <p className="text-sm uppercase tracking-widest text-[#C39E6B] font-bold mb-4">Orari di Apertura</p>
              <div className="space-y-2 text-gray-400">
                <p className="flex justify-between">
                  <span>Lunedì</span>
                  <span className="text-gray-600">Chiuso</span>
                </p>
                <p className="flex justify-between">
                  <span>Martedì - Giovedì</span>
                  <span className="text-[#C39E6B]">14:00 - 21:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Venerdì - Sabato</span>
                  <span className="text-[#C39E6B]">12:00 - 22:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Domenica</span>
                  <span className="text-gray-600">Chiuso</span>
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <p className="text-sm uppercase tracking-widest text-[#C39E6B] font-bold mb-4">Contatti Diretti</p>
              <div className="space-y-3">
                
                  href="https://wa.me/+393917634360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-[#25D366] transition font-semibold flex items-center gap-2"
                >
                  <span>💬</span>
                  <span>+39 391 763 4360 (WhatsApp)</span>
                </a>
                
                  href="https://www.instagram.com/sdrains.tattoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-[#E4405F] transition font-semibold flex items-center gap-2"
                >
                  <span>📱</span>
                  <span>@sdrains.tattoo</span>
                </a>
              </div>
            </div>
          </div>

          {/* Colonna Destra - Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            {/* Nome */}
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-[#C39E6B] mb-3 uppercase tracking-wider">
                Nome Completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-black border border-[#C39E6B]/30 text-white px-4 py-4 focus:border-[#C39E6B] focus:shadow-lg focus:shadow-[#C39E6B]/20"
                placeholder="Lorenzo Rossi"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-[#C39E6B] mb-3 uppercase tracking-wider">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black border border-[#C39E6B]/30 text-white px-4 py-4 focus:border-[#C39E6B] focus:shadow-lg focus:shadow-[#C39E6B]/20"
                placeholder="tua.email@esempio.com"
              />
            </div>

            {/* Telefono */}
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-[#C39E6B] mb-3 uppercase tracking-wider">
                Telefono / WhatsApp
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-black border border-[#C39E6B]/30 text-white px-4 py-4 focus:border-[#C39E6B] focus:shadow-lg focus:shadow-[#C39E6B]/20"
                placeholder="+39 391 234 5678"
              />
            </div>

            {/* Data Preferita */}
            <div>
              <label htmlFor="preferredDate" className="block text-sm font-bold text-[#C39E6B] mb-3 uppercase tracking-wider">
                Data Preferita (indicativa)
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full bg-black border border-[#C39E6B]/30 text-white px-4 py-4 focus:border-[#C39E6B] focus:shadow-lg focus:shadow-[#C39E6B]/20"
              />
            </div>

            {/* Descrizione Tatuaggio */}
            <div>
              <label htmlFor="tattooDescription" className="block text-sm font-bold text-[#C39E6B] mb-3 uppercase tracking-wider">
                Descrizione del Tatuaggio *
              </label>
              <textarea
                id="tattooDescription"
                name="tattooDescription"
                value={formData.tattooDescription}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-black border border-[#C39E6B]/30 text-white px-4 py-4 focus:border-[#C39E6B] focus:shadow-lg focus:shadow-[#C39E6B]/20 resize-none"
                placeholder="Descrivici l'idea del tuo tatuaggio, lo stile, la posizione, etc..."
              ></textarea>
            </div>

            {/* Preferenze */}
            <div>
              <label htmlFor="preferences" className="block text-sm font-bold text-[#C39E6B] mb-3 uppercase tracking-wider">
                Note e Preferenze
              </label>
              <textarea
                id="preferences"
                name="preferences"
                value={formData.preferences}
                onChange={handleChange}
                rows="3"
                className="w-full bg-black border border-[#C39E6B]/30 text-white px-4 py-4 focus:border-[#C39E6B] focus:shadow-lg focus:shadow-[#C39E6B]/20 resize-none"
                placeholder="Eventuali riferimenti, ispirazione, colore preferito, etc..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#C39E6B] to-[#A41C1C] text-black py-4 font-bold text-sm tracking-widest uppercase hover:shadow-lg hover:shadow-[#C39E6B]/40 transition-all duration-300 active:scale-95"
            >
              Invia Richiesta Prenotazione
            </button>

            {/* Success Message */}
            {submitted && (
              <div className="bg-[#C39E6B]/20 border border-[#C39E6B] text-[#C39E6B] px-6 py-4 rounded-lg animate-scale-in">
                <p className="font-semibold">✓ Richiesta inviata con successo!</p>
                <p className="text-sm mt-2">Ti contatterò al più presto per confermare la data.</p>
              </div>
            )}

            {/* Info Note */}
            <p className="text-xs text-gray-500 text-center">
              * Campi obbligatori. Riceverai una conferma via email o WhatsApp.
            </p>
          </form>
        </div>

        {/* Calendly Integration (Optional) */}
        <div className="mt-20 pt-20 border-t border-[#C39E6B]/20">
          <p className="text-sm font-mono tracking-widest text-[#C39E6B] uppercase mb-8 text-center">
            ✦ Oppure prenota direttamente via Calendly
          </p>
          <div className="glass-gold p-8 rounded-lg">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/sdrains/consulenza?hide_event_type_details=1&hide_gdpr_banner=1"
              style={{ minWidth: "320px", height: "630px" }}
            ></div>
            <Script src="https://assets.calendly.com/assets/external/widget.js" async />
          </div>
        </div>
      </div>
    </section>
  );
}