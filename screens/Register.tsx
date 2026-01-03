import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="w-full max-w-xl border-4 border-blue-600 p-10 space-y-8">
        <header className="text-center">
          <h1 className="text-3xl font-black uppercase tracking-tighter text-blue-700">
            Registration
          </h1>
          <p className="text-[10px] font-bold uppercase opacity-60 mt-2 text-blue-500">
            Become a world-class traveler
          </p>
        </header>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            navigate('/login');
          }}
        >
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-blue-600">
              First Name
            </label>
            <input
              type="text"
              placeholder="John"
              className="w-full border-b border-blue-600 py-2 outline-none text-blue-700"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-blue-600">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Doe"
              className="w-full border-b border-blue-600 py-2 outline-none text-blue-700"
            />
          </div>

          <div className="md:col-span-2 space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-blue-600">
              Email
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full border-b border-blue-600 py-2 outline-none text-blue-700"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-blue-600">
              City
            </label>
            <input
              type="text"
              placeholder="Mumbai"
              className="w-full border-b border-blue-600 py-2 outline-none text-blue-700"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-blue-600">
              Country
            </label>
            <input
              type="text"
              placeholder="India"
              className="w-full border-b border-blue-600 py-2 outline-none text-blue-700"
            />
          </div>

          <div className="md:col-span-2 pt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-5 font-black uppercase tracking-widest hover:bg-blue-700 transition-all"
            >
              Create Profile
            </button>
          </div>
        </form>

        <p className="text-center text-[10px] font-bold uppercase tracking-widest text-blue-600">
          Already registered?{' '}
          <Link to="/login" className="underline text-blue-700">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
