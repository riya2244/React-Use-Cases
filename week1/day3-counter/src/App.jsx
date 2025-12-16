import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <h1 className="title">Button Click Counter</h1>
      <p className="counter">Clicked: {count} times</p>

      <button className="btn" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;
