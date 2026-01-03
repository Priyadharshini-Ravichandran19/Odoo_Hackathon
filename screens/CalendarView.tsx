
import React from 'react';
import { ChevronLeft, ChevronRight, Search, Filter } from 'lucide-react';

const CalendarView: React.FC = () => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <div className="p-6 lg:p-12 space-y-10 h-full flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <h1 className="text-3xl font-black text-slate-800">Travel Calendar</h1>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input type="text" placeholder="Search events..." className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm" />
          </div>
          <button className="p-2.5 bg-white border border-slate-200 rounded-xl"><Filter className="w-4 h-4" /></button>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-[40px] shadow-sm border border-slate-100 flex flex-col overflow-hidden">
        {/* Calendar Header */}
        <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
          <h2 className="text-2xl font-black text-slate-800">January 2024</h2>
          <div className="flex gap-2">
            <button className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 shadow-sm"><ChevronLeft className="w-5 h-5"/></button>
            <button className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 shadow-sm"><ChevronRight className="w-5 h-5"/></button>
          </div>
        </div>

        {/* Grid Header */}
        <div className="grid grid-cols-7 border-b border-slate-50">
          {weekDays.map(day => (
            <div key={day} className="py-4 text-center text-xs font-black text-slate-400 tracking-widest">{day}</div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="flex-1 grid grid-cols-7 text-sm">
          {Array.from({ length: 1 }, (_, i) => (
            <div key={`empty-${i}`} className="p-4 border-r border-b border-slate-50 bg-slate-50/20"></div>
          ))}
          {days.map(day => {
            const isParisTrip = day >= 5 && day <= 12;
            const isNycTrip = day >= 23 && day <= 28;
            const isToday = day === 15;

            return (
              <div key={day} className={`p-4 border-r border-b border-slate-50 min-h-[120px] relative transition-colors hover:bg-slate-50 group`}>
                <span className={`inline-block w-8 h-8 leading-8 text-center rounded-full font-bold mb-2 ${isToday ? 'bg-blue-600 text-white' : 'text-slate-700'}`}>
                  {day}
                </span>
                
                {isParisTrip && (
                  <div className={`absolute top-12 left-0 right-0 h-8 ${day === 5 ? 'rounded-l-lg ml-2' : ''} ${day === 12 ? 'rounded-r-lg mr-2' : ''} bg-blue-100 text-blue-700 text-[10px] font-black px-2 flex items-center border-y border-blue-200 shadow-sm z-10`}>
                    {day === 5 && "PARIS TRIP"}
                  </div>
                )}

                {isNycTrip && (
                  <div className={`absolute bottom-4 left-0 right-0 h-8 ${day === 23 ? 'rounded-l-lg ml-2' : ''} ${day === 28 ? 'rounded-r-lg mr-2' : ''} bg-slate-900 text-white text-[10px] font-black px-2 flex items-center shadow-md z-10`}>
                    {day === 23 && "NYC - GETAWAY"}
                  </div>
                )}
                
                <button className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-white shadow-md rounded-lg p-1 text-blue-600 transition-opacity">
                  <Filter className="w-3 h-3" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
