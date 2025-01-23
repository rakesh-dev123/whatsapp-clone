import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import the WhatsApp icon
import './Sidebar.css';

function Sidebar({ chats, setActiveChatId }) {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <FaWhatsapp size={60} color="#25D366" /> {/* WhatsApp Icon */}
        <h2>WhatsApp Clone</h2>
      </div>
      <div className="sidebar-chat-list">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="sidebar-chat"
            onClick={() => setActiveChatId(chat.id)}
          >
            <h3>{chat.name}</h3>
            <p>{chat.msg}</p>
            <p>{chat.messages[chat.messages.length - 1]?.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
