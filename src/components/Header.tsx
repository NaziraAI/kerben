import React, { useState } from 'react';
import { Phone, Mail, Clock, Menu, X, Globe, User, ShieldCheck, Instagram } from 'lucide-react';
import { contactsData } from '../data';
import { useLanguage } from '../LanguageContext';

interface HeaderProps {
  onNavigate: (section: string) => void;
  activeSection: string;
  onOpenAdmin: () => void;
}

export default function Header({ onNavigate, activeSection, onOpenAdmin }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, languages, t } = useLanguage();
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const navItems = [
    { id: 'tickets', label: t('nav_tickets') },
    { id: 'about-services', label: t('nav_about_services') },
    { id: 'international', label: t('nav_international') },
    { id: 'domestic', label: t('nav_domestic') },
    { id: 'incoming', label: t('nav_incoming') },
    { id: 'activities', label: t('nav_activities') },
  ];

  const LanguageSelector = () => (
    <div className="relative inline-block text-left">
      <button 
        onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-all duration-150 cursor-pointer border border-slate-205"
      >
        <span className="text-base leading-none">
          {languages.find(l => l.code === language)?.flag}
        </span>
        <span className="uppercase font-bold tracking-wider">
          {languages.find(l => l.code === language)?.code}
        </span>
        <Globe className="w-3.5 h-3.5 text-slate-500 shrink-0" />
      </button>
      
      {isLangDropdownOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsLangDropdownOpen(false)}></div>
          <div className="absolute right-0 mt-2 w-44 bg-white border border-slate-200/90 rounded-xl shadow-xl py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-100 font-sans">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsLangDropdownOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-2 text-sm text-slate-700 text-left hover:bg-slate-50 hover:text-orange-600 transition-colors cursor-pointer ${
                  language === lang.code ? 'font-bold text-orange-600 bg-orange-50/50' : ''
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-base leading-none">{lang.flag}</span>
                  <span>{lang.name}</span>
                </span>
                {language === lang.code && <span className="text-orange-500 text-xs">✓</span>}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );

  return (
    <header id="header-root" className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Contact Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 animate-fadeIn">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={`tel:${contactsData.phone1.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-orange-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-orange-500" />
              <span className="font-mono font-medium">{contactsData.phone1}</span>
            </a>
            <a href={`tel:${contactsData.phone2.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-orange-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-orange-500" />
              <span className="font-mono font-medium">{contactsData.phone2}</span>
            </a>
            <a href={`mailto:${contactsData.email}`} className="flex items-center gap-1.5 hover:text-orange-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-orange-500" />
              <span className="font-medium">{contactsData.email}</span>
            </a>
            <a href={contactsData.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-orange-400 transition-colors" title="Instagram">
              <Instagram className="w-3.5 h-3.5 text-orange-500" />
              <span className="font-medium">Instagram</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5" />
              <span>{t('footer_hours_delivery')}</span>
            </span>
            <button 
              onClick={onOpenAdmin}
              className="flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors cursor-pointer py-0.5 px-2 bg-slate-800 rounded-md hover:bg-slate-700"
              title="Кабинет Администратора"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t('admin_panel')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main NavBar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo Branding */}
        <div 
          onClick={() => onNavigate('hero')} 
          className="flex items-center gap-2.5 cursor-pointer select-none group"
        >
          <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center shadow-md shadow-orange-100 group-hover:scale-105 transition-transform duration-300">
            {/* Elegant Caravan SVG */}
            <svg 
              className="w-6 h-6 text-white" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
              <path d="M9 14h6" />
              <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12a10 10 0 0 1 10-10Z" />
              <path d="M8 11.5l3-3.5 1.5 1.5 3.5-4 2 2.5" />
            </svg>
          </div>
          <div>
            <div className="flex items-baseline gap-1">
              <span className="font-display font-extrabold text-xl md:text-2xl tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
                KERBEN
              </span>
              <span className="font-display font-medium text-orange-500 tracking-wider text-xs uppercase">
                TRAVEL
              </span>
            </div>
            <p className="text-[10px] text-slate-400 tracking-widest uppercase font-mono font-semibold">
              www.kerbentravel.kg
            </p>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1.5">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                    activeSection === item.id
                      ? 'bg-orange-50 text-orange-600 font-semibold border-b-2 border-orange-500 rounded-b-none'
                      : 'text-slate-600 hover:text-orange-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA - Book now button and Lang Selector */}
        <div className="hidden lg:flex items-center gap-3">
          <LanguageSelector />
          <button
            onClick={() => onNavigate('booking-form')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm py-2.5 px-5 rounded-lg shadow-md hover:shadow-orange-100 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            {t('book_now')}
          </button>
        </div>

        {/* Mobile language & Drawer toggle buttons */}
        <div className="flex lg:hidden items-center gap-2">
          <LanguageSelector />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-slate-600 hover:text-orange-600 hover:bg-slate-50 rounded-lg cursor-pointer"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {isMenuOpen && (
        <div className="lg:hidden w-full bg-white border-t border-slate-100 py-4 px-4 shadow-inner animate-in fade-in slide-in-from-top-4 duration-200">
          <ul className="flex flex-col gap-2 mb-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-base font-medium rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-orange-50 text-orange-600 font-bold border-l-4 border-orange-500'
                      : 'text-slate-700 hover:text-orange-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  onOpenAdmin();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2.5 text-base font-medium rounded-lg text-slate-700 hover:text-orange-600 hover:bg-slate-50 flex items-center gap-2"
              >
                <ShieldCheck className="w-5 h-5 text-orange-500" />
                <span>{t('admin_panel')}</span>
              </button>
            </li>
          </ul>
          <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
            <button
              onClick={() => {
                onNavigate('booking-form');
                setIsMenuOpen(false);
              }}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium text-center py-2.5 rounded-lg active:scale-98 cursor-pointer"
            >
              {t('btn_book_tour')}
            </button>
            <div className="py-2 flex flex-col gap-1.5 text-xs text-slate-500 text-center font-mono bg-slate-50 rounded-lg">
              <span>{contactsData.phone1}</span>
              <span>{contactsData.phone2}</span>
              <span>{contactsData.email}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

