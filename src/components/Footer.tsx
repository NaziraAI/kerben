import React from 'react';
import { Phone, Mail, MapPin, Clock, Globe, ArrowUpRight, Compass, ShieldCheck, Instagram } from 'lucide-react';
import { contactsData } from '../data';
import { useLanguage } from '../LanguageContext';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenAdmin: () => void;
}

export default function Footer({ onNavigate, onOpenAdmin }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();

  // Localized addresses based on user language preference
  const getBishkekAddress = () => {
    switch (language) {
      case 'ky': return 'Бишкек ш., Чүй проспектиси 128/2';
      case 'tr': return 'Bişkek, Çuy Caddesi 128/2';
      case 'en': return '128/2 Chuy Avenue, Bishkek';
      case 'de': return 'Chuy-Avenue 128/2, Bischkek';
      case 'fr': return '128/2 Avenue de Chuy, Bichkek';
      case 'ar': return '١٢٨/٢ شارع تشوي، بيشكيك';
      default: return 'г. Бишкек, проспект Чуй 128/2';
    }
  };

  const getTalasAddress = () => {
    switch (language) {
      case 'ky': return 'Талас ш., Сарыгулов көчөсү 63/2';
      case 'tr': return 'Talas, Sarıgulov Sokak 63/2';
      case 'en': return '63/2 Sarygulov Street, Talas';
      case 'de': return 'Sarygulov-Straße 63/2, Talas';
      case 'fr': return '63/2 Rue de Sarygulov, Talas';
      case 'ar': return '٦٣/٢ شارع ساريغولوف، طلاس';
      default: return 'г. Талас, улица Сарыгулова 63/2';
    }
  };

  const getDeveloperText = () => {
    switch (language) {
      case 'ky': return 'Сайт техникалык тапшырмага ылайык иштелип чыккан.';
      case 'tr': return 'Web sitesi teknik şartnameye uygun olarak geliştirilmiştir.';
      case 'en': return 'Website developed in accordance with specifications.';
      case 'de': return 'Website gemäß den technischen Spezifikationen entwickelt.';
      case 'fr': return 'Site Web développé conformément aux spécifications.';
      case 'ar': return 'تم تصميم الموقع وفقاً للمواصفات الفنية والشروط المطلوبة.';
      default: return 'Сайт разработан в соответствии с техническим заданием.';
    }
  };

  const getAdminPanelText = () => {
    switch (language) {
      case 'ky': return 'Администратор панели';
      case 'tr': return 'Yönetici Paneli';
      case 'en': return 'Admin Dashboard';
      case 'de': return 'Admin-Bereich';
      case 'fr': return 'Panneau d\'Administration';
      case 'ar': return 'لوحة تحكم المشرف';
      default: return 'Панель Администратора';
    }
  };

  return (
    <footer id="footer-root" className="bg-slate-950 text-slate-400 py-16 border-t border-slate-905">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Top footer row with brand and contact columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white font-black text-sm">
                K
              </div>
              <span className="font-display font-extrabold text-white text-lg tracking-wider">
                KERBEN TRAVEL
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              {t('footer_brand_desc')}
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a 
                href={contactsData.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800/80 flex items-center justify-center text-slate-400 hover:text-orange-500 hover:border-orange-500/40 hover:bg-slate-850 transition-all"
                title="Instagram: @kerbentravel.kg"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            <div className="pt-2 text-[10px] text-slate-500 font-mono select-none">
              ИНН: 01402201810234
              <br />
              Лицензия туроператора №00341
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 border-l-2 border-orange-500 pl-2">{t('footer_links_quick')}</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('tickets')} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                  {t('nav_tickets')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about-services')} className="hover:text-orange-400 font-semibold transition-colors cursor-pointer text-left">
                  {t('nav_about_services')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('international')} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                  {t('nav_international')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('domestic')} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                  {t('nav_domestic')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('incoming')} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                  {t('nav_incoming')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('activities')} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                  {t('nav_activities')}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Fixed Contact Information */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 border-l-2 border-orange-500 pl-2">{t('footer_contacts')}</h4>
            <ul className="space-y-3.5 text-xs">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div className="font-mono">
                  <a href={`tel:${contactsData.phone1.replace(/\s+/g, '')}`} className="text-slate-300 hover:text-orange-350 block">{contactsData.phone1}</a>
                  <a href={`tel:${contactsData.phone2.replace(/\s+/g, '')}`} className="text-slate-300 hover:text-orange-350 block">{contactsData.phone2}</a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <a href={`mailto:${contactsData.email}`} className="text-slate-300 hover:text-orange-355 font-mono">{contactsData.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-orange-400 shrink-0" />
                <a href={contactsData.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-orange-355 transition-colors font-mono">
                  Instagram: kerbentravel.kg
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <Clock className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>{t('footer_hours_delivery')}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Address Map Visual */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider border-l-2 border-orange-500 pl-2">{t('footer_offices')}</h4>
            <div className="space-y-3.5">
              {/* Bishkek Office */}
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                  <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block text-[11px]">{t('office_bishkek')}</span>
                    <span>{getBishkekAddress()}</span>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-850 bg-slate-900/60 p-2.5 flex items-center justify-between shadow-inner">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-orange-500/10 flex items-center justify-center text-orange-400 font-bold text-[11px]">
                      📍
                    </div>
                    <div>
                      <p className="text-[10px] text-white font-semibold leading-tight">{language === 'ar' ? 'بيشكيك، شارع تشوي ١٢٨/٢' : 'Бишкек, пр. Чуй 128/2'}</p>
                    </div>
                  </div>
                  <a
                    href="https://2gis.kg/bishkek"
                    target="_blank"
                    rel="noreferrer"
                    className="text-orange-400 hover:text-orange-350 text-[10px] font-bold flex items-center gap-0.5"
                    title="2GIS Map"
                  >
                    <span>2ГИС</span>
                    <ArrowUpRight className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

              {/* Talas Office */}
              <div className="space-y-2 pt-2 border-t border-slate-900/40">
                <div className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                  <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block text-[11px]">{t('office_talas')}</span>
                    <span>{getTalasAddress()}</span>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-850 bg-slate-900/60 p-2.5 flex items-center justify-between shadow-inner">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-orange-500/10 flex items-center justify-center text-orange-400 font-bold text-[11px]">
                      📍
                    </div>
                    <div>
                      <p className="text-[10px] text-white font-semibold leading-tight">{language === 'ar' ? 'طلاس، شارع ساريغولوف ٦٣/٢' : 'Талас, Сарыгулова 63/2'}</p>
                    </div>
                  </div>
                  <a
                    href="https://2gis.kg/talas"
                    target="_blank"
                    rel="noreferrer"
                    className="text-orange-400 hover:text-orange-350 text-[10px] font-bold flex items-center gap-0.5"
                    title="2GIS Map"
                  >
                    <span>2ГИС</span>
                    <ArrowUpRight className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-slate-600">
            &copy; {currentYear} ТА «Kerben Travel» ({contactsData.website}). {t('footer_all_rights')}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-slate-500 text-[10px] font-mono">
              {getDeveloperText()}
            </span>
            <button
              onClick={onOpenAdmin}
              className="text-slate-500 hover:text-orange-400 text-xs flex items-center gap-1 font-medium capitalize cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{getAdminPanelText()}</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
