import React, { useState } from 'react';
import { 
  Plane, 
  Palmtree, 
  FileText, 
  ShieldCheck, 
  Sparkles, 
  ShoppingBag, 
  Briefcase, 
  Compass, 
  Heart, 
  Crown, 
  Bed, 
  Map, 
  Snowflake, 
  Anchor, 
  MapPin, 
  Phone, 
  Mail, 
  Building,
  CheckCircle2,
  Users2,
  ArrowRight,
  TrendingUp,
  Award
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { contactsData } from '../data';

export default function AboutSection() {
  const { t, language, isRtl } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'global' | 'kg' | 'special'>('all');

  // Let's model the 15 services to make it easily searchable/filterable or simply list them elegently!
  const services = [
    { id: 1, key: 'serv_1', icon: Plane, category: 'global' },
    { id: 2, key: 'serv_2', icon: Palmtree, category: 'global' },
    { id: 3, key: 'serv_3', icon: FileText, category: 'special' },
    { id: 4, key: 'serv_4', icon: ShieldCheck, category: 'special' },
    { id: 5, key: 'serv_5', icon: Plane, category: 'kg' },
    { id: 6, key: 'serv_6', icon: Sparkles, category: 'global' },
    { id: 7, key: 'serv_7', icon: ShoppingBag, category: 'global' },
    { id: 8, key: 'serv_8', icon: SpecialBriefcaseIcon(), category: 'special' },
    { id: 9, key: 'serv_9', icon: Compass, category: 'global' },
    { id: 10, key: 'serv_10', icon: Heart, category: 'special' },
    { id: 11, key: 'serv_11', icon: Crown, category: 'special' },
    { id: 12, key: 'serv_12', icon: Bed, category: 'kg' },
    { id: 13, key: 'serv_13', icon: Map, category: 'kg' },
    { id: 14, key: 'serv_14', icon: Snowflake, category: 'kg' },
    { id: 15, key: 'serv_15', icon: Anchor, category: 'kg' },
  ];

  function SpecialBriefcaseIcon() {
    return Briefcase;
  }

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.category === activeTab);

  const getCategoryLabel = (cat: 'all' | 'global' | 'kg' | 'special') => {
    switch (cat) {
      case 'global':
        return language === 'ky' ? 'Дүйнөлүк саякат' : language === 'en' ? 'Global Travel' : 'Глобальный туризм';
      case 'kg':
        return language === 'ky' ? 'Кыргызстан турлары' : language === 'en' ? 'Kyrgyzstan Tours' : 'Туры по Кыргызстану';
      case 'special':
        return language === 'ky' ? 'Атайын кызматтар' : language === 'en' ? 'Special MICE & VIP' : 'Спец обслуживание & MICE';
      default:
        return language === 'ky' ? 'Бардыгы' : language === 'en' ? 'All Services' : 'Все услуги';
    }
  };

  return (
    <section id="about-services" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* UPPER ROW: Header Badging */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100/50 text-orange-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm animate-pulse">
            <Award className="w-3.5 h-3.5" />
            <span>{t('about_company_badge')}</span>
          </div>
          <h2 className="font-display font-black text-3xl md:text-5xl text-slate-900 tracking-tight leading-none mb-6">
            {t('about_company_title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 font-medium text-base md:text-lg leading-relaxed">
            {t('about_company_tagline')}
          </p>
        </div>

        {/* MIDDLE SECTION: Grid containing Company Mission, Profile & Info card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 items-stretch">
          
          {/* Main Story & Credentials */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed">
              <p className="border-l-4 border-orange-500 pl-4 py-1 bg-orange-50/20 rounded-r-xl">
                {t('about_company_p1')}
              </p>
              <p>
                {t('about_company_p2')}
              </p>
            </div>

            {/* Structured Stats Grid to emphasize establishment in 2013 and structural components */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="bg-white border border-slate-100 rounded-2xl p-4 text-center shadow-xs hover:border-orange-200 transition-all group">
                <span className="block text-2xl md:text-3xl font-black text-orange-500 group-hover:scale-105 transition-transform">
                  2013
                </span>
                <span className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider block mt-1">
                  {language === 'ky' ? 'Негизделген жылы' : language === 'en' ? 'Established Year' : 'Год основания'}
                </span>
              </div>
              <div className="bg-white border border-slate-100 rounded-2xl p-4 text-center shadow-xs hover:border-orange-200 transition-all group">
                <span className="block text-2xl md:text-3xl font-black text-slate-900 group-hover:text-orange-500 transition-colors">
                  2
                </span>
                <span className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider block mt-1">
                  {language === 'ky' ? 'негизги кеңсе' : language === 'en' ? 'Core Offices' : 'Филиала / Офиса'}
                </span>
              </div>
              <div className="bg-white border border-slate-100 rounded-2xl p-4 text-center shadow-xs hover:border-orange-200 transition-all group">
                <span className="block text-2xl md:text-3xl font-black text-slate-900 group-hover:text-orange-500 transition-colors">
                  15
                </span>
                <span className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider block mt-1">
                  {language === 'ky' ? 'кызматтар тизмеси' : language === 'en' ? 'Licensed Services' : 'Лицензий'}
                </span>
              </div>
            </div>

            {/* Operational principles banner */}
            <div className="bg-slate-900 text-slate-100 rounded-3xl p-6 relative overflow-hidden shadow-lg border border-slate-800">
              <div className="absolute right-0 top-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <span className="text-orange-400 font-bold uppercase text-[10px] tracking-widest block mb-1">
                  {t('about_company_spec_label')}
                </span>
                <p className="font-display font-medium text-sm md:text-base leading-relaxed text-slate-200 italic">
                  "{t('about_company_spec_val')}"
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-orange-400 font-bold uppercase tracking-wider">
                  <span>{t('about_company_welcome')}</span>
                  <ArrowRight className="w-3.5 h-3.5 animate-bounce-horizontal" />
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar Highlight Section: Corporate Core Value & B2B Partner notification */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Primary Value Card */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm flex-1 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 mb-6">
                  <Users2 className="w-6 h-6" />
                </div>
                <h3 className="font-display font-extrabold text-xl text-slate-900 mb-3">
                  {t('about_company_value_label')}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {t('about_company_value_val')}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 mt-6 flex items-center gap-2.5 text-xs font-mono text-slate-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>{language === 'ky' ? 'Өнөктөштөргө багытталган' : language === 'en' ? 'B2B Partner Oriented' : 'Ориентировано на партнеров'}</span>
              </div>
            </div>

            {/* Partner Privileges Card */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50/50 border border-orange-100 rounded-3xl p-6 md:p-8 shadow-sm flex-1 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700 mb-6">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="font-display font-extrabold text-xl text-slate-900 mb-3">
                  {t('about_company_partners_notice_label')}
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {t('about_company_partners_notice_val')}
                </p>
              </div>
              <div className="pt-4 mt-6 text-[10px] text-orange-600 font-mono font-bold uppercase tracking-wider">
                💡 {language === 'ky' ? 'Суроолор боюнча дароо жазыңыз' : language === 'en' ? 'Quick contact for B2B requests' : 'Бизнес-запросы круглосуточно'}
              </div>
            </div>

          </div>

        </div>

        {/* LOWER SECTION: Interactive 15 Services Catalog Grid */}
        <div className="mt-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-orange-500 font-bold uppercase text-xs tracking-widest shadow-xs bg-orange-50/60 px-3 py-1 rounded-full">{t('services_badge')}</span>
            <h3 className="font-display font-black text-2xl md:text-4xl text-slate-900 tracking-tight mt-3 mb-4">
              {t('services_title')}
            </h3>
            <p className="text-slate-500 text-sm lg:text-base">
              {t('services_subtitle')}
            </p>
          </div>

          {/* Category Filter tabs to help manage 15 cards with grace */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {(['all', 'global', 'kg', 'special'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === cat
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-100'
                    : 'bg-white text-slate-600 hover:text-orange-600 border border-slate-100 shadow-xs'
                }`}
              >
                {getCategoryLabel(cat)}
              </button>
            ))}
          </div>

          {/* 15 Services Cards Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={service.id} 
                  className="bg-white rounded-3xl p-6.5 border border-slate-100 hover:border-orange-200/60 hover:shadow-lg hover:shadow-slate-100/50 transition-all group duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Badge representing category and number */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-2xl bg-orange-50 group-hover:bg-orange-500 text-orange-500 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-inner">
                        <IconComponent className="w-5.5 h-5.5" />
                      </div>
                      <span className="font-mono text-slate-350 text-xs font-bold leading-none select-none">
                        #{String(service.id).padStart(2, '0')}
                      </span>
                    </div>

                    <h4 className="font-display font-extrabold text-slate-900 text-base md:text-lg mb-2 group-hover:text-orange-600 transition-colors">
                      {t(`${service.key}_title`)}
                    </h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                      {t(`${service.key}_desc`)}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 group-hover:text-orange-500 transition-colors">
                    <span>
                      {service.category === 'kg' 
                        ? (language === 'ky' ? 'КР Ичинде' : language === 'en' ? 'In Kyrgyzstan' : 'По Кыргызстану') 
                        : service.category === 'global' 
                        ? (language === 'ky' ? 'Эл Аралык' : language === 'en' ? 'International' : 'Зарубежный')
                        : (language === 'ky' ? 'Премиум' : language === 'en' ? 'Premium Core' : 'Спец сервис')}
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      {isRtl ? '←' : '→'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Structured Addresses & Connection Subsegment */}
        <div className="mt-24 border-t border-slate-150 pt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Head Office in Bishkek Card */}
          <div className="bg-slate-50/50 rounded-3xl p-6 md:p-8 flex flex-col justify-between border border-slate-100 hover:border-orange-100 transition-all group">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white text-lg font-bold">
                  🏢
                </div>
                <div>
                  <span className="text-[10px] text-orange-600 font-bold uppercase tracking-widest font-mono block">
                    {language === 'ky' ? 'Башкы кеңсе' : language === 'en' ? 'Headquarters' : 'Головной офис'}
                  </span>
                  <h4 className="font-display font-extrabold text-slate-900 text-lg">
                    {language === 'ky' ? 'Бишкек шаары' : language === 'en' ? 'Bishkek City' : 'Город Бишкек'}
                  </h4>
                </div>
              </div>
              
              <ul className="space-y-3.5 text-xs md:text-sm text-slate-600 pt-2">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span className="font-medium text-slate-800">{contactsData.address1}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                  <a href={`tel:${contactsData.phone1.replace(/\s+/g, '')}`} className="font-mono text-slate-800 hover:text-orange-500 font-semibold transition-colors">
                    {contactsData.phone1}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <div className="font-mono text-xs">
                    <a href={`mailto:${contactsData.email}`} className="block text-slate-800 hover:text-orange-500 transition-colors">{contactsData.email}</a>
                    <a href={`mailto:${contactsData.emailBishkek}`} className="block text-slate-400 hover:text-orange-500 transition-colors font-medium">{contactsData.emailBishkek}</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200/40 text-[10px] text-slate-400 font-mono">
              ИНН: 01402201810234 • {language === 'ky' ? 'Чуй пр. бойлой' : 'Проспект Чуй'}
            </div>
          </div>

          {/* Branch Office in Talas Card */}
          <div className="bg-slate-50/50 rounded-3xl p-6 md:p-8 flex flex-col justify-between border border-slate-100 hover:border-orange-100 transition-all group">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white text-lg font-bold">
                  📍
                </div>
                <div>
                  <span className="text-[10px] text-orange-600 font-bold uppercase tracking-widest font-mono block">
                    {language === 'ky' ? 'Филиал кеңсеси' : language === 'en' ? 'Branch Office' : 'Региональный филиал'}
                  </span>
                  <h4 className="font-display font-extrabold text-slate-900 text-lg">
                    {language === 'ky' ? 'Талас шаары' : language === 'en' ? 'Talas City' : 'Город Талас'}
                  </h4>
                </div>
              </div>
              
              <ul className="space-y-3.5 text-xs md:text-sm text-slate-600 pt-2">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span className="font-medium text-slate-800">{contactsData.address2}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                  <a href={`tel:${contactsData.phone2.replace(/\s+/g, '')}`} className="font-mono text-slate-800 hover:text-orange-500 font-semibold transition-colors">
                    {contactsData.phone2}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <div className="font-mono text-xs">
                    <a href={`mailto:${contactsData.emailTalas}`} className="block text-slate-800 hover:text-orange-500 transition-colors">{contactsData.emailTalas}</a>
                    <span className="text-slate-400 font-medium">B2B Talas support</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-200/40 text-[10px] text-slate-400 font-mono">
              {language === 'ky' ? 'Талас облустук филиалы' : 'Таласский областной филиал'}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
