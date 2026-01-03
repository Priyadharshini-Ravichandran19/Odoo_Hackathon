
import React, { useState } from 'react';
import { Plus, Trash2, Calendar, DollarSign, Edit3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BuildItinerary: React.FC = () => {
  const [sections, setSections] = useState([
    { id: '1', title: 'Flight to Paris', content: 'Air France AF223, Terminal 2E. Reservation #XYZ123.', dates: 'Nov 12 - Nov 12', budget: '$850' },
    { id: '2', title: 'Hotel Lutetia', content: 'St Germain des Prés. Check-in after 3 PM. 5-star palace hotel with spa.', dates: 'Nov 12 - Nov 18', budget: '$2,400' },
  ]);

  const addSection = () => {
    const newId = (sections.length + 1).toString();
    setSections([...sections, { id: newId, title: `Section ${newId}`, content: 'Click to edit details about this segment...', dates: 'Set dates', budget: '$0' }]);
  };

  return (
    <div className="p-6 lg:p-12 max-w-4xl mx-auto space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-slate-800">Build Itinerary</h1>
          <p className="text-slate-500">Organize your trip into manageable sections</p>
        </div>
        <Link to="/itinerary-view" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-blue-100">
          Save Trip <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      <div className="space-y-6">
        {sections.map((section, idx) => (
          <div key={section.id} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 group">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center font-bold">
                  {idx + 1}
                </span>
                <input 
                  type="text" 
                  value={section.title} 
                  className="text-xl font-bold text-slate-800 outline-none border-b-2 border-transparent focus:border-blue-500" 
                  readOnly={false} 
                />
              </div>
              <button className="p-2 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
            
            <textarea 
              className="w-full bg-slate-50 p-4 rounded-xl text-slate-600 mb-6 min-h-[100px] outline-none border-2 border-transparent focus:border-blue-100"
              defaultValue={section.content}
            />

            <div className="flex flex-wrap gap-4">
              <div className="flex-1 flex items-center gap-3 bg-white border border-slate-200 p-3 rounded-xl">
                <Calendar className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400">Date Range</p>
                  <p className="font-semibold text-slate-700">{section.dates}</p>
                </div>
              </div>
              <div className="flex-1 flex items-center gap-3 bg-white border border-slate-200 p-3 rounded-xl">
                <DollarSign className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400">Section Budget</p>
                  <p className="font-semibold text-slate-700">{section.budget}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button 
          onClick={addSection}
          className="w-full py-8 border-2 border-dashed border-slate-200 rounded-3xl flex items-center justify-center gap-3 text-slate-400 hover:border-blue-300 hover:text-blue-500 hover:bg-blue-50 transition-all font-bold"
        >
          <Plus className="w-6 h-6" /> Add another Section
        </button>
      </div>
    </div>
  );
};

export default BuildItinerary;
