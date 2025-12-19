import { useState } from "react";
import "./App.css";

function App() {
  let [number, setNumber] = useState(2);
  console.log("number", number);
  const handler = () => {
    setNumber(number + 1);
    console.log(number);
  };
  return (
    <>
      number : {number}
      <br />
      <button onClick={handler}>상태업데이트!</button>
    </>
  );
}
export default App;
