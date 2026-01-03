
import React from 'react';
import { Search, Filter, MoreVertical, Calendar, MapPin, Clock } from 'lucide-react';

const TripListing: React.FC = () => {
  const tripCategories = [
    {
      title: 'Ongoing',
      trips: [{ id: '1', name: 'Autumn in Paris', location: 'France', date: 'Nov 12 - Nov 20', color: 'bg-blue-600' }]
    },
    {
      title: 'Up-coming',
      trips: [{ id: '2', name: 'Swiss Alps Skiing', location: 'Switzerland', date: 'Dec 24 - Jan 02', color: 'bg-indigo-600' }]
    },
    {
      title: 'Completed',
      trips: [
        { id: '3', name: 'Tokyo Neon Lights', location: 'Japan', date: 'Aug 10 - Aug 25', color: 'bg-emerald-600' },
        { id: '4', name: 'Amalfi Coast Drive', location: 'Italy', date: 'July 05 - July 15', color: 'bg-orange-500' }
      ]
    }
  ];

  return (
    <div className="p-6 lg:p-12 space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <h1 className="text-3xl font-black text-slate-800">My Trip Library</h1>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input type="text" placeholder="Search my trips..." className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm outline-none w-64" />
          </div>
          <button className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50"><Filter className="w-4 h-4" /></button>
        </div>
      </div>

      <div className="space-y-12">
        {tripCategories.map(cat => (
          <div key={cat.title} className="space-y-4">
            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              {cat.title}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {cat.trips.map(trip => (
                <div key={trip.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-6">
                    <div className={`w-20 h-20 ${trip.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                      <MapPin className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">{trip.name}</h3>
                      <div className="flex items-center gap-4 mt-1 text-slate-500 text-sm">
                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {trip.date}</span>
                        <span className="flex items-center gap-1 font-semibold text-slate-800">{trip.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                      <p className="text-xs uppercase font-bold text-slate-400 tracking-wider">Status</p>
                      <p className="font-semibold text-slate-600">Active Planner</p>
                    </div>
                    <button className="bg-slate-100 text-slate-700 px-6 py-2.5 rounded-xl font-bold hover:bg-slate-200 transition-colors">
                      View Details
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-600"><MoreVertical className="w-5 h-5" /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripListing;
