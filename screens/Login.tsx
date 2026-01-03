
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const Login: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
      <div className="w-full max-w-md bg-white rounded-[40px] p-10 shadow-2xl border border-slate-100 space-y-10">
        <div className="text-center space-y-2">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">Welcome Back</h1>
          <p className="text-sm text-slate-500 font-medium">Continue your global journey</p>
        </div>
        
        <div className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Email Address</label>
            <input 
              type="text" 
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              placeholder="alex@travel.com"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Password</label>
            <input 
              type="password" 
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              placeholder="••••••••"
            />
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <button 
            onClick={onLogin}
            className="w-full bg-blue-600 text-white py-5 rounded-3xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
          >
            Sign In
          </button>
          <p className="text-center text-sm font-medium text-slate-500">
            Don't have an account? <Link to="/register" className="text-blue-600 font-bold hover:underline">Register now</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
