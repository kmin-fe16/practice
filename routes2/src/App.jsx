import { useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Link to="/main">메인 </Link>
        <Link to="/mypage">마이페이지 </Link>
        <Link to="/test">테스트 </Link>
      </div>

      <Routes>
        <Route path="/main" elemet={<div>메인페이지</div>} />
        <Route path="/mypage" elemet={<div>마이페이지</div>} />
        <Route path="/test" elemet={<div>테스트</div>} />
      </Routes>
    </>
  );
}

export default App;
