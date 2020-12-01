import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increse() {
    setCount(count + 1);
  }
  function decrese() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrese}>-</button>
      <button onClick={increse}>+</button>
    </div>
  );
}

export default App;
