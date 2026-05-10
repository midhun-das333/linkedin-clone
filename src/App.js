import React, { useState } from 'react';

import Login from './components/Login';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

import './App.css';

function App() {

  const [user, setUser] = useState(null);

  return (
    <div className="app">

      {!user ? (

        <Login setUser={setUser} />

      ) : (

        <>
          <Header setUser={setUser} />

          <div className="app__body">

            <Sidebar user={user} />

            <Feed user={user} />

          </div>
        </>

      )}

    </div>
  );
}

export default App;