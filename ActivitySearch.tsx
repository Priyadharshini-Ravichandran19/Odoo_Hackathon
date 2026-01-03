import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, Star, Clock, MapPin, 
  ChevronRight, Heart, Zap, Compass, 
  Navigation2, X, Map as MapIcon, 
  Filter, Award, Coffee, Camera, MoveRight,
  TrendingUp, Globe, Sparkles, Plane,
  Users, Bookmark
} from 'lucide-react';

const ActivitySearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Explore');
  const [isSearching, setIsSearching] = useState(false);
  const [likedItems, setLikedItems] = useState<Record<number, boolean>>({});

  // --- COMPREHENSIVE GLOBAL EXPLORER DATABASE ---
  const globalDatabase = [
    // TAMIL NADU CLUSTER (Local depth)
    { id: 1, title: 'Meenakshi Amman', location: 'Madurai', state: 'Tamil Nadu', country: 'India', price: 'Free', rating: 4.9, type: 'Heritage', img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800', tags: ['Famous', 'Spiritual'], travelers: '12k' },
    { id: 2, title: 'Ghost Town Ruins', location: 'Dhanushkodi', state: 'Tamil Nadu', country: 'India', price: '$15', rating: 4.8, type: 'History', img: 'https://images.unsplash.com/photo-1621501700624-9426f0477218?w=800', tags: ['Hidden Gem', 'Coastal'], travelers: '2.4k' },
    { id: 3, title: 'Tea Valley Trails', location: 'Coonoor', state: 'Tamil Nadu', country: 'India', price: '$20', rating: 4.7, type: 'Nature', img: 'https://images.unsplash.com/photo-1597406083204-500366a70717?w=800', tags: ['Offbeat', 'Hillside'], travelers: '5.1k' },
    { id: 4, title: 'Chettinad Mansions', location: 'Karaikudi', state: 'Tamil Nadu', country: 'India', price: '$45', rating: 4.9, type: 'Architecture', img: 'https://images.unsplash.com/photo-1605465030248-18342f2b3223?w=800', tags: ['Luxury', 'Culture'], travelers: '1.8k' },
    
    // HIMACHAL / NORTH INDIA
    { id: 5, title: 'Cloud Soaring', location: 'Bir Billing', state: 'Himachal', country: 'India', price: '$35', rating: 4.9, type: 'Adventure', img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800', tags: ['Extreme', 'Sky'], travelers: '8.2k' },
    { id: 6, title: 'Spiti Silence', location: 'Tabo', state: 'Himachal', country: 'India', price: 'Free', rating: 5.0, type: 'Monastery', img: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=800', tags: ['Hidden Gem', 'Sacred'], travelers: '900+' },

    // INTERNATIONAL CLUSTER
    { id: 7, title: 'Eiffel Viewpoints', location: 'Paris', state: 'Paris', country: 'France', price: '$25', rating: 4.8, type: 'Iconic', img: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800', tags: ['Famous', 'Romantic'], travelers: '45k' },
    { id: 8, title: 'Tuscany Truffle Hunt', location: 'Siena', state: 'Tuscany', country: 'Italy', price: '$120', rating: 4.9, type: 'Experience', img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800', tags: ['Gourmet', 'Unique'], travelers: '3.3k' },
    { id: 9, title: 'Shibuya Night Life', location: 'Tokyo', state: 'Tokyo', country: 'Japan', price: 'Free', rating: 4.7, type: 'Urban', img: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800', tags: ['Trending', 'Neon'], travelers: '38k' }
  ];

  const categories = [
    { name: 'All', icon: <Globe size={16} /> },
    { name: 'Hidden Gems', icon: <Sparkles size={16} /> },
    { name: 'Adventure', icon: <Zap size={16} /> },
    { name: 'Nature', icon: <MapIcon size={16} /> },
    { name: 'Heritage', icon: <Award size={16} /> }
  ];

  const toggleLike = (id: number) => {
    setLikedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredResults = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return globalDatabase.filter(item => 
      item.title.toLowerCase().includes(q) ||
      item.location.toLowerCase().includes(q) ||
      item.state.toLowerCase().includes(q) ||
      item.country.toLowerCase().includes(q) ||
      item.tags.some(t => t.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[#F1F5F9] font-sans pb-24">
      {/* Dynamic Header */}
      <header className="bg-white/80 backdrop-blur-xl sticky top-0 z-[100] border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center text-white rotate-3">
                <Compass size={20} />
              </div>
              <h1 className="text-xl font-black tracking-tighter text-slate-900">GLOBETROTTER</h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
                <Navigation2 size={18} className="text-slate-600" />
              </button>
              <div className="w-10 h-10 rounded-full bg-slate-900 overflow-hidden border-2 border-white shadow-md">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="profile" />
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className={`flex items-center rounded-2xl bg-slate-100 border-2 transition-all px-5 py-3 ${isSearching ? 'border-black bg-white shadow-xl' : 'border-transparent'}`}>
              <Search className={`${isSearching ? 'text-black' : 'text-slate-400'} mr-3`} size={20} />
              <input 
                type="text"
                className="bg-transparent border-none outline-none flex-1 font-bold text-slate-800 placeholder:text-slate-400"
                placeholder="Where to? (e.g. Tamil Nadu, Paris, Hidden Gems)"
                onFocus={() => setIsSearching(true)}
                onBlur={() => setTimeout(() => setIsSearching(false), 200)}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="p-1 hover:bg-slate-200 rounded-full transition-colors">
                  <X size={16} className="text-slate-500" />
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 mt-6">
        
        {/* Horizontal Category Pill Selector */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat) => (
            <button 
              key={cat.name}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all border ${activeTab === cat.name ? 'bg-black text-white border-black shadow-lg shadow-black/20 scale-105' : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400'}`}
              onClick={() => setActiveTab(cat.name)}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Dynamic Section: Trending Cities / Regions */}
        {!searchQuery && (
          <div className="mt-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                  Top Destinations <TrendingUp size={20} className="text-indigo-500" />
                </h2>
                <p className="text-slate-400 text-sm font-semibold">Hand-picked regions gaining popularity</p>
              </div>
            </div>
            
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4">
              {['Tamil Nadu', 'Tuscany', 'Tokyo', 'Alps', 'Kerala'].map((region, i) => (
                <button 
                  key={i}
                  onClick={() => setSearchQuery(region)}
                  className="bg-white border border-slate-200 p-3 pr-6 rounded-2xl flex items-center gap-3 hover:border-black hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900">
                    <MapIcon size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Explore</p>
                    <p className="text-sm font-black text-slate-800">{region}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results Grid */}
        <div className="mt-10 space-y-12">
          
          {/* Section 1: Major Attractions */}
          {filteredResults.length > 0 && (
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-black text-slate-900">Recommended for You</h2>
                <button className="text-black font-bold text-sm hover:underline">See all</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResults.slice(0, 6).map((item) => (
                  <div key={item.id} className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100">
                    {/* Top Badges */}
                    <div className="absolute top-5 left-5 z-20 flex flex-wrap gap-2">
                       {item.tags.map(tag => (
                         <span key={tag} className="bg-white/90 backdrop-blur-md text-black text-[9px] font-black uppercase px-2.5 py-1 rounded-full shadow-sm">
                           {tag}
                         </span>
                       ))}
                    </div>
                    
                    {/* Like Button */}
                    <button 
                      onClick={() => toggleLike(item.id)}
                      className={`absolute top-5 right-5 z-20 w-11 h-11 rounded-2xl flex items-center justify-center backdrop-blur-md transition-all ${likedItems[item.id] ? 'bg-red-500 text-white shadow-lg' : 'bg-white/20 text-white border border-white/30 hover:bg-white/40'}`}
                    >
                      <Heart size={20} fill={likedItems[item.id] ? "currentColor" : "none"} />
                    </button>

                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                    </div>

                    <div className="p-6 pt-5 space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-indigo-600 font-black text-[10px] uppercase tracking-widest mb-1">{item.type}</p>
                          <h3 className="text-xl font-black text-slate-900 leading-tight">{item.title}</h3>
                          <div className="flex items-center gap-1 text-slate-400 mt-1 font-bold text-sm">
                            <MapPin size={14} /> {item.location}, {item.country}
                          </div>
                        </div>
                        <div className="bg-slate-50 px-3 py-1.5 rounded-xl text-center border border-slate-100">
                          <div className="flex items-center gap-1 text-slate-900 font-black text-sm">
                            <Star size={12} className="text-amber-400" fill="currentColor" /> {item.rating}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                        <div className="flex items-center gap-2">
                           <div className="flex -space-x-2">
                              {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden"><img src={`https://i.pravatar.cc/50?u=${item.id}${i}`} /></div>)}
                           </div>
                           <span className="text-[10px] font-bold text-slate-400">{item.travelers} checked in</span>
                        </div>
                        <p className="text-lg font-black text-slate-900">{item.price}<span className="text-xs text-slate-400 font-bold">/pp</span></p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section 2: Regional Depth (The "Small Places" Logic) */}
          {!searchQuery && (
            <section className="bg-slate-900 rounded-[3.5rem] p-10 lg:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 blur-[120px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full" />
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-2xl text-white">
                    <Sparkles size={18} className="text-amber-300" />
                    <span className="text-xs font-black uppercase tracking-widest">Secret Collector</span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">Beyond the <br/>Guidebooks.</h2>
                  <p className="text-white/60 font-medium text-lg leading-relaxed max-w-md">
                    We source recommendations from local photographers and field researchers to bring you places that don't even have a Google Map pin yet.
                  </p>
                  <button className="bg-white text-black px-8 py-4 rounded-[1.5rem] font-black flex items-center gap-2 hover:scale-105 transition-all">
                    Access Private Collection <MoveRight size={20} />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {globalDatabase.filter(i => i.tags.includes('Hidden Gem')).slice(0, 4).map((item, idx) => (
                    <div key={idx} className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-5 ${idx % 2 !== 0 ? 'mt-8' : ''}`}>
                      <div className="w-full aspect-square rounded-2xl overflow-hidden mb-3">
                        <img src={item.img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                      </div>
                      <h4 className="text-white font-black text-sm">{item.location}</h4>
                      <p className="text-white/40 text-[10px] font-bold uppercase">{item.type}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Empty State */}
          {filteredResults.length === 0 && (
            <div className="text-center py-24 bg-white rounded-[3rem] border-2 border-dashed border-slate-200">
               <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Search size={32} className="text-slate-300" />
               </div>
               <h3 className="text-2xl font-black text-slate-800">Destination Not Found</h3>
               <p className="text-slate-400 font-bold max-w-xs mx-auto mt-2 text-sm leading-relaxed">
                 We couldn't find matches for "{searchQuery}". Try exploring popular states like "Tamil Nadu" or "Tuscany".
               </p>
               <button onClick={() => setSearchQuery('')} className="mt-8 px-6 py-3 bg-slate-900 text-white rounded-2xl font-black text-sm">
                 Clear Search
               </button>
            </div>
          )}
        </div>
      </main>

      {/* Floating Bottom Navigation */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/80 backdrop-blur-2xl border border-slate-200 p-2 rounded-[2.5rem] shadow-2xl z-[100] flex items-center justify-between">
        {[
          { icon: <Compass size={22} />, label: 'Discover', active: true },
          { icon: <Bookmark size={22} />, label: 'Saved', active: false },
          { icon: <Users size={22} />, label: 'Groups', active: false },
          { icon: <Plane size={22} />, label: 'Trips', active: false },
        ].map((item, idx) => (
          <button key={idx} className={`flex flex-col items-center justify-center w-16 h-14 rounded-[2rem] transition-all ${item.active ? 'bg-black text-white' : 'text-slate-400 hover:text-black'}`}>
            {item.icon}
            <span className="text-[8px] font-black uppercase mt-1 tracking-tighter">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default ActivitySearch;