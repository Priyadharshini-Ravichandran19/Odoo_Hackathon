
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Camera, Mail, Phone, Map, Globe, User, Info } from 'lucide-react';

const Register: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6 py-12">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-8 space-y-8">
        <div className="text-center space-y-4">
          <div className="relative inline-block group">
            <div className="w-24 h-24 bg-slate-100 rounded-full border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
              <User className="w-10 h-10 text-slate-300" />
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-blue-600 rounded-full text-white shadow-lg group-hover:scale-110 transition-transform">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Create New Account</h1>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => { e.preventDefault(); navigate('/login'); }}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 ml-1">First Name</label>
            <input type="text" placeholder="John" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 ml-1">Last Name</label>
            <input type="text" placeholder="Doe" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 ml-1">Email Address</label>
            <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 ml-1">Phone Number</label>
            <input type="tel" placeholder="+1 234 567 890" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 ml-1">City</label>
            <input type="text" placeholder="New York" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 ml-1">Country</label>
            <input type="text" placeholder="United States" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-sm font-medium text-slate-700 ml-1">Additional Information</label>
            <textarea placeholder="Tell us about your travel preferences..." className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]" />
          </div>

          <div className="md:col-span-2 pt-4">
            <button type="submit" className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-xl shadow-blue-100 transition-all">
              Register Users
            </button>
          </div>
        </form>

        <p className="text-center text-slate-500">
          Already have an account? <Link to="/login" className="text-blue-600 font-semibold">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
