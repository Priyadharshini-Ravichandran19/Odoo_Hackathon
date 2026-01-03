
import React, { useState } from 'react';
import { Search, MapPin, Calendar, Sparkles, Loader2, Info, ArrowRight } from 'lucide-react';
import { getTravelSuggestions } from '../services/geminiService';

const CreateTrip: React.FC = () => {
  const [dest, setDest] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!dest) return;
    setLoading(true);
    const data = await getTravelSuggestions(dest);
    setResults(data);
    setLoading(false);
  };

  return (
    <div className="p-6 lg:p-12 space-y-10 max-w-6xl mx-auto">
      <header className="space-y-2">
        <h1 className="text-4xl font-black text-slate-800 tracking-tight">Draft Your Trip</h1>
        <p className="text-slate-500 font-medium italic">"The world is a book and those who do not travel read only one page."</p>
      </header>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-80 space-y-6">
          <div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 space-y-6">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Destination</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
                <input 
                  value={dest}
                  onChange={(e) => setDest(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500" 
                  placeholder="Paris, France" 
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Dates</label>
                <input type="date" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-sm font-semibold text-slate-700" />
              </div>
            </div>
            <button 
              onClick={handleSearch}
              disabled={loading}
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
              AI Plan Suggestion
            </button>
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h3 className="text-xl font-bold text-slate-800">Explore Highlights</h3>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase">Curated by Gemini</span>
          </div>
          
          {results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {results.map((r, i) => (
                <div key={i} className="bg-white rounded-[32px] p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                  <h4 className="text-xl font-black text-slate-800 group-hover:text-blue-600 transition-colors mb-4">{r.title}</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Description</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{r.description}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Top Highlights</p>
                      <p className="text-sm font-bold text-slate-700">{r.highlights}</p>
                    </div>
                    <div className="pt-2 border-t border-slate-50 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        <span className="text-xs font-bold text-slate-500">{r.bestTime}</span>
                      </div>
                      <button className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:underline">
                        Add to Trip <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-80 bg-white border-2 border-dashed border-slate-100 rounded-[40px] flex flex-col items-center justify-center text-slate-300 gap-4">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center">
                <Search className="w-8 h-8" />
              </div>
              <p className="font-bold text-sm uppercase tracking-widest">Enter a destination to see AI magic</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;
