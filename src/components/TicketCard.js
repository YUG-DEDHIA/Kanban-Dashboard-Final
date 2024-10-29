import React, { useState } from 'react';
import useStore from '../store/useStore';
import classNames from 'classnames';

const TicketCard = ({ ticket }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(ticket.title);
  const [description, setDescription] = useState(ticket.description);
  const updateTicketContent = useStore((state) => state.updateTicketContent);

  const handleSave = () => {
    updateTicketContent(ticket.id, title, description);
    setIsEditing(false);
  };

  const statusColors = {
    'To Do': 'bg-yellow-100 text-yellow-800',
    'In Progress': 'bg-blue-100 text-blue-800',
    'Blocked': 'bg-red-100 text-red-800',
    'Done': 'bg-green-100 text-green-800',
  };

  return (
    <div
      className={classNames(
        'ticket-card p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out border',
        {
          'bg-gray-100 border-gray-300': isEditing,
          'bg-gray-50 border-gray-200': !isEditing,
        }
      )}
    >
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
          <p
            className={classNames(
              'text-sm font-medium mt-2 px-2 py-1 rounded-full inline-block',
              statusColors[ticket.status]
            )}
          >
            {ticket.status}
          </p>
          <div className="mt-2 flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white px-3 py-1 rounded-md"
            >
              Edit
            </button>

          </div>
        </>
      )}
    </div>
  );
};

export default TicketCard;
