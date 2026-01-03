
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import { 
  Search, MapPin, Calendar, User as UserIcon, Settings, 
  Menu, Bell, Plus, LayoutDashboard, Compass, Users, LogOut, ChevronLeft, ChevronRight, Filter, Grid
} from 'lucide-react';

// Screens
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
      <div className="min-h-screen bg-slate-50 flex flex-col">
        {isLoggedIn && <Header onLogout={() => setIsLoggedIn(false)} />}
        <main className="flex-1 flex overflow-hidden">
          {isLoggedIn && <Sidebar />}
          <div className="flex-1 overflow-y-auto relative">
            <Routes>
              {/* Auth Screens */}
              <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
              <Route path="/register" element={<Register />} />
              
              {/* App Screens */}
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
      </div>
    </HashRouter>
  );
};

const Header: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  return (
    <header className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
          <MapPin className="text-white w-6 h-6" />
        </div>
        <h1 className="text-xl font-bold tracking-tight text-slate-800">GlobalTrotter</h1>
      </div>
      
      <div className="flex-1 max-w-xl mx-8 hidden md:block">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search trips, places, activities..." 
            className="w-full bg-slate-100 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full">
          <Bell className="w-5 h-5" />
        </button>
        <div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300 overflow-hidden">
          <img src="https://picsum.photos/seed/user/100/100" alt="Avatar" />
        </div>
        <button onClick={onLogout} className="text-slate-500 hover:text-red-600 p-2">
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

const Sidebar: React.FC = () => {
  const location = useLocation();
  const menuItems = [
    { icon: Compass, label: 'Explore', path: '/' },
    { icon: Plus, label: 'New Trip', path: '/create-trip' },
    { icon: Grid, label: 'My Trips', path: '/my-trips' },
    { icon: Users, label: 'Community', path: '/community' },
    { icon: Calendar, label: 'Calendar', path: '/calendar' },
    { icon: UserIcon, label: 'Profile', path: '/profile' },
    { icon: LayoutDashboard, label: 'Admin', path: '/admin' },
  ];

  return (
    <aside className="w-20 lg:w-64 bg-white border-r border-slate-200 flex flex-col p-4 gap-2 hidden sm:flex">
      {menuItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
              isActive 
                ? 'bg-blue-50 text-blue-600 font-semibold' 
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <item.icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
            <span className="hidden lg:block truncate">{item.label}</span>
          </Link>
        );
      })}
    </aside>
  );
};

export default App;
