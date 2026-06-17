import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TicketSearch from './components/TicketSearch';
import AboutSection from './components/AboutSection';
import TourSection from './components/TourSection';
import IncomingSection from './components/IncomingSection';
import ReservationForm from './components/ReservationForm';
import FeedbackSection from './components/FeedbackSection';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import { Shield, Sparkles, MessageSquare, Compass, PhoneCall } from 'lucide-react';
import { contactsData } from './data';
import { useLanguage } from './LanguageContext';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [preSelectedDestination, setPreSelectedDestination] = useState('');
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [tickerBookingsCount, setTickerBookingsCount] = useState(2); // Demo count starts at 2
  const { t, isRtl, language } = useLanguage();

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsAdminOpen(false); // Close admin panel if they navigate to generic sections
    
    // Safety timeout to ensure DOM has rendered
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  // High conversion callback when a tour packages is selected
  const handleSelectTour = (tourName: string) => {
    setPreSelectedDestination(tourName);
    handleNavigate('booking-form');
  };

  // Callback to increase simulated booking count in header indicator or panels
  const handleBookingCreated = () => {
    setTickerBookingsCount(prev => prev + 1);
  };

  // Intercept scroll position to update active navbar index
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['tickets', 'about-services', 'international', 'domestic', 'incoming', 'activities', 'booking-form'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // WhatsApp prefilled messages based on language
  const getWhatsAppPrefilledMessage = () => {
    switch (language) {
      case 'ky':
        return 'Саламатсызбы! Мен сиздердин www.kerbentravel.kg сайтыңыздарга кирдим, авиабилеттер жана турлар боюнча маалымат алгым келет.';
      case 'tr':
        return 'Merhaba! www.kerbentravel.kg web sitenizi ziyaret ettim, uçak biletleri ve turlar hakkında bilgi almak istiyorum.';
      case 'en':
        return 'Hello! I visited your website www.kerbentravel.kg and I would like to get a consultation about flight tickets and tours.';
      case 'de':
        return 'Hallo! Ich habe Ihre Website www.kerbentravel.kg besucht und möchte mich über Flugtickets und Reisen beraten lassen.';
      case 'fr':
        return 'Bonjour ! J\'ai visité votre site web www.kerbentravel.kg et j\'aimerais obtenir des conseils sur les billets d\'avion et les séjours.';
      case 'ar':
        return 'مرحباً! لقد قمت بزيارة موقعكم www.kerbentravel.kg وأود الاستفسار والحصول على استشارة بخصوص تذاكر الطيران والبرامج السياحية.';
      case 'ru':
      default:
        return 'Здравствуйте! Я зашел на ваш сайт www.kerbentravel.kg и хочу проконсультироваться по поводу авиабилетов и туров.';
    }
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans bg-slate-50 selection:bg-orange-500 selection:text-white ${isRtl ? 'rtl text-right' : 'ltr text-left'}`}>
      {/* Absolute Dynamic Ticker Ribbon (promotes group reservation & ticket searches) */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-orange-900/90 text-white py-1.5 px-4 text-xs font-semibold tracking-wider text-center flex items-center justify-center gap-2 relative z-50 shadow-sm border-b border-orange-950">
        <Sparkles className="w-3.5 h-3.5 animate-bounce text-orange-400 shrink-0" />
        <span className="truncate">
          {t('ticker_banner')} <strong className="font-mono text-orange-400">{contactsData.phone1}</strong>
        </span>
      </div>

      {/* Main Header navigation toolbar */}
      <Header 
        onNavigate={handleNavigate} 
        activeSection={activeSection} 
        onOpenAdmin={() => setIsAdminOpen(prev => !prev)} 
      />

      {/* Quick Access Float Panel (WhatsApp direct overlay according to user requirements) */}
      <div className={`fixed bottom-6 ${isRtl ? 'left-6' : 'right-6'} z-50 flex flex-col gap-2.5 items-end`}>
        
        {/* Helper visual bubble */}
        <div className="bg-white text-[10px] text-slate-800 border border-orange-100 font-bold tracking-tight rounded-xl py-1.5 px-3 shadow-md border-r-4 border-r-orange-500 animate-bounce hidden sm:block">
          {t('online_now')}
        </div>

        {/* Dynamic WhatsApp direct link floating button */}
        <a
          href={`https://wa.me/${contactsData.whatsapp}?text=${encodeURIComponent(getWhatsAppPrefilledMessage())}`}
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:shadow-emerald-300 transition-all hover:scale-110 active:scale-95 group cursor-pointer"
          title={t('whatsapp_bubble')}
        >
          <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </a>
      </div>

      {/* Live active overlay view structure */}
      <main className="flex-1">
        
        {/* Show Admin backoffice controls if active */}
        {isAdminOpen ? (
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
            <div className="bg-amber-50 border border-amber-200 text-amber-800 text-xs rounded-xl p-4 mb-6 flex items-start gap-2.5">
              <span className="text-lg">📢</span>
              <div>
                <strong className="font-bold">{t('admin_desc_alert')}</strong>
              </div>
            </div>
            <AdminPanel onClose={() => setIsAdminOpen(false)} />
          </div>
        ) : null}

        {/* 1. Hero Landing Presentation Section */}
        <Hero onNavigate={handleNavigate} />

        {/* 2. Global Airport Aviation Ticket search element */}
        <TicketSearch />

        {/* 2.1 Our Corporate Profile and 15 Licensed Core Services */}
        <AboutSection />

        {/* 3. Catalog Packages (Turkey, Egypt, Dubai, Europe, Kyrgyzstan internal tourism) */}
        <TourSection onSelectTour={handleSelectTour} />

        {/* 4. Inbound custom group programs & local traditional experiences */}
        <IncomingSection onSelectActivity={handleSelectTour} />

        {/* 5. Centerpiece Reservation Form with phone webhook simulator */}
        <ReservationForm 
          preSelectedDestination={preSelectedDestination} 
          onBookingCreated={handleBookingCreated}
        />

        {/* 6. Travel review testimonials block */}
        <FeedbackSection />
        
      </main>

      {/* Modern footer with static information contacts */}
      <Footer onNavigate={handleNavigate} onOpenAdmin={() => setIsAdminOpen(true)} />
    </div>
  );
}

