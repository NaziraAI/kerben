import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  Language, 
  LanguageDef, 
  languagesList, 
  staticTranslations, 
  toursTranslations, 
  activitiesTranslations 
} from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  languages: LanguageDef[];
  isRtl: boolean;
  t: (key: string) => string;
  getTourTranslation: (tourId: string, defaultTitle: string, defaultDest: string, defaultDesc: string, defaultHighlights: string[], defaultTags: string[]) => {
    title: string;
    destination: string;
    description: string;
    highlights: string[];
    tags: string[];
  };
  getActivityTranslation: (activityId: string, defaultTitle: string, defaultDesc: string, defaultDuration: string, defaultIntensity: string, defaultPrice: string) => {
    title: string;
    description: string;
    duration: string;
    intensity: string;
    price: string;
  };
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('kb_travel_lang');
    if (saved && ['ky', 'ru', 'tr', 'en', 'de', 'fr', 'ar'].includes(saved)) {
      return saved as Language;
    }
    return 'ru'; // default to Russian
  });

  const activeLangConfig = languagesList.find(l => l.code === language);
  const isRtl = activeLangConfig ? !!activeLangConfig.isRtl : false;

  useEffect(() => {
    // Save to local storage
    localStorage.setItem('kb_travel_lang', language);
    
    // Manage document layout direction for RTL languages like Arabic
    const htmlEl = document.documentElement;
    if (isRtl) {
      htmlEl.dir = 'rtl';
      htmlEl.lang = language;
      htmlEl.classList.add('rtl-active');
    } else {
      htmlEl.dir = 'ltr';
      htmlEl.lang = language;
      htmlEl.classList.remove('rtl-active');
    }
  }, [language, isRtl]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    const term = staticTranslations[key];
    if (!term) {
      return key;
    }
    return term[language] || term['ru'] || key;
  };

  const getTourTranslation = (
    tourId: string, 
    defaultTitle: string, 
    defaultDest: string, 
    defaultDesc: string, 
    defaultHighlights: string[], 
    defaultTags: string[]
  ) => {
    const entry = toursTranslations[tourId];
    if (!entry) {
      return {
        title: defaultTitle,
        destination: defaultDest,
        description: defaultDesc,
        highlights: defaultHighlights,
        tags: defaultTags
      };
    }
    const localized = entry[language] || entry['ru'];
    return {
      title: localized.title || defaultTitle,
      destination: localized.destination || defaultDest,
      description: localized.description || defaultDesc,
      highlights: localized.highlights || defaultHighlights,
      tags: localized.tags || defaultTags
    };
  };

  const getActivityTranslation = (
    activityId: string, 
    defaultTitle: string, 
    defaultDesc: string, 
    defaultDuration: string, 
    defaultIntensity: string, 
    defaultPrice: string
  ) => {
    const entry = activitiesTranslations[activityId];
    if (!entry) {
      return {
        title: defaultTitle,
        description: defaultDesc,
        duration: defaultDuration,
        intensity: defaultIntensity,
        price: defaultPrice
      };
    }
    const localized = entry[language] || entry['ru'];
    return {
      title: localized.title || defaultTitle,
      description: localized.description || defaultDesc,
      duration: localized.duration || defaultDuration,
      intensity: localized.intensity || defaultIntensity,
      price: localized.price || defaultPrice
    };
  };

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      languages: languagesList,
      isRtl,
      t,
      getTourTranslation,
      getActivityTranslation
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
