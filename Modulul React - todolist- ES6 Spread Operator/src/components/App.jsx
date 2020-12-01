import React, { useState } from "react";

function App() {
  const [inputItem, setInputItem] = useState("");
  const [item, setAdd] = useState([]);

  function headleChange(event) {
    const newValue = event.target.value;

    setInputItem(newValue);
  }

  function addItems() {
    setAdd((prevItems) => {
      return [...prevItems, inputItem];
    });
    setInputItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={headleChange} type="text" value={inputItem} />

        <button onClick={addItems}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {item.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
