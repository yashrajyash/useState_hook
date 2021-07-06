import React, { useState } from "react";

function App() {
  const [state, updateState] = useState(0);

  function increase() {
    updateState(state + 1);
  }

  function decrease() {
    updateState(state - 1);
  }

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
