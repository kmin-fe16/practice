import { Component, useState } from "readt";
import "./App.css";

function functionApp() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Count counter={counter} />
      <button
        onClick={() => {
          setCounter((prev) => prev + 3);
        }}
      >
        +
      </button>
    </>
  );
}
