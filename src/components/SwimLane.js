import React, { useState, useEffect } from 'react';
import TicketCard from './TicketCard';
//  This component will be used to display a swimlane of tickets
const SwimLane = ({ title, tickets }) => {
  const [visibleTickets, setVisibleTickets] = useState([]);

  useEffect(() => {
    // Load initial tickets (e.g., first 20)
    setVisibleTickets(tickets.slice(0, 20));
  }, [tickets]);

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 1;
    if (bottom) {
      // Load more tickets when scrolled to the bottom
      setVisibleTickets((prev) => [...prev, ...tickets.slice(prev.length, prev.length + 20)]);
    }
  };

  return (
    <div
      className="swimlane flex-1 bg-white border border-gray-300 p-4 rounded-md shadow-md max-h-screen overflow-y-auto"
      onScroll={handleScroll}
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">
        {title} ({tickets.length})
      </h2>
      <div className="space-y-4">
        {visibleTickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
  
};

export default SwimLane;
