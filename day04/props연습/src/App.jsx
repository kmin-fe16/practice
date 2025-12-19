import { Component, useState } from "react";
import "./App.css";

function FunctionApp() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Count
        counter={counter}
        hello={"hellow"}
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
function Count(props) {
  console.log("props", props);
  return <div>counter : {props.counter}</div>;
}
export default FunctionApp;
