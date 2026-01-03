
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area
} from 'recharts';
import { Users, MapPin, Activity, Download, ArrowUpRight } from 'lucide-react';

const AdminPanel: React.FC = () => {
  const data = [
    { name: 'Mon', val: 400 },
    { name: 'Tue', val: 300 },
    { name: 'Wed', val: 600 },
    { name: 'Thu', val: 800 },
    { name: 'Fri', val: 500 },
    { name: 'Sat', val: 900 },
    { name: 'Sun', val: 1000 },
  ];

  const stats = [
    { label: 'Active Users', val: '12.4K', icon: Users, color: 'bg-blue-500', trend: '+12%' },
    { label: 'Destinations', val: '854', icon: MapPin, color: 'bg-indigo-500', trend: '+5%' },
    { label: 'Interactions', val: '3.2K', icon: Activity, color: 'bg-emerald-500', trend: '+24%' },
  ];

  return (
    <div className="p-6 lg:p-12 space-y-10">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">Analytics Dashboard</h1>
          <p className="text-slate-500 font-medium">Real-time performance and user engagement</p>
        </div>
        <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-slate-800 transition-all">
          <Download className="w-4 h-4" /> Download Report
        </button>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm flex items-start justify-between">
            <div className="space-y-4">
              <div className={`w-12 h-12 ${s.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                <s.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{s.label}</p>
                <h4 className="text-3xl font-black text-slate-800">{s.val}</h4>
              </div>
            </div>
            <div className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
              <ArrowUpRight className="w-3 h-3" /> {s.trend}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-sm space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-800">User Traffic Growth</h3>
            <select className="bg-slate-50 border-none rounded-lg text-xs font-bold px-3 py-1.5 outline-none">
              <option>Last 7 Days</option>
              <option>Last Month</option>
            </select>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{background: '#1e293b', color: '#fff', border: 'none', borderRadius: '16px', padding: '12px'}}
                  itemStyle={{color: '#fff'}}
                />
                <Area type="monotone" dataKey="val" stroke="#2563eb" fillOpacity={1} fill="url(#colorVal)" strokeWidth={4} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-sm space-y-8">
          <h3 className="font-bold text-slate-800">Weekly Trip Bookings</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                   cursor={{fill: '#f8fafc'}}
                   contentStyle={{background: '#1e293b', color: '#fff', border: 'none', borderRadius: '16px'}}
                />
                <Bar dataKey="val" fill="#2563eb" radius={[8, 8, 0, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
