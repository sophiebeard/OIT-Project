import React from 'react'
import Feeds from './Components/Feeds.jsx'
import './App.css';

const App = () => {
  return (
    <>
      <header className="App-header" style={{ textAlign: 'center' }}>
        <h1>Out In Tech Instagram Project</h1>
      </header>

      <Feeds className="body" token={process.env.REACT_APP_INS_TOKEN} limit={20} />
    </>
  );
}

export default App;

