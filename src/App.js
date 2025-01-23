import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [chats, setChats] = useState([
    { id: 1, name: 'Dhanush vanam', avatar: 'https://ui-avatars.com/api/?name=John+Doe',msg :"How are you ?" ,messages: [] },
    { id: 2, name: 'K Naveen', avatar: 'https://ui-avatars.com/api/?name=Jane+Doe',msg :"I have been reached ", messages: [] },
    { id: 3, name: 'vennala Chandh', avatar: 'https://ui-avatars.com/api/?name=Alice', msg :"Have a nice day !!!",messages: [] },
  ]);
  const [activeChatId, setActiveChatId] = useState(1);

  const activeChat = chats.find((chat) => chat.id === activeChatId);

  const sendMessage = (messageText) => {
    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === activeChatId
          ? { ...chat, messages: [...chat.messages, { id: Date.now(), text: messageText }] }
          : chat
      )
    );
  };

  return (
    <div className="app">
      <Sidebar chats={chats} setActiveChatId={setActiveChatId} />
      <Chat chat={activeChat} sendMessage={sendMessage} />
    </div>
  );
}

export default App;
