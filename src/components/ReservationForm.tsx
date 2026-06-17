import React, { useState } from 'react';
import { Send, Calendar, Users, Bookmark, Clock, User, Phone, MessageSquare, Check, PhoneCall, AlertCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Booking } from '../types';
import { contactsData } from '../data';

interface ReservationFormProps {
  preSelectedDestination: string;
  onBookingCreated: () => void;
}

export default function ReservationForm({ preSelectedDestination, onBookingCreated }: ReservationFormProps) {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    destination: preSelectedDestination || '',
    date: '',
    durationDays: 7,
    guestsCount: 2,
    notes: ''
  });

  // Sync state if preSelectedDestination changes
  React.useEffect(() => {
    if (preSelectedDestination) {
      setFormData(prev => ({ ...prev, destination: preSelectedDestination }));
    }
  }, [preSelectedDestination]);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPhoneNotification, setShowPhoneNotification] = useState(false);

  // List of pre-defined options for destination
  const destinationOptions = [
    { value: 'Анталья, Турция (Всё Включено)', label: t('dest_antalya') },
    { value: 'Шарм-эль-Шейх, Египет (Красное Море)', label: t('dest_sharm') },
    { value: 'Пхукет, Таиланд (Тропический Рай)', label: t('dest_phuket') },
    { value: 'Дубай, ОАЭ (Оазис Ультрамодерна)', label: t('dest_dubai') },
    { value: 'Париж - Рим - Прага, Европа', label: t('dest_europe') },
    { value: 'Иссык-Куль, Кыргызстан', label: t('dest_issyk_kul') },
    { value: 'Озеро Сон-Куль, Кыргызстан', label: t('dest_son_kul') },
    { value: 'Природный парк Ала-Арча, Кыргызстан', label: t('dest_ala_archa') },
    { value: 'Заповедник Сары-Челек, Кыргызстан', label: t('dest_sary_chelek') },
    { value: 'Групповой прием гостей под ключ / Incoming Group Package', label: t('dest_incoming_package') },
    { value: 'Другое направление (Укажите в примечаниях)', label: t('dest_other') }
  ];

  // Helper to resolve translated label of pre-selected or manually selected destinations
  const getSelectedDestinationLabel = () => {
    const found = destinationOptions.find(opt => opt.value === formData.destination);
    return found ? found.label : formData.destination;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.destination || !formData.date) {
      setErrorMessage(t('error_fill_required') || 'Пожалуйста, заполните основные поля: ФИО, Номер телефона, Куда едете и дату.');
      return;
    }
    setErrorMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const resData = await response.json();
      if (response.ok && resData.success) {
        setIsSuccess(true);
        // Trigger simulated push notification on operator phone mockup
        setShowPhoneNotification(true);
        onBookingCreated();
      } else {
        setErrorMessage(resData.error || 'Произошла ошибка при отправке бронирования.');
      }
    } catch (err) {
      setErrorMessage('Не удалось подключиться к серверу бронирования. Проверьте интернет-соединение.');
    } finally {
      setIsLoading(false);
    }
  };

  // Compile pre-filled WhatsApp message link according to user language preference
  const getWhatsAppLink = () => {
    const destLabel = getSelectedDestinationLabel();
    const textMsg = `Здравствуйте, Кербен Тревел! 🌟 Я хочу оставить заявку на тур:
📍 Направление: ${destLabel || 'Не указано'}
📅 Дата вылета: ${formData.date ? formData.date : 'Уточнить с менеджером'}
⏳ Продолжительность: ${formData.durationDays} дней
👥 Количество гостей: ${formData.guestsCount} чел.
👤 Клиент: ${formData.fullName || 'Инкогнито'}
📞 Номер телефона: ${formData.phone || 'Не указан'}
💬 Пожелания: ${formData.notes || 'Нет'}`;

    return `https://wa.me/${contactsData.whatsapp}?text=${encodeURIComponent(textMsg)}`;
  };

  return (
    <section id="booking-form" className="py-20 bg-slate-100 border-b border-orange-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Title elements */}
        <div className="text-center max-w-2xl mx-auto mb-16 select-none animate-fadeIn">
          <span className="text-orange-600 text-xs font-bold uppercase tracking-wider bg-orange-100 px-3 py-1.5 rounded-full inline-flex items-center gap-1">
            <Bookmark className="w-3.5 h-3.5" />
            {t('calc_badge')}
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 mt-4 tracking-tight">
            {t('calc_title')}
          </h2>
          <p className="text-slate-500 mt-2 text-sm sm:text-base">
            {t('calc_desc')}
          </p>
        </div>

        {/* Layout Grid: 1 Form, 2 Smart phone simulator proving notifications reach the phone */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Reservation Form container */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl shadow-xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-orange-500 via-orange-400 to-slate-200"></div>

            {isSuccess ? (
              <div className="py-8 text-center animate-in zoom-in-95 duration-200">
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-12 h-12 text-emerald-500" />
                </div>
                <h3 className="font-display font-black text-2xl text-slate-900">{t('success_booking_title')}</h3>
                <p className="text-slate-600 mt-3 max-w-md mx-auto text-sm leading-relaxed">
                  {t('success_booking_desc')}
                </p>

                {/* Direct WhatsApp trigger button */}
                <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100 max-w-md mx-auto">
                  <p className="text-xs text-slate-500 font-medium mb-3">
                    Хотите ускорить процесс? Перешлите детали напрямую в наш отдел продаж в чат:
                  </p>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl transition-all w-full cursor-pointer shadow-md shadow-emerald-100 font-sans"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Продублировать в WhatsApp</span>
                  </a>
                </div>

                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      fullName: '',
                      phone: '',
                      destination: preSelectedDestination || '',
                      date: '',
                      durationDays: 7,
                      guestsCount: 2,
                      notes: ''
                    });
                  }}
                  className="mt-6 text-xs text-slate-400 hover:text-orange-600 font-bold uppercase tracking-wider underline cursor-pointer font-sans"
                >
                  {t('more_app_order')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Client info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-orange-500" />
                      <span>{t('lbl_your_name')} <span className="text-orange-500">*</span></span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t('ph_your_name')}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-orange-500 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-orange-500" />
                      <span>{t('lbl_phone_number')} <span className="text-orange-500">*</span></span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={t('ph_phone_number')}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-orange-500 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Destination Selector and Date finder */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <Bookmark className="w-3.5 h-3.5 text-orange-500" />
                      <span>{t('label_tour_select')} <span className="text-orange-500">*</span></span>
                    </label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-xl py-3 px-3.5 text-sm text-slate-800 focus:outline-hidden focus:border-orange-500 focus:bg-white cursor-pointer"
                    >
                      <option value="">{t('select_destination_placeholder')}</option>
                      {destinationOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-orange-400" />
                      <span>{t('label_date')} <span className="text-orange-500">*</span></span>
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-xl py-2.5 px-4 text-sm text-slate-800 focus:outline-hidden focus:border-orange-500 focus:bg-white"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>

                {/* Duration slider and Headcount */}
                <div className="bg-orange-50/25 rounded-2xl p-4 sm:p-5 border border-orange-100 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{t('label_days')}</span>
                      </label>
                      <span className="font-mono text-sm font-extrabold text-orange-600 bg-white border border-orange-100 rounded-md px-2 py-0.5">{formData.durationDays} дн.</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="30"
                      value={formData.durationDays}
                      onChange={(e) => setFormData({ ...formData, durationDays: Number(e.target.value) })}
                      className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-orange-500"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                      <span>1 дн</span>
                      <span>15 дн</span>
                      <span>30 дн</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      <span>{t('label_guests_count')}</span>
                    </label>
                    <select
                      value={formData.guestsCount}
                      onChange={(e) => setFormData({ ...formData, guestsCount: Number(e.target.value) })}
                      className="w-full bg-white border border-slate-200 rounded-xl py-2.5 px-4 text-sm text-slate-800 focus:outline-hidden focus:border-orange-500 cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                        <option key={n} value={n}>{n} {t('pax_unit')}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Preferences Comments */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">{t('label_notes')}</label>
                  <textarea
                    rows={3}
                    placeholder={t('ph_notes')}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-orange-500 focus:bg-white"
                  ></textarea>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs font-semibold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submitting Buttons: Double pathway! Form server POST + Direct WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-orange-500 border border-orange-600 hover:bg-orange-600 shadow-md shadow-orange-100 text-white font-bold py-3.5 px-6 rounded-xl transition-all text-xs uppercase tracking-wider cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 font-sans"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>{t('btn_sending')}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t('book_now')}</span>
                      </>
                    )}
                  </button>

                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl transition-all text-xs uppercase tracking-wider text-center cursor-pointer flex items-center justify-center gap-2 shadow-sm shadow-emerald-50 font-sans"
                  >
                    <MessageSquare className="w-4.5 h-4.5" />
                    <span>{t('btn_order_group') || 'WhatsApp'}</span>
                  </a>
                </div>

              </form>
            )}
          </div>

          {/* Interactive Telephone Notification Emulator (reaches the phone) */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col items-center select-none text-left">
            
            {/* Operator Notification Console card wrapper */}
            <div className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-2xl relative">
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black rounded-full z-10"></div>
              
              <div className="text-center mb-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded-sm">{t('tele_manager_title')}</span>
                <p className="text-slate-400 text-[10px] mt-1.5 px-4 font-light">{t('tele_manager_desc')}</p>
              </div>

              {/* Virtual Smartphone Outer Frame */}
              <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 overflow-hidden relative min-h-[360px] flex flex-col justify-between">
                
                {/* Virtual Phone Header status */}
                <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono mb-6">
                  <span>9:41 AM</span>
                  <div className="flex items-center gap-1.5">
                    <span>📶 LTE</span>
                    <span>🔋 98%</span>
                  </div>
                </div>

                {/* Push Notification Sliding tray (triggers when fields are edited or on success) */}
                <div className="space-y-4 my-auto">
                  
                  {/* Standard Message if quiet */}
                  {!showPhoneNotification && !formData.fullName && !formData.phone && (
                    <div className="text-center py-8 text-xs text-slate-600 font-mono italic">
                      {t('tele_manager_idle')}
                    </div>
                  )}

                  {/* Real-time typing tracking bubble */}
                  {(formData.fullName || formData.phone || formData.destination) && !showPhoneNotification && (
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 animate-pulse">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                        <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">{t('tele_manager_analytics')}</span>
                      </div>
                      <div className="text-[11px] text-slate-300 font-mono leading-tight space-y-1 block">
                        <div><strong className="text-slate-500">{t('tele_manager_recipient')}</strong> {formData.fullName || '...'}</div>
                        <div><strong className="text-slate-500">{t('tele_manager_phone')}</strong> {formData.phone || '...'}</div>
                        <div><strong className="text-slate-500">{t('tele_manager_dest')}</strong> {formData.destination ? getSelectedDestinationLabel().slice(0, 18) + '...' : '-'}</div>
                      </div>
                    </div>
                  )}

                  {/* Ultimate Telegram message delivered to phone */}
                  {showPhoneNotification && (
                    <div className="bg-slate-900 border-2 border-orange-500 rounded-xl p-3.5 shadow-lg shadow-orange-950/20 animate-in slide-in-from-top-6 duration-300 relative">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5">
                          <img
                            src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=100"
                            alt="avatar"
                            referrerPolicy="no-referrer"
                            className="w-5 h-5 rounded-full object-cover border border-orange-500"
                          />
                          <span className="text-[11px] font-bold text-white">Kerben CRM</span>
                        </div>
                        <span className="text-[9px] text-orange-400 font-bold uppercase animate-ping">now</span>
                      </div>

                      <div className="text-[11px] font-mono text-slate-300 space-y-1 bg-slate-950/80 p-2 rounded-lg border border-slate-800">
                        <div className="text-orange-400 font-bold border-b border-slate-800 pb-0.5">{t('tele_manager_new_alert')}</div>
                        <div>🌎 <span className="text-slate-400">{t('tele_manager_dest')}</span> <span className="text-yellow-400">{getSelectedDestinationLabel()}</span></div>
                        <div>📅 <span className="text-slate-400">{t('label_date')}:</span> {formData.date}</div>
                        <div>⏳ <span className="text-slate-400">{t('label_days')}:</span> {formData.durationDays} дн.</div>
                        <div>👥 <span className="text-slate-400">{t('label_guests_count')}:</span> {formData.guestsCount} чел.</div>
                        <div>👤 <span className="text-slate-400">{t('lbl_your_name')}:</span> <span className="text-white font-bold">{formData.fullName}</span></div>
                        <div>📞 <span className="text-slate-400">{t('lbl_phone_number')}:</span> {formData.phone}</div>
                        {formData.notes && <div className="text-[10px] text-slate-400 border-t border-slate-800 pt-0.5 mt-0.5">💬 {formData.notes.slice(0, 25)}...</div>}
                      </div>
                      
                      <div className="mt-2 text-center text-[9px] text-slate-500 font-mono">
                        {t('tele_manager_delivered')}
                      </div>
                    </div>
                  )}

                </div>

                {/* Simulated lock screen buttons */}
                <div className="border-t border-slate-900 pt-3 mt-4 flex items-center justify-between text-[11px] text-slate-600 font-medium">
                  <span>Swipe up to open</span>
                  <PhoneCall className="w-4 h-4 text-emerald-500" />
                </div>

              </div>
              
              {/* Reset simulator capability */}
              {showPhoneNotification && (
                <button
                  type="button"
                  onClick={() => setShowPhoneNotification(false)}
                  className="mt-4 w-full bg-slate-800 hover:bg-slate-700 text-slate-300 py-1.5 text-xs rounded-lg transition-colors cursor-pointer font-sans"
                >
                  {t('tele_manager_reset')}
                </button>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
