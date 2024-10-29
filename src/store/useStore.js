import { create } from 'zustand'; // Update this line
import { generateTickets } from '../data/generateTickets';

const tickets = generateTickets();

const useStore = create((set) => ({
  tickets,
  liveMode: false,
  toggleLiveMode: () => set((state) => ({ liveMode: !state.liveMode })),
  
  updateTicketStatus: (id, newStatus) =>
    set((state) => ({
      tickets: state.tickets.map((ticket) =>
        ticket.id === id ? { ...ticket, status: newStatus } : ticket
      ),
    })),
  
  updateTicketContent: (id, newTitle, newDescription) =>
    set((state) => ({
      tickets: state.tickets.map((ticket) =>
        ticket.id === id ? { ...ticket, title: newTitle, description: newDescription } : ticket
      ),
    })),
}));

export default useStore;
