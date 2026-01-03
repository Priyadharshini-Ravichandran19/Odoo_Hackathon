
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import { 
  Search, MapPin, Calendar, User as UserIcon, 
  Plus, LayoutDashboard, Compass, Users, LogOut, Grid, Bell, Menu
} from 'lucide-react';

import Login from './screens/Login';
import Register from './screens/Register';
import Landing from './screens/Landing';
import CreateTrip from './screens/CreateTrip';
import BuildItinerary from './screens/BuildItinerary';
import TripListing from './screens/TripListing';
import Profile from './screens/Profile';
import ActivitySearch from './screens/ActivitySearch';
import ItineraryView from './screens/ItineraryView';
import Community from './screens/Community';
import CalendarView from './screens/CalendarView';
import AdminPanel from './screens/AdminPanel';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
        {isLoggedIn && <Header onLogout={() => setIsLoggedIn(false)} />}
        <main className={`flex-1 flex overflow-hidden`}>
          {isLoggedIn && <Sidebar />}
          <div className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={isLoggedIn ? <Landing /> : <Navigate to="/login" />} />
              <Route path="/create-trip" element={<CreateTrip />} />
              <Route path="/build-itinerary" element={<BuildItinerary />} />
              <Route path="/my-trips" element={<TripListing />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/search" element={<ActivitySearch />} />
              <Route path="/itinerary-view" element={<ItineraryView />} />
              <Route path="/community" element={<Community />} />
              <Route path="/calendar" element={<CalendarView />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </main>
        {isLoggedIn && <BottomNav />}
      </div>
    </HashRouter>
  );
};

const Header: React.FC<{ onLogout: () => void }> = ({ onLogout }) => (
  <header className="glass-nav px-6 py-4 flex items-center justify-between sticky top-0 z-50">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
        <MapPin className="text-white w-6 h-6" />
      </div>
      <div>
        <h1 className="text-xl font-bold tracking-tight text-slate-800">GlobalTrotter</h1>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Premium Travel</p>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all">
        <Bell className="w-5 h-5" />
      </button>
      <button onClick={onLogout} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all">
        <LogOut className="w-5 h-5" />
      </button>
    </div>
  </header>
);

const Sidebar: React.FC = () => {
  const location = useLocation();
  const menuItems = [
    { icon: Compass, label: 'Explore', path: '/' },
    { icon: Plus, label: 'Create Trip', path: '/create-trip' },
    { icon: Grid, label: 'My Library', path: '/my-trips' },
    { icon: Users, label: 'Community', path: '/community' },
    { icon: Calendar, label: 'Calendar', path: '/calendar' },
    { icon: UserIcon, label: 'Profile', path: '/profile' },
    { icon: LayoutDashboard, label: 'Analytics', path: '/admin' },
  ];

  return (
    <aside className="w-72 bg-white border-r border-slate-100 p-6 hidden lg:flex flex-col gap-2 shadow-sm">
      <div className="mb-6 px-4">
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Main Menu</p>
      </div>
      {menuItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-200 ${
            location.pathname === item.path 
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 font-bold' 
              : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
          }`}
        >
          <item.icon className={`w-5 h-5 ${location.pathname === item.path ? 'text-white' : ''}`} />
          <span className="text-sm">{item.label}</span>
        </Link>
      ))}
    </aside>
  );
};

const BottomNav: React.FC = () => {
  const location = useLocation();
  const items = [
    { icon: Compass, path: '/' },
    { icon: Plus, path: '/create-trip' },
    { icon: Grid, path: '/my-trips' },
    { icon: UserIcon, path: '/profile' },
  ];
  return (
    <nav className="lg:hidden fixed bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl border border-white/50 rounded-3xl flex items-center justify-around h-16 shadow-2xl z-50">
      {items.map((item) => (
        <Link 
          key={item.path} 
          to={item.path} 
          className={`p-3 rounded-2xl transition-all ${
            location.pathname === item.path ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-slate-400'
          }`}
        >
          <item.icon className="w-5 h-5" />
        </Link>
      ))}
    </nav>
  );
}

export default App;
