
import React from 'react';
import { Link } from 'react-router-dom';
import { Filter, ChevronRight, Plus, Star, MapPin, TrendingUp } from 'lucide-react';

const Landing: React.FC = () => {
  const regions = [
    { name: 'Europe', count: '124 Destinations', img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80' },
    { name: 'Asia', count: '89 Destinations', img: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&w=400&q=80' },
    { name: 'Americas', count: '56 Destinations', img: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=400&q=80' },
    { name: 'Africa', count: '42 Destinations', img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=400&q=80' },
    { name: 'Oceania', count: '31 Destinations', img: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <div className="p-4 lg:p-8 space-y-12 max-w-7xl mx-auto">
      {/* Hero Banner */}
      <div className="relative h-[400px] lg:h-[550px] rounded-[40px] overflow-hidden group">
        <img 
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80" 
          alt="Banner" 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 lg:p-16">
          <div className="flex items-center gap-2 text-white/70 mb-4 bg-white/10 w-fit px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-widest">Trending for 2024</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight">Your Passport to <br/><span className="text-blue-400">Extraordinary</span></h2>
          <p className="text-white/80 mt-6 max-w-xl text-lg leading-relaxed">Join 50,000+ travelers planning their dream itineraries with AI-powered insights and a global community.</p>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-6 bg-white p-4 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex flex-wrap gap-3">
          <button className="px-5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-slate-100 transition-colors">
            <Filter className="w-4 h-4 text-blue-600" /> Filter Experience
          </button>
          <div className="h-10 w-px bg-slate-200 hidden md:block"></div>
          <select className="bg-transparent border-none text-sm font-bold outline-none cursor-pointer">
            <option>All Regions</option>
            <option>Europe</option>
            <option>Asia</option>
          </select>
        </div>
        <Link to="/create-trip" className="px-8 py-3 bg-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-200 flex items-center gap-2 hover:bg-blue-700 hover:-translate-y-0.5 transition-all">
          <Plus className="w-5 h-5" /> Start Planning
        </Link>
      </div>

      {/* Regional Grid */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-3xl font-black text-slate-800 tracking-tight">Destinations by Continent</h3>
            <p className="text-slate-500">Curated collections from around the globe</p>
          </div>
          <button className="p-3 bg-white border border-slate-200 rounded-2xl text-blue-600 hover:bg-blue-50 transition-colors shadow-sm">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {regions.map((region) => (
            <div key={region.name} className="group cursor-pointer">
              <div className="aspect-[4/5] rounded-[32px] overflow-hidden bg-slate-100 mb-4 shadow-lg border-4 border-white">
                <img src={region.img} alt={region.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="text-center space-y-1">
                <h4 className="font-extrabold text-slate-800 text-lg group-hover:text-blue-600 transition-colors">{region.name}</h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{region.count}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Community Trips */}
      <section className="space-y-8 bg-slate-900 rounded-[48px] p-8 lg:p-12 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-3xl font-black">Recent Expeditions</h3>
            <p className="text-slate-400">See what the GlobalTrotter community is up to</p>
          </div>
          <Link to="/community" className="text-sm font-bold text-blue-400 hover:underline">Community Feed</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Island Hopping', loc: 'Philippines', img: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=400&q=80' },
            { name: 'Arctic Lights', loc: 'Iceland', img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=400&q=80' },
            { name: 'Red Desert', loc: 'Namibia', img: 'https://images.unsplash.com/photo-1489493395912-039c8c889a24?auto=format&fit=crop&w=400&q=80' },
          ].map((trip, idx) => (
            <div key={idx} className="bg-white/5 rounded-[32px] p-4 border border-white/10 hover:bg-white/10 transition-colors group">
              <div className="h-56 rounded-2xl overflow-hidden mb-6 relative">
                <img src={trip.img} alt={trip.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-3 left-3 bg-blue-600 px-3 py-1 rounded-full text-[10px] font-black uppercase">Featured</div>
              </div>
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <p className="text-blue-400 text-xs font-bold flex items-center gap-1 uppercase tracking-tighter"><MapPin className="w-3 h-3" /> {trip.loc}</p>
                  <h4 className="text-xl font-black">{trip.name}</h4>
                </div>
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-bold">5.0</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Landing;
