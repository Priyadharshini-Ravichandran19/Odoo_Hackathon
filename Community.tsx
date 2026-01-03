
import React from 'react';
import { Search, Filter, MessageSquare, Heart, Share2, MoreHorizontal, Globe } from 'lucide-react';

const Community: React.FC = () => {
  const posts = [
    {
      user: 'Sarah Miller',
      avatar: 'https://picsum.photos/seed/sarah/100/100',
      location: 'Cinque Terre, Italy',
      text: 'Just finished the Blue Path hike between Vernazza and Monterosso. The views are absolutely breathtaking! Highly recommend starting early to avoid the heat.',
      img: 'https://picsum.photos/seed/italy/1000/600',
      likes: '1.2k',
      comments: 84
    },
    {
      user: 'Marco Rossi',
      avatar: 'https://picsum.photos/seed/marco/100/100',
      location: 'Kyoto, Japan',
      text: 'Fushimi Inari-taisha is magical at dusk. The crowds disappear and the lanterns start to glow. Truly a spiritual experience.',
      img: 'https://picsum.photos/seed/kyoto/1000/600',
      likes: '850',
      comments: 32
    }
  ];

  return (
    <div className="p-6 lg:p-12 max-w-4xl mx-auto space-y-10">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-black text-slate-800">Community</h1>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700">Post an Update</button>
        </div>
        
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input type="text" placeholder="Search community posts, tags, or travelers..." className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl outline-none" />
          </div>
          <button className="p-3.5 bg-white border border-slate-200 rounded-2xl"><Filter className="w-5 h-5" /></button>
        </div>
      </div>

      <div className="space-y-10">
        {posts.map((post, i) => (
          <article key={i} className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-slate-50">
                    <img src={post.avatar} alt={post.user} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">{post.user}</h4>
                    <p className="text-sm text-slate-400 flex items-center gap-1"><Globe className="w-3 h-3"/> {post.location}</p>
                  </div>
                </div>
                <button className="p-2 text-slate-300 hover:text-slate-500"><MoreHorizontal /></button>
              </div>

              <p className="text-slate-600 text-lg leading-relaxed mb-6">{post.text}</p>
              
              <div className="rounded-[32px] overflow-hidden aspect-[16/9] mb-6">
                <img src={post.img} alt="Post" className="w-full h-full object-cover" />
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-slate-500 font-bold hover:text-red-500 transition-colors">
                    <Heart className="w-6 h-6" /> {post.likes}
                  </button>
                  <button className="flex items-center gap-2 text-slate-500 font-bold hover:text-blue-500 transition-colors">
                    <MessageSquare className="w-6 h-6" /> {post.comments}
                  </button>
                </div>
                <button className="p-2 text-slate-400 hover:text-blue-500"><Share2 className="w-6 h-6" /></button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Community;
