import React from 'react';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Chat from './Chat/Chat';

function App() {
  return (
    <div className="app">
      <h1>suhail</h1>
      <div className='app__body'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
