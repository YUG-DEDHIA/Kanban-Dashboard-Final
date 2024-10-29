import React from 'react';

const Header = ({ ticketCounts, toggleLiveMode, liveMode }) => {
  return (
    <div className="header bg-blue-600 p-6 shadow-lg flex justify-between items-center text-white rounded-t-lg">
      <h1 className="text-3xl font-extrabold tracking-wide">Kanban Dashboard</h1>
      <div className="controls flex items-center gap-8">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={liveMode}
            onChange={toggleLiveMode}
            className="h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-300 transition duration-200"
          />
          <span className={`text-xl font-medium ${liveMode ? 'text-green-300' : 'text-white'}`}>Live Mode</span>
        </label>
        <div className="ticket-counts flex gap-6 text-md font-semibold">
          {Object.entries(ticketCounts).map(([status, count]) => (
            <span key={status} className="bg-blue-700 px-4 py-2 rounded-full">
              {status}: {count}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
