import React from 'react';
import './App.scss';
import Sidebar from './compornents/sidebar/sidebar';
import Chat from './compornents/sidebar/Chat/Chat';

function App() {
  return (
    <div className='App'>
    <Sidebar/>

    {/* { chat } */}
    <Chat />
    </div>
  );
}

export default App;
