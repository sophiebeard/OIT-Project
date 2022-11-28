import React from 'react'
import Feeds from './Components/Feeds.jsx'

const App = () => {
  return (
    <>
      <header className="App-header" style={{ textAlign: 'center' }}>
        <h1>Out In Tech Instagram Project</h1>
      </header>

      <Feeds token={process.env.REACT_APP_INS_TOKEN} limit={3} />
    </>
  );
}

export default App;

