import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [tName, setTName] = useState("");
  function userInput(event) {
    setTName(event.target.value);
  }
  function onSubmit(event) {
    setName(tName);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={userInput}
          type="text"
          placeholder="What's your name?"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
