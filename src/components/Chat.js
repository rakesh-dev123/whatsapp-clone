import React, { useState } from 'react';
import './Chat.css'; // Add any custom styles if needed, but Bootstrap will handle most of the styling.

function Chat({ chat, sendMessage }) {
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  if (!chat) {
    return <div className="chat p-3">Select a chat to start messaging</div>;
  }

  return (
    <div className="chat d-flex flex-column h-100">
      {/* Chat Header */}
      <div className="chat-header d-flex align-items-center p-3 bg-success text-white">
        <img
          src={chat.avatar}
          alt={`${chat.name}'s avatar`}
          className="rounded-circle me-3"
          style={{ width: '40px', height: '40px' }}
        />
        <h5 className="m-0">{chat.name}</h5>
      </div>

      {/* Chat Body */}
      <div className="chat-body flex-grow-1 overflow-auto p-3 bg-light">
        {chat.messages.map((message, index) => (
          <div key={index} className="d-flex align-items-start mb-3">
            <img
              src={chat.avatar}
              alt={`${chat.name}'s avatar`}
              className="rounded-circle me-3"
              style={{ width: '30px', height: '30px' }}
            />
            <div className="p-2 bg-white rounded shadow-sm">
              <p className="m-0">{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Footer */}
      <div className="chat-footer d-flex align-items-center p-3 bg-light">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
          className="form-control me-3"
        />
        <button className="btn btn-success" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
