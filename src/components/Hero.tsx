import React from 'react';
import { Plane, Compass, Map, ShieldCheck, Heart } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section id="hero-root" className="relative bg-slate-950 overflow-hidden py-24 sm:py-32">
      {/* Decorative ambient background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=1600&auto=format&fit=crop&q=70"
          alt="Beautiful Kyrgyzstan Pamir Mountains"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-overlay filter brightness-75 scale-105 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-950"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Compass className="w-3.5 h-3.5 text-orange-450" />
            <span>{t('hero_badge')}</span>
          </div>

          {/* Main display typography */}
          <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl md:text-6xl tracking-tight leading-none mb-6">
            {t('hero_title_1')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500">{t('hero_title_gradient')}</span>{t('hero_title_2')}
          </h1>

          <p className="text-slate-300 text-lg md:text-xl font-light mb-10 leading-relaxed">
            {t('hero_subtitle')}
          </p>

          {/* Key capability cards (quick visual grid inside Hero) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            <div className="bg-white/5 backdrop-blur-xs border border-white/10 rounded-xl p-3.5 hover:bg-white/10 transition-colors">
              <span className="text-xl font-bold text-orange-400 font-mono">100%</span>
              <p className="text-xs text-slate-300 mt-1 font-medium">{t('stat_flights')}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xs border border-white/10 rounded-xl p-3.5 hover:bg-white/10 transition-colors">
              <span className="text-xl font-bold text-orange-450 font-mono">05+</span>
              <p className="text-xs text-slate-300 mt-1 font-medium">{t('stat_resorts')}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xs border border-white/10 rounded-xl p-3.5 hover:bg-white/10 transition-colors">
              <span className="text-xl font-bold text-amber-500 font-mono">12+</span>
              <p className="text-xs text-slate-300 mt-1 font-medium">{t('stat_tours')}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xs border border-white/10 rounded-xl p-3.5 hover:bg-white/10 transition-colors">
              <span className="text-xl font-bold text-amber-400 font-mono">24/7</span>
              <p className="text-xs text-slate-300 mt-1 font-medium">{t('stat_support')}</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
               onClick={() => onNavigate('booking-form')}
               className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-orange-950/20 hover:shadow-orange-950/40 hover:scale-101 active:scale-99 transition-all cursor-pointer text-center text-sm"
             >
               {t('btn_book_vacation')}
             </button>
             <button
               onClick={() => onNavigate('tickets')}
               className="bg-slate-900 border border-slate-700 hover:border-slate-600 hover:bg-slate-800 text-white font-medium px-8 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
             >
               <Plane className="w-4 h-4 text-orange-500" />
               <span>{t('btn_search_flights')}</span>
             </button>
             <button
               onClick={() => onNavigate('domestic')}
               className="bg-transparent text-slate-300 hover:text-white font-medium px-4 py-2.5 rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer hover:bg-white/5 text-sm"
             >
               <Map className="w-4 h-4 text-orange-400" />
               <span>{t('nav_domestic')}</span>
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}

