import { Component, useState } from "react";
import "./App.css";

function FunctionApp() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Count
        counter={counter}
        hello={"hello"}
        array={[1, 2, 3, "안녕하세요"]}
      />
      <button
        onClick={() => {
          setCounter((prev) => prev + 3);
        }}
      >
        {" "}
        +
      </button>
      <button
        onClick={() => {
          setCounter((prev) => prev - 3);
        }}
      >
        {" "}
        -
      </button>
    </>
  );
}
function Count({ array, counter, hello }) {
  console.log("array", array);
  console.log("counter", counter);
  console.log("hello", hello);
  return <div>counter : {counter}</div>;
}
export default FunctionApp;
