import React, { useState, useEffect } from 'react';
import { Shield, BookOpen, Plane, Check, X, RefreshCw, Clock, Filter, Trash, Search, Map, Send } from 'lucide-react';
import { Booking, FlightRequest } from '../types';

interface AdminPanelProps {
  onClose: () => void;
}

export default function AdminPanel({ onClose }: AdminPanelProps) {
  const [tab, setTab] = useState<'tours' | 'flights'>('tours');
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [flights, setFlights] = useState<FlightRequest[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [query, setQuery] = useState('');

  const fetchBookings = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/bookings');
      if (response.ok) {
        const data = await response.json();
        setBookings(data);
      }
    } catch (err) {
      console.error('Error fetching bookings:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchFlights = async () => {
    try {
      const response = await fetch('/api/flights');
      if (response.ok) {
        const data = await response.json();
        setFlights(data);
      }
    } catch (err) {
      console.error('Error fetching flights:', err);
    }
  };

  useEffect(() => {
    fetchBookings();
    fetchFlights();
  }, [tab]);

  const handleUpdateStatus = async (id: string, status: 'confirmed' | 'cancelled') => {
    try {
      const response = await fetch(`/api/bookings/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status })
      });

      if (response.ok) {
        // Refresh
        fetchBookings();
      }
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  // Filter bookings based on selections
  const filteredBookings = bookings.filter(b => {
    const matchesStatus = filterStatus === 'all' || b.status === filterStatus;
    const matchesQuery = b.fullName.toLowerCase().includes(query.toLowerCase()) || 
                         b.phone.includes(query) || 
                         b.destination.toLowerCase().includes(query.toLowerCase());
    return matchesStatus && matchesQuery;
  });

  return (
    <section id="admin-panel" className="bg-slate-900 text-slate-100 p-6 rounded-3xl border border-slate-800 shadow-2xl max-w-7xl mx-auto my-12 animate-in fade-in duration-300">
      {/* Title */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
            <Shield className="w-5 h-5 text-orange-400" />
          </div>
          <div>
            <h2 className="font-display font-black text-xl text-white">Панель Управления Kerben Travel</h2>
            <p className="text-xs text-slate-400">Система учета поступающих заявок с сайта в режиме реального времени</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => { fetchBookings(); fetchFlights(); }}
            className="p-2 bg-slate-800 text-slate-300 hover:text-white rounded-lg transition-colors cursor-pointer"
            title="Обновить список"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs uppercase px-4 py-2 rounded-lg cursor-pointer"
          >
            Закрыть панель
          </button>
        </div>
      </div>

      {/* Tabs / Filter selectors */}
      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mb-6">
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 self-start">
          <button
            onClick={() => setTab('tours')}
            className={`cursor-pointer px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all duration-150 flex items-center gap-2 ${
              tab === 'tours' ? 'bg-slate-800 text-white shadow-xs' : 'text-slate-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-orange-400" />
            <span>Заявки на Туры ({bookings.length})</span>
          </button>
          <button
            onClick={() => setTab('flights')}
            className={`cursor-pointer px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all duration-150 flex items-center gap-2 ${
              tab === 'flights' ? 'bg-slate-800 text-white shadow-xs' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Plane className="w-3.5 h-3.5 text-amber-500" />
            <span>Запросы авиабилетов ({flights.length})</span>
          </button>
        </div>

        {tab === 'tours' && (
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="w-4 h-4 text-slate-500 hidden sm:block" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-lg text-xs py-1.5 px-3 text-slate-300"
            >
              <option value="all">Все заявки</option>
              <option value="pending">Ожидают</option>
              <option value="confirmed">Подтверждены</option>
              <option value="cancelled">Отменены</option>
            </select>
            <input
              type="text"
              placeholder="Поиск по клиенту, городу..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-lg text-xs py-1.5 px-3 text-slate-300 placeholder-slate-500 w-full sm:w-48"
            />
          </div>
        )}
      </div>

      {/* Bookings View */}
      {tab === 'tours' ? (
        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/40">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-950 text-slate-400 text-xs uppercase font-semibold border-b border-slate-800">
                <th className="p-4">Клиент / Контакт</th>
                <th className="p-4">Направление</th>
                <th className="p-4">Дата / Дней / Чел.</th>
                <th className="p-4">Пожелания</th>
                <th className="p-4">Статус</th>
                <th className="p-4 text-center">Действия</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-sm">
              {filteredBookings.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-12 text-center text-slate-500 italic">Заявки отсутствуют.</td>
                </tr>
              ) : (
                filteredBookings.map((b) => (
                  <tr key={b.id} className="hover:bg-slate-800/20 transition-colors">
                    <td className="p-4">
                      <p className="font-bold text-white">{b.fullName}</p>
                      <a href={`tel:${b.phone}`} className="text-xs text-orange-400 font-mono block hover:underline">{b.phone}</a>
                      <span className="text-[10px] text-slate-500 block">Заявка: {new Date(b.createdAt).toLocaleDateString()}</span>
                    </td>
                    <td className="p-4 text-slate-300 font-medium">{b.destination}</td>
                    <td className="p-4 text-sm font-mono">
                      <div>🗓️ {b.date}</div>
                      <div className="text-slate-400 text-xs">⏳ {b.durationDays} дн. / {b.guestsCount} чел.</div>
                    </td>
                    <td className="p-4 text-xs text-slate-300 max-w-xs truncate" title={b.notes}>
                      {b.notes || <span className="text-slate-600">—</span>}
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1 text-[10px] uppercase font-bold py-1 px-2.5 rounded-full ${
                        b.status === 'confirmed' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                        b.status === 'cancelled' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                        'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                      }`}>
                        {b.status === 'confirmed' ? 'Подтвержден' :
                         b.status === 'cancelled' ? 'Отменен' : 'Ожидает'}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-center gap-1.5">
                        {b.status !== 'confirmed' && (
                          <button
                            onClick={() => handleUpdateStatus(b.id, 'confirmed')}
                            className="bg-emerald-600/20 hover:bg-emerald-600 border border-emerald-500/30 text-emerald-400 hover:text-white p-1.5 rounded-lg transition-colors cursor-pointer"
                            title="Подтвердить встречу"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                        )}
                        {b.status !== 'cancelled' && (
                          <button
                            onClick={() => handleUpdateStatus(b.id, 'cancelled')}
                            className="bg-red-650/20 hover:bg-red-600 border border-red-500/30 text-red-400 hover:text-white p-1.5 rounded-lg transition-colors cursor-pointer"
                            title="Отменить"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      ) : (
        /* Flights Requests View */
        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/40">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-950 text-slate-400 text-xs uppercase font-semibold border-b border-slate-800">
                <th className="p-4">Пассажир / Тел</th>
                <th className="p-4">Маршрут</th>
                <th className="p-4">Тип / Класс</th>
                <th className="p-4">Дата отправления</th>
                <th className="p-4">Обратная дата</th>
                <th className="p-4">Пассажиры</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-sm">
              {flights.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-12 text-center text-slate-500 italic">Запросы авиабилетов отсутствуют.</td>
                </tr>
              ) : (
                flights.map((f: any) => (
                  <tr key={f.id} className="hover:bg-slate-800/20 transition-colors">
                    <td className="p-4">
                      <p className="font-bold text-white">{f.fullName}</p>
                      <a href={`tel:${f.phone}`} className="text-xs text-orange-400 font-mono block hover:underline">{f.phone}</a>
                      <span className="text-[10px] text-slate-500 block">Запрос: {new Date(f.createdAt).toLocaleDateString()}</span>
                    </td>
                    <td className="p-4 font-bold text-slate-350">
                      ✈️ {f.from} ➔ {f.to}
                    </td>
                    <td className="p-4 text-xs font-mono">
                      <span className="bg-slate-800 border border-slate-700 px-2 py-0.5 rounded text-slate-300 mr-1.5">
                        {f.tripType === 'round' ? 'Туда-Обратно' : 'В одну сторону'}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-white font-bold ${f.ticketClass === 'business' ? 'bg-amber-600' : 'bg-slate-700'}`}>
                        {f.ticketClass === 'business' ? 'Бизнес' : 'Эконом'}
                      </span>
                    </td>
                    <td className="p-4 font-mono text-slate-300">🗓️ {f.departureDate}</td>
                    <td className="p-4 font-mono text-slate-400">{f.returnDate || <span className="italic text-slate-600">нет</span>}</td>
                    <td className="p-4 font-mono text-center text-white">{f.passengerCount} чел.</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
