import React, { useState } from 'react';
import useStore from '../store/useStore';

const TicketCard = ({ ticket }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(ticket.title);
  const [description, setDescription] = useState(ticket.description);
  const updateTicketContent = useStore((state) => state.updateTicketContent);

  const handleSave = () => {
    // Update the ticket in the store
    updateTicketContent(ticket.id, title, description);
    setIsEditing(false);
  };

  return (
    <div className="ticket-card bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out border border-gray-200">
      {isEditing ? (
        <>
          <input
            className="text-lg font-bold text-gray-800 mt-1 w-full border border-gray-300 p-2 rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="text-gray-600 mt-2 w-full border border-gray-300 p-2 rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="mt-2 flex gap-2">
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-3 py-1 rounded-md"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white px-3 py-1 rounded-md"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <span className="ticket-id text-xs font-semibold text-gray-500">#{ticket.id}</span>
          <h3 className="text-lg font-bold text-gray-800 mt-1">{ticket.title}</h3>
          <p className="text-gray-600 mt-2">{ticket.description}</p>
          <p className="text-gray-600 mt-2">Status: {ticket.status}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-md"
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default TicketCard;
