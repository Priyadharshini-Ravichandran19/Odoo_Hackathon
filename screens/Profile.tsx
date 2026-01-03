
import React from 'react';
import { Settings, Edit2, MapPin, Grid, Heart, Star, ChevronRight } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="p-6 lg:p-12 space-y-10">
      {/* Header Info */}
      <div className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8">
          <button className="p-3 bg-slate-50 text-slate-600 rounded-full hover:bg-slate-100 transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>
        
        <div className="relative">
          <div className="w-40 h-40 rounded-full border-8 border-slate-50 overflow-hidden shadow-xl">
            <img src="https://picsum.photos/seed/traveler/400/400" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <button className="absolute bottom-2 right-2 p-2 bg-blue-600 text-white rounded-full shadow-lg">
            <Edit2 className="w-4 h-4" />
          </button>
        </div>

        <div className="text-center md:text-left space-y-4">
          <div>
            <h1 className="text-4xl font-black text-slate-800">Alex Johnston</h1>
            <p className="text-blue-600 font-bold flex items-center justify-center md:justify-start gap-1">
              <Star className="w-4 h-4 fill-current" /> Expert Traveler
            </p>
          </div>
          <p className="text-slate-500 max-w-md leading-relaxed">
            Passionate about exploring remote landscapes and capturing cinematic moments. 42 countries and counting. Always looking for the next hidden gem!
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-2">
            <div>
              <p className="text-xl font-bold text-slate-800">124</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Trips</p>
            </div>
            <div>
              <p className="text-xl font-bold text-slate-800">3.2k</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Followers</p>
            </div>
            <div>
              <p className="text-xl font-bold text-slate-800">42</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Countries</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-slate-800">Preplanned Trips</h3>
            <button className="text-blue-600 font-bold flex items-center gap-1 hover:underline">See all <ChevronRight className="w-4 h-4"/></button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2].map(i => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm group">
                <div className="h-40 relative">
                  <img src={`https://picsum.photos/seed/plan${i}/400/300`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-2 right-2 px-2 py-1 bg-white/90 rounded-lg text-[10px] font-bold uppercase">Draft</div>
                </div>
                <div className="p-4 flex flex-col gap-3">
                  <h4 className="font-bold text-slate-800 truncate">Northern Lights Quest</h4>
                  <button className="w-full py-2 bg-blue-50 text-blue-600 font-bold rounded-xl text-sm hover:bg-blue-100">View</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-slate-800">Previous Trips</h3>
            <button className="text-blue-600 font-bold flex items-center gap-1 hover:underline">History <ChevronRight className="w-4 h-4"/></button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[3, 4].map(i => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm group">
                <div className="h-40">
                  <img src={`https://picsum.photos/seed/hist${i}/400/300`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-4 flex flex-col gap-3">
                  <h4 className="font-bold text-slate-800 truncate">Safari Expedition</h4>
                  <button className="w-full py-2 bg-slate-100 text-slate-700 font-bold rounded-xl text-sm hover:bg-slate-200">View</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
