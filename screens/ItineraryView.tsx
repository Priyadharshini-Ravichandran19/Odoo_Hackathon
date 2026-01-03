
import React from 'react';
import { ChevronDown, ArrowDown, DollarSign, Activity as ActivityIcon, MapPin, Search, Filter } from 'lucide-react';

const ItineraryView: React.FC = () => {
  const schedule = [
    {
      day: 1,
      activities: [
        { name: 'Arrive at CDG & Hotel Check-in', desc: 'Transfer via RER B to St. Michel', expense: 15 },
        { name: 'Eiffel Tower Sunset', desc: 'Pre-booked tickets for 6 PM', expense: 35 },
        { name: 'Dinner at Le Comptoir', desc: 'Famous bistro in Odeon', expense: 80 },
      ]
    },
    {
      day: 2,
      activities: [
        { name: 'Louvre Museum Morning', desc: 'Audio guide tour of main halls', expense: 25 },
        { name: 'Luxembourg Gardens Walk', desc: 'Leisurely stroll and people watching', expense: 0 },
        { name: 'Seine River Night Cruise', desc: 'Bateaux-mouches departing at 9 PM', expense: 20 },
      ]
    }
  ];

  return (
    <div className="p-6 lg:p-12 max-w-5xl mx-auto space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-800">Paris Getaway</h1>
          <div className="flex items-center gap-2 text-slate-500 font-medium mt-1">
            <MapPin className="w-4 h-4 text-blue-500" /> Paris, France • 8 Days
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input type="text" placeholder="Search itinerary..." className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm" />
          </div>
          <button className="p-2.5 bg-white border border-slate-200 rounded-xl"><Filter className="w-4 h-4" /></button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {schedule.map((dayData) => (
          <div key={dayData.day} className="space-y-6">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-black text-slate-800 bg-slate-100 px-4 py-1 rounded-xl">Day {dayData.day}</h2>
              <div className="flex-1 h-px bg-slate-100"></div>
            </div>

            <div className="space-y-4">
              {dayData.activities.map((act, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex items-center gap-6">
                    <div className="flex-1 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                          <ActivityIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800">{act.name}</h4>
                          <p className="text-sm text-slate-500">{act.desc}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-2xl border border-green-100">
                        <DollarSign className="w-4 h-4 text-green-600" />
                        <span className="font-black text-green-700">${act.expense}</span>
                      </div>
                    </div>
                  </div>
                  {idx < dayData.activities.length - 1 && (
                    <div className="flex justify-center ml-[52px]">
                      <div className="w-px h-8 border-l-2 border-dashed border-slate-200"></div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 rounded-[40px] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
        <div className="space-y-2 text-center md:text-left">
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Total Estimated Budget</p>
          <h3 className="text-5xl font-black">$3,425.00</h3>
        </div>
        <div className="flex gap-4">
          <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl hover:bg-slate-100 transition-colors">Export PDF</button>
          <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-colors">Share with Friends</button>
        </div>
      </div>
    </div>
  );
};

export default ItineraryView;
