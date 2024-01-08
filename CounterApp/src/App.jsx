import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(1);

  const addValue = () => {
    console.log("value added", counter);
    if(counter < 20)
    setCounter(counter + 1);
  };

  const removeValue = () => {
    console.log("value removed", counter);
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h1>Counter value: {counter}</h1>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Decrease Value </button>
    </>
  );
}

export default App;
