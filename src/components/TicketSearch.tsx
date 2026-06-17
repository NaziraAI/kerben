import React, { useState } from 'react';
import { Plane, Calendar, Users, Send, CheckCircle2, Ticket, ArrowRightLeft, ShieldCheck } from 'lucide-react';
import { FlightRequest } from '../types';
import { useLanguage } from '../LanguageContext';

export default function TicketSearch() {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState<Partial<FlightRequest>>({
    from: 'Бишкек (FRU)',
    to: '',
    departureDate: '',
    returnDate: '',
    passengerCount: 1,
    ticketClass: 'economy',
    tripType: 'round',
    fullName: '',
    phone: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMess, setErrorMess] = useState('');

  const airports = [
    { code: 'Бишкек (FRU)', label: t('airport_bishkek') },
    { code: 'Ош (OSS)', label: t('airport_osh') },
    { code: 'Стамбул (IST)', label: t('airport_istanbul') },
    { code: 'Анталья (AYT)', label: t('airport_antalya') },
    { code: 'Дубай (DXB)', label: t('airport_dubai') },
    { code: 'Шарм-эль-Шейх (SSH)', label: t('airport_sharm') },
    { code: 'Пхукет (HKT)', label: t('airport_phuket') },
    { code: 'Ташкент (TAS)', label: t('airport_tashkent') },
    { code: 'Алматы (ALA)', label: t('airport_almaty') },
    { code: 'Европа (Все аэропорты)', label: t('airport_europe') },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.from || !formData.to || !formData.departureDate || !formData.fullName || !formData.phone) {
      setErrorMess(t('error_fill_all'));
      return;
    }
    setErrorMess('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/flights', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const resData = await response.json();
      if (response.ok && resData.success) {
        setIsSuccess(true);
        // Reset form except defaults
        setFormData({
          from: 'Бишкек (FRU)',
          to: '',
          departureDate: '',
          returnDate: '',
          passengerCount: 1,
          ticketClass: 'economy',
          tripType: 'round',
          fullName: '',
          phone: '',
        });
      } else {
        setErrorMess(resData.error || t('error_submitting'));
      }
    } catch (err) {
      setErrorMess(t('error_server_connection'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="tickets" className="py-16 bg-slate-100 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-orange-600 text-xs font-bold uppercase tracking-wider bg-orange-50 px-3 py-1.5 border border-orange-100 rounded-full inline-flex items-center gap-1">
            <Ticket className="w-3 h-3 text-orange-500" />
            {t('air_tickets_worldwide')}
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 mt-3 tracking-tight">
            {t('cheap_flights_search')}
          </h2>
          <p className="text-slate-500 mt-2 text-sm">
            {t('tickets_subtitle_desc')}
          </p>
        </div>

        {isSuccess ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-xl shadow-slate-100 max-w-2xl mx-auto animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10 text-orange-500" />
            </div>
            <h3 className="font-display font-bold text-2xl text-slate-900">{t('ticket_success_title')}</h3>
            <p className="text-slate-600 mt-3 px-2 text-sm leading-relaxed">
              {t('ticket_success_desc')}
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="mt-6 bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 px-6 rounded-lg transition-colors cursor-pointer text-sm"
            >
              {t('search_other_tickets')}
            </button>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            className="bg-white border border-slate-200 rounded-2xl shadow-xl p-6 sm:p-8 relative overflow-hidden"
          >
            {/* Design accents */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-orange-50 via-orange-400 to-slate-200"></div>

            <div className="flex flex-col gap-6">
              {/* Trip type selector */}
              <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                <label className="flex items-center gap-1.5 cursor-pointer text-sm font-medium text-slate-700">
                  <input
                    type="radio"
                    name="tripType"
                    checked={formData.tripType === 'round'}
                    onChange={() => setFormData({ ...formData, tripType: 'round' })}
                    className="accent-orange-500 w-4 h-4"
                  />
                  <span>{t('round_trip')}</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer text-sm font-medium text-slate-700">
                  <input
                    type="radio"
                    name="tripType"
                    checked={formData.tripType === 'one-way'}
                    onChange={() => setFormData({ ...formData, tripType: 'one-way' })}
                    className="accent-orange-500 w-4 h-4"
                  />
                  <span>{t('one_way_trip')}</span>
                </label>
              </div>

              {/* Grid 1: Destinations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">{t('departure_city')}</label>
                  <div className="relative">
                    <Plane className="absolute left-3.5 top-3 w-5 h-5 text-orange-500 transform -rotate-45" />
                    <select
                      value={formData.from}
                      onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm font-medium text-slate-800 focus:outline-hidden focus:border-orange-500 hover:bg-slate-100/50"
                    >
                      {airports.map(ap => <option key={ap.code} value={ap.code}>{ap.label}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">{t('arrival_city')}</label>
                  <div className="relative">
                    <Plane className="absolute left-3.5 top-3 w-5 h-5 text-orange-400 transform rotate-45" />
                    <input
                      type="text"
                      placeholder={t('placeholder_city')}
                      value={formData.to || ''}
                      onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-orange-500 hover:bg-slate-100/50"
                      list="destinations"
                    />
                    <datalist id="destinations">
                      {airports.map(ap => <option key={ap.code} value={ap.code} />)}
                    </datalist>
                  </div>
                </div>
              </div>

              {/* Grid 2: Flight details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">{t('departure_date')}</label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-3 w-5 h-5 text-slate-400" />
                    <input
                      type="date"
                      value={formData.departureDate}
                      onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-11 pr-4 text-sm font-medium text-slate-800 focus:outline-hidden focus:border-orange-500"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    {t('return_date')} {formData.tripType === 'one-way' && `(${t('not_required')})`}
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-3 w-5 h-5 text-slate-400" />
                    <input
                      type="date"
                      value={formData.returnDate}
                      disabled={formData.tripType === 'one-way'}
                      onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-11 pr-4 text-sm font-medium text-slate-800 focus:outline-hidden focus:border-orange-500 disabled:opacity-50"
                      min={formData.departureDate || new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">{t('passenger_count')}</label>
                    <select
                      value={formData.passengerCount}
                      onChange={(e) => setFormData({ ...formData, passengerCount: Number(e.target.value) })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 text-sm font-medium text-slate-800 focus:outline-hidden focus:border-orange-500"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n} {t('persons_suffix')}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">{t('ticket_class')}</label>
                    <select
                      value={formData.ticketClass}
                      onChange={(e) => setFormData({ ...formData, ticketClass: e.target.value as 'economy' | 'business' })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 text-sm font-medium text-slate-800 focus:outline-hidden focus:border-orange-500"
                    >
                      <option value="economy">{t('class_economy')}</option>
                      <option value="business">{t('class_business')}</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Passenger Info */}
              <div className="bg-orange-50/45 rounded-xl p-4 border border-orange-100 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{t('full_name')}</label>
                  <input
                    type="text"
                    required
                    placeholder={t('placeholder_fullname')}
                    value={formData.fullName || ''}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{t('phone_whatsapp')}</label>
                  <input
                    type="tel"
                    required
                    placeholder={t('placeholder_phone')}
                    value={formData.phone || ''}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-orange-500"
                  />
                </div>
              </div>

              {errorMess && (
                <div className="text-rose-600 text-sm font-medium bg-rose-50 p-3 rounded-lg border border-rose-100 flex items-center gap-2">
                  <span>⚠️</span>
                  <span>{errorMess}</span>
                </div>
              )}

              {/* Submit CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>{t('tls_protection')}</span>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-8 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 text-sm shadow-md shadow-orange-100"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>{t('searching_fares')}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t('search_tickets')}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

