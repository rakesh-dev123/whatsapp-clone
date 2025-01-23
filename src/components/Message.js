import React from 'react';
import './Message.css';

function Message({ text }) {
  return (
    <div className="message">
      <p>{text}</p>
    </div>
  );
}

export default Message;
