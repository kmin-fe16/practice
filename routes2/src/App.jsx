import { useState } from "react";
import "./App.css";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  console.log(location.pathname);
  console.log(location.search);

  return (
    <>
      <div>
        {/* <Link to="/main">메인 </Link>
        <Link to="/mypage">마이페이지 </Link>
        <Link to="/test">테스트 </Link> */}
        <button onClick={() => navigate("/main")}>메인</button>
        <button onClick={() => navigate("/mypage")}>마이페이지</button>
        <button onClick={() => navigate("/test")}>테스트</button>
      </div>
      <div>
        <button on onClick={() => navigate(-1)}>{`<-뒤로가기`}</button>
        <button on onClick={() => navigate(+1)}>{`앞으로가기->`}</button>
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
