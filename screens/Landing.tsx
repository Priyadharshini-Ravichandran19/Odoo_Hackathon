
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, MapPin, Sparkles, TrendingUp } from 'lucide-react';

const Landing: React.FC = () => {
  const continents = [
    { name: 'Asia', spot: 'Dubai, UAE', color: 'bg-orange-500' },
    { name: 'Europe', spot: 'Paris, France', color: 'bg-blue-500' },
    { name: 'N. America', spot: 'New York City, USA', color: 'bg-indigo-500' },
    { name: 'S. America', spot: 'Machu Picchu, Peru', color: 'bg-emerald-500' },
    { name: 'Africa', spot: 'Cape Town, S. Africa', color: 'bg-amber-500' },
    { name: 'Oceania', spot: 'Sydney, Australia', color: 'bg-cyan-500' },
    { name: 'Antarctica', spot: 'Antarctic Peninsula', color: 'bg-slate-400' }
  ];

  const indiaStates = [
    { state: 'Goa', place: 'Baga Beach', desc: 'Nightlife & Water Sports' },
    { state: 'Kerala', place: 'Munnar', desc: 'Tea Gardens & Serenity' },
    { state: 'Rajasthan', place: 'Jaipur', desc: 'Forts & Royal Heritage' },
    { state: 'Himachal', place: 'Manali', desc: 'Snow & Adventure' },
  ];

  return (
    <div className="p-6 lg:p-12 space-y-12">
      <section className="relative h-[400px] rounded-[40px] overflow-hidden bg-slate-900 flex items-center px-10 shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover opacity-40" 
          alt="Banner"
        />
        <div className="relative z-10 max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-500/30">
            <Sparkles className="w-3 h-3" /> New Adventure Awaits
          </div>
          <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight">Your Journey <br/>Starts Here.</h2>
          <p className="text-lg text-slate-300">Plan smarter, travel deeper. Explore 29 Indian states and every continent with AI-powered insights.</p>
          <Link to="/create-trip" className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/40">
            Create Your Itinerary <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-slate-800">Global Destinations</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {continents.map((c) => (
              <div key={c.name} className="bg-white p-5 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all cursor-pointer group">
                <div className={`w-8 h-8 ${c.color} rounded-lg mb-3 flex items-center justify-center text-white font-bold text-xs`}>
                  {c.name[0]}
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{c.name}</p>
                <h4 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{c.spot}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-indigo-600" />
            <h3 className="text-2xl font-bold text-slate-800">Trending in India</h3>
          </div>
          <div className="space-y-4">
            {indiaStates.map((s) => (
              <div key={s.place} className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center justify-between hover:bg-slate-50 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{s.place}</h4>
                    <p className="text-xs text-slate-500">{s.state} • {s.desc}</p>
                  </div>
                </div>
                <button className="p-2 text-slate-300 group-hover:text-blue-600 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
