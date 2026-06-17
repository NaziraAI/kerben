import React, { useState } from 'react';
import { Compass, Users, Languages, Star, Milestone, Coffee, Check, Landmark, ArrowUpRight } from 'lucide-react';
import { activitiesData } from '../data';
import { useLanguage } from '../LanguageContext';

interface IncomingSectionProps {
  onSelectActivity: (activityTitle: string) => void;
}

export default function IncomingSection({ onSelectActivity }: IncomingSectionProps) {
  const [selectedPlanDetails, setSelectedPlanDetails] = useState<string | null>(null);
  const { t, getActivityTranslation } = useLanguage();

  const keyGuarantees = [
    {
      title: t('guar_lang_title'),
      desc: t('guar_lang_desc'),
      icon: Languages,
    },
    {
      title: t('guar_groups_title'),
      desc: t('guar_groups_desc'),
      icon: Users,
    },
    {
      title: t('guar_transport_title'),
      desc: t('guar_transport_desc'),
      icon: Milestone,
    },
    {
      title: t('guar_pension_title'),
      desc: t('guar_pension_desc'),
      icon: Coffee,
    }
  ];

  return (
    <section id="incoming" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Dynamic graphic accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header content describing Welcome to Kyrgyzstan for foreign groups */}
        <div className="max-w-3xl mb-16 select-none">
          <span className="text-orange-400 text-xs font-bold uppercase tracking-widest bg-orange-500/10 border border-orange-500/20 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
            <Landmark className="w-3.5 h-3.5 text-orange-400" />
            {t('incoming_tourism_subtitle')}
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-4 tracking-tight">
            {t('incoming_tourism_title')}
          </h2>
          <p className="text-slate-300 mt-3 text-sm sm:text-base leading-relaxed">
            {t('incoming_tourism_desc')}
          </p>
        </div>

        {/* Guarantees list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyGuarantees.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                className="bg-slate-900 border border-slate-800/80 p-6 rounded-2xl hover:bg-slate-850 hover:border-slate-700/65 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4">
                  <IconComponent className="w-5 h-5 text-orange-400" />
                </div>
                <h4 className="font-semibold text-base text-white">{item.title}</h4>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Traditional Activities & Events Section (Кызыктуу мероприятиялар) */}
        <div id="activities" className="border-t border-slate-800/80 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
            <div>
              <span className="text-orange-400 text-xs font-bold uppercase tracking-wider">{t('interesting_activities')}</span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-2">
                {t('traditional_shows_title')}
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                {t('traditional_shows_desc')}
              </p>
            </div>
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activitiesData.map((act) => {
              const localized = getActivityTranslation(act.id, act.title, act.description, act.duration, act.intensity, act.price);
              const isEasy = act.intensity.includes('легкий') || localized.intensity.toLowerCase().includes('easy') || localized.intensity.toLowerCase().includes('легкий');
              const isMedium = act.intensity.includes('средний') || localized.intensity.toLowerCase().includes('medium') || localized.intensity.toLowerCase().includes('орточо');
              
              return (
                <div 
                  key={act.id} 
                  className="bg-slate-900 border border-slate-800/80 hover:border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between hover:bg-slate-850/60 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-850 border border-slate-700/40 text-slate-300">
                        ⌛ {localized.duration}
                      </span>
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm ${
                        isEasy ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                        isMedium ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                        'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                      }`}>
                        {t('intensity_load')}: {localized.intensity}
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-xl text-white mb-2">{localized.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4">{localized.description}</p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 mt-4">
                    <div>
                      <span className="text-[10px] text-slate-500 block uppercase">{t('cost_of_organizing')}</span>
                      <span className="font-mono text-sm font-semibold text-orange-400">{localized.price}</span>
                    </div>

                    <button
                      onClick={() => onSelectActivity(localized.title)}
                      className="bg-orange-500 hover:bg-orange-600 text-white font-medium text-xs uppercase tracking-wider py-2 px-4 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shadow-xs font-sans"
                    >
                      <span>{t('btn_order_group')}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Corporate Package Invitation */}
        <div className="mt-16 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-slate-800/40 border border-slate-800/80 p-8 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl animate-fadeIn">
          <div className="max-w-xl">
            <h4 className="font-display font-bold text-xl text-white">{t('individual_group_title')}</h4>
            <p className="text-slate-300 text-sm mt-2 leading-relaxed">
              {t('individual_group_desc')}
            </p>
          </div>
          <button
            onClick={() => onSelectActivity('Групповой прием гостей под ключ / Incoming Group Package')}
            className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-xl transition-all uppercase text-xs tracking-wider cursor-pointer shadow-lg shadow-orange-500/10 font-sans"
          >
            {t('btn_contact_coordinator')}
          </button>
        </div>

      </div>
    </section>
  );
}

