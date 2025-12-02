import React, { useRef, useEffect } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null); // Step 1: Create ref

  useEffect(() => {
    inputRef.current.focus(); // Step 3: Focus input on load
  }, []);

  return (
    <div className="container">
      <h1 className="title">Focus Input on Page Load</h1>

      {/* Step 2: Apply ref */}
      <input
        ref={inputRef}
        type="text"
        placeholder="This will be auto-focused..."
        className="input-box"
      />
    </div>
  );
}

export default App;
