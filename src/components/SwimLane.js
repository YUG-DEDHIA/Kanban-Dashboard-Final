import React, { useState, useEffect } from 'react';
import TicketCard from './TicketCard';

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
      className="swimlane flex-1 min-w-[300px] bg-blue-50 border border-blue-300 p-4 rounded-lg shadow-md max-h-screen overflow-y-auto"
      onScroll={handleScroll}
    >
      <h2 className="text-2xl font-semibold mb-4 text-blue-600 border-b-2 border-blue-400 pb-2">
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
