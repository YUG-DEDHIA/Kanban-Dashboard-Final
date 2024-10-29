import React from 'react';
import Header from './components/Header';
import SwimLane from './components/SwimLane';
import useStore from './store/useStore';
import useFakeTicketTransition from './hooks/useFakeTicketTransition';

function App() {
  const tickets = useStore((state) => state.tickets);
  const toggleLiveMode = useStore((state) => state.toggleLiveMode);
  const liveMode = useStore((state) => state.liveMode);

  useFakeTicketTransition();

  const ticketsByStatus = tickets.reduce((acc, ticket) => {
    acc[ticket.status] = acc[ticket.status] || [];
    acc[ticket.status].push(ticket);
    return acc;
  }, {});

  return (
    <div className="App">
      <Header
        ticketCounts={Object.fromEntries(
          Object.entries(ticketsByStatus).map(([status, tickets]) => [status, tickets.length])
        )}
        liveMode={liveMode}
        toggleLiveMode={toggleLiveMode}
      />
      <div className="kanban-board flex flex-row space-x-4 p-4 overflow-x-auto">
        {['To Do', 'In Progress', 'Blocked', 'Done'].map((status) => (
          <SwimLane key={status} title={status} tickets={ticketsByStatus[status] || []} />
        ))}
      </div>
    </div>
  );
}

export default App;
