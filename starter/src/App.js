import React from "react";
import Posts from "./Components/Posts";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Simple Instagram</h1>
      </header>
      <div className="content"></div>
      <Posts />
    </div>
  );
}

export default App;
