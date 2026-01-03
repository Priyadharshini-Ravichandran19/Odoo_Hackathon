
import React, { useState } from 'react';
import { Calendar, MapPin, Sparkles, Loader2, ArrowRight } from 'lucide-react';
import { getTravelSuggestions } from '../services/geminiService';
import { Link } from 'react-router-dom';

const CreateTrip: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchSuggestions = async () => {
    if (!destination) return;
    setLoading(true);
    const data = await getTravelSuggestions(destination);
    setSuggestions(data);
    setLoading(false);
  };

  return (
    <div className="p-6 lg:p-12 max-w-6xl mx-auto space-y-12">
      <div className="space-y-2">
        <h1 className="text-4xl font-black text-slate-800">Plan a new trip</h1>
        <p className="text-slate-500 text-lg">Where would you like to go next?</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-1 space-y-6 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 self-start">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-500" /> Select a Place
            </label>
            <input 
              type="text" 
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="e.g. Paris, Tokyo, Bali..." 
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-500" /> Start Date
              </label>
              <input type="date" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-500" /> End Date
              </label>
              <input type="date" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <button 
            onClick={fetchSuggestions}
            disabled={loading || !destination}
            className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 disabled:opacity-50 hover:bg-blue-700 transition-all"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
            Get Suggestions
          </button>
        </div>

        {/* Suggestions */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-bold text-slate-800">Suggestions for Places to Visit/Activities</h3>
          {suggestions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {suggestions.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 font-bold text-lg">
                    {idx + 1}
                  </div>
                  <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-500 line-clamp-2">{item.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="aspect-video rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 gap-4">
              <Compass className="w-16 h-16 opacity-20" />
              <p>Search for a destination to see AI suggestions</p>
            </div>
          )}
          
          {suggestions.length > 0 && (
            <div className="flex justify-end pt-4">
              <Link to="/build-itinerary" className="px-8 py-4 bg-slate-800 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-900 shadow-lg">
                Continue to Builder <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Compass: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

export default CreateTrip;
