
import React from 'react';
import { Search, Filter, Star, Clock, MapPin, SlidersHorizontal, ChevronRight } from 'lucide-react';

const ActivitySearch: React.FC = () => {
  const results = [
    { title: 'Tandem Paragliding', location: 'Chamonix, France', price: '$180', rating: 4.9, reviews: 240, duration: '2 hours', img: 'https://picsum.photos/seed/para/400/300' },
    { title: 'Wine Tasting Tour', location: 'Bordeaux, France', price: '$95', rating: 4.7, reviews: 110, duration: '4 hours', img: 'https://picsum.photos/seed/wine/400/300' },
    { title: 'Seine Dinner Cruise', location: 'Paris, France', price: '$120', rating: 4.8, reviews: 1540, duration: '3 hours', img: 'https://picsum.photos/seed/boat/400/300' },
    { title: 'Louvre Private Tour', location: 'Paris, France', price: '$250', rating: 4.9, reviews: 450, duration: '5 hours', img: 'https://picsum.photos/seed/louvre/400/300' },
    { title: 'Cooking Class', location: 'Lyon, France', price: '$110', rating: 4.6, reviews: 88, duration: '3.5 hours', img: 'https://picsum.photos/seed/cook/400/300' },
    { title: 'Biking Through Alps', location: 'Grenoble, France', price: '$55', rating: 4.5, reviews: 320, duration: 'Day trip', img: 'https://picsum.photos/seed/bike/400/300' },
  ];

  return (
    <div className="p-6 lg:p-12 space-y-10">
      <div className="space-y-6">
        <h1 className="text-3xl font-black text-slate-800">Explore Activities</h1>
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex-1 relative min-w-[300px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="What do you want to do? (e.g. Paragliding)" 
              className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>
          <button className="px-6 py-4 bg-white border border-slate-200 rounded-2xl flex items-center gap-2 font-bold hover:bg-slate-50">
            <SlidersHorizontal className="w-5 h-5" /> Filter
          </button>
          <select className="px-6 py-4 bg-white border border-slate-200 rounded-2xl font-bold outline-none">
            <option>Sort by: Most Popular</option>
            <option>Sort by: Price (Low to High)</option>
            <option>Sort by: Newest</option>
          </select>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-600 uppercase tracking-widest text-sm">Found {results.length} results</h3>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {results.map((item, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row group">
              <div className="w-full md:w-80 h-64 relative overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600">
                  Highly Rated
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                        <MapPin className="w-4 h-4" /> {item.location}
                      </div>
                      <h4 className="text-2xl font-bold text-slate-800">{item.title}</h4>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-black text-slate-900">{item.price}</p>
                      <p className="text-xs font-bold text-slate-400 uppercase">per person</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-yellow-50 rounded-full border border-yellow-100">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-bold text-yellow-700">{item.rating}</span>
                      <span className="text-yellow-600/50 text-sm">({item.reviews})</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                      <Clock className="w-4 h-4" /> {item.duration}
                    </div>
                  </div>

                  <p className="text-slate-500 line-clamp-2 max-w-xl">
                    Experience the ultimate adrenaline rush and breathtaking views over the Chamonix valley with professional guides and equipment provided.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(u => (
                      <div key={u} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img src={`https://picsum.photos/seed/user${u}/100/100`} />
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400">+12</div>
                  </div>
                  <button className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-bold hover:bg-slate-800 transition-colors flex items-center gap-2">
                    Book Now <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivitySearch;
