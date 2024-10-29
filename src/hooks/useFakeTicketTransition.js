import { useEffect } from 'react';
import useStore from '../store/useStore';
// This hook will be used to simulate ticket transitions in live mode
const useFakeTicketTransition = () => {
  const liveMode = useStore((state) => state.liveMode);
  const updateTicketStatus = useStore((state) => state.updateTicketStatus);
  const tickets = useStore((state) => state.tickets); // Accessing tickets from the store

  useEffect(() => {
    if (!liveMode) return;

    const interval = setInterval(() => {
      const randomTicket = tickets[Math.floor(Math.random() * tickets.length)];
      if (randomTicket) {
        const nextStatus = {
          'To Do': 'In Progress',
          'In Progress': Math.random() > 0.5 ? 'Blocked' : 'Done',
          'Blocked': 'In Progress',
        }[randomTicket.status];
        if (nextStatus) {
          updateTicketStatus(randomTicket.id, nextStatus);
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [liveMode, updateTicketStatus, tickets]); // Added tickets to dependencies
};

export default useFakeTicketTransition;
