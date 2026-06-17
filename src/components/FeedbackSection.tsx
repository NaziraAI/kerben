import React from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { testimonialsData } from '../data';
import { useLanguage } from '../LanguageContext';

export default function FeedbackSection() {
  const { t } = useLanguage();

  return (
    <section id="feedback-root" className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header content */}
        <div className="text-center max-w-2xl mx-auto mb-16 select-none animate-fadeIn">
          <span className="text-orange-600 text-xs font-bold uppercase tracking-wider bg-orange-50 px-3 py-1.5 border border-orange-100/30 rounded-full inline-flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-orange-500" />
            {t('feedback_badge')}
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 mt-4 tracking-tight">
            {t('feedback_title')}
          </h2>
          <p className="text-slate-500 mt-2 text-sm sm:text-base">
            {t('feedback_desc')}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((test) => (
            <div 
              key={test.id} 
              className="bg-white border border-slate-100 p-6 rounded-2xl shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-600 italic text-sm leading-relaxed mb-6">
                  &ldquo;{t('test_' + test.id + '_text')}&rdquo;
                </p>
              </div>

              {/* Author widget */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img
                  src={test.avatar}
                  alt={test.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">{t('test_' + test.id + '_name')}</h4>
                  <p className="text-[10px] text-slate-400 font-medium">{t('dest_other').split(' (')[0]}: <span className="text-orange-600 font-semibold">{t('test_' + test.id + '_tourName')}</span> — {test.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

