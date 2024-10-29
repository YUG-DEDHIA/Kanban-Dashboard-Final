import React from 'react';
//  This component will be used to display the header of the dashboard
const Header = ({ ticketCounts, toggleLiveMode, liveMode }) => {
  return (
    <div className="header bg-blue-600 p-4 shadow-lg flex justify-between items-center text-white rounded-t-md">
      <h1 className="text-2xl font-bold">Kanban Dashboard</h1>
      <div className="controls flex items-center gap-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={liveMode}
            onChange={toggleLiveMode}
            className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="text-lg">Live Mode</span>
        </label>
        <div className="ticket-counts flex gap-4 text-sm font-medium">
          {Object.entries(ticketCounts).map(([status, count]) => (
            <span key={status} className="bg-blue-700 px-3 py-1 rounded-full">
              {status}: {count}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
