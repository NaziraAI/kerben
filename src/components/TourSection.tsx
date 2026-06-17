import React, { useState } from 'react';
import { Star, Clock, Tag, ArrowRight, Layers, MapPin, Search } from 'lucide-react';
import { toursData } from '../data';
import { useLanguage } from '../LanguageContext';
import { Tour } from '../types';

interface TourSectionProps {
  onSelectTour: (tourName: string) => void;
}

export default function TourSection({ onSelectTour }: TourSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'international' | 'domestic'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { t, getTourTranslation } = useLanguage();

  const filteredTours = toursData.filter((tour) => {
    const localized = getTourTranslation(tour.id, tour.title, tour.destination, tour.description, tour.highlights, tour.tags);
    const matchesCategory = activeCategory === 'all' || tour.category === activeCategory;
    const matchesSearch = 
      localized.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      localized.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      localized.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="international" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <span className="text-orange-600 text-xs font-bold uppercase tracking-wider bg-orange-50 px-3 py-1.5 border border-orange-100/50 rounded-full inline-flex items-center gap-1">
              <Layers className="w-3 h-3 text-orange-500" />
              {t('tour_catalog')}
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 mt-3 tracking-tight">
              {t('tour_destinations_title')}
            </h2>
            <p className="text-slate-500 mt-2 max-w-xl text-sm leading-relaxed">
              {t('tour_catalog_desc')}
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={t('placeholder_tour_search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-9 pr-4 text-sm font-medium text-slate-700 placeholder-slate-400 focus:outline-hidden focus:border-orange-500"
            />
          </div>
        </div>

        {/* Tab Filter buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-slate-100 pb-6">
          <button
            onClick={() => setActiveCategory('all')}
            className={`cursor-pointer px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-105'
                : 'bg-slate-50 text-slate-600 hover:bg-orange-50 hover:text-orange-600'
            }`}
          >
            {t('filter_all')}
          </button>
          <button
            onClick={() => setActiveCategory('international')}
            className={`cursor-pointer px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              activeCategory === 'international'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-105'
                : 'bg-slate-50 text-slate-600 hover:bg-orange-50 hover:text-orange-600'
            }`}
          >
            {t('filter_international')}
          </button>
          <button
            onClick={() => setActiveCategory('domestic')}
            className={`cursor-pointer px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              activeCategory === 'domestic'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-105'
                : 'bg-slate-50 text-slate-600 hover:bg-orange-50 hover:text-orange-600'
            }`}
          >
            {t('filter_domestic')}
          </button>
        </div>

        {/* Tour Grid */}
        {filteredTours.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-500 font-medium">{t('no_tours_found')}</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-4 text-orange-600 text-xs font-bold underline cursor-pointer"
            >
              {t('reset_filters')}
            </button>
          </div>
        ) : (
          <div id="tour-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => {
              const localized = getTourTranslation(tour.id, tour.title, tour.destination, tour.description, tour.highlights, tour.tags);
              return (
                <article 
                  key={tour.id} 
                  className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-orange-100/60 transition-all duration-300 flex flex-col group animate-fadeIn"
                >
                  {/* Tour Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={localized.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent"></div>
                    
                    {/* Category Pill Tag */}
                    <span className={`absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md text-white shadow-md ${
                      tour.category === 'international' ? 'bg-orange-600' : 'bg-emerald-600'
                    }`}>
                      {tour.category === 'international' ? t('tag_abroad') : t('tag_kg')}
                    </span>

                    {/* Rating Label */}
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-xs py-1 px-2.5 rounded-lg flex items-center gap-1 shadow-sm">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="text-xs font-bold text-slate-800 font-mono">{tour.rating}</span>
                    </div>
                  </div>

                  {/* Tour Body */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-1.5 text-xs text-orange-500 font-semibold mb-2.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{localized.destination}</span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-slate-900 line-clamp-1 group-hover:text-orange-600 transition-colors">
                      {localized.title}
                    </h3>

                    <p className="text-slate-500 text-sm mt-3 line-clamp-3 leading-relaxed">
                      {localized.description}
                    </p>

                    {/* Highlights Bulleting */}
                    <div className="mt-5 space-y-1.5 flex-1">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t('what_awaits')}</p>
                      {localized.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                          <span className="text-orange-500 font-bold mt-0.5">•</span>
                          <span className="line-clamp-1">{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Pricing footer of the Card */}
                    <div className="flex items-center justify-between pt-5 mt-5 border-t border-slate-100">
                      <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                        <Clock className="w-4 h-4 text-slate-400" />
                        <span className="font-medium">{tour.duration}</span>
                      </div>

                      <div className="text-right">
                        <p className="text-[10px] text-slate-400 font-medium">{t('price_starts_from')}</p>
                        <span className="text-lg font-extrabold text-orange-600 font-mono tracking-tight">{tour.price}</span>
                      </div>
                    </div>

                    {/* Trigger to book */}
                    <button
                      onClick={() => onSelectTour(localized.title)}
                      className="w-full mt-5 bg-slate-50 hover:bg-orange-600 hover:text-white text-orange-600 font-semibold text-xs uppercase tracking-wider py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer transform group-hover:bg-orange-50/50 group-hover:text-orange-700 font-sans"
                    >
                      <span>{t('btn_book_tour')}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

