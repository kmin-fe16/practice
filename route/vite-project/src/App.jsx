import { useState } from "react";
import "./App.css";

function App() {
  const [mood, setMood] = useState("Normal");
  return (
    <>
      <Face3 mood={mood} />
      <div
        className={
          mood === "Happy" ? "happy" : mood === "Normal" ? "Normal" : "sad"
        }
      >
        기분 : {mood}
      </div>
      <div>
        <button onClick={() => setMood("Happy")}>Happy</button>
        <button onClick={() => setMood("Normal")}>Normal</button>
        <button onClick={() => setMood("Sad")}>Sad</button>
      </div>
    </>
  );
}

//if문으로 리턴하는 JSX문 바꿔주기
function Face({ mood }) {
  if (mood === "happy") {
    return "😆";
  } else if (mood === "Normal") {
    return "😀";
  } else {
    return "😭";
  }
}
export default App;

// 삼항연산자
function Face2({ mood }) {
  return <>{mood === "Happy" ? "😆" : mood === "Normal" ? "😀" : "😭"}</>;
}

//논리연산자
function Face3({ mood }) {
  return (
    <>
      {mood === "Happy" && "😆"}
      {mood === "Normal" && "😀"}
      {mood === "Sad" && "😭"}
    </>
  );
}
