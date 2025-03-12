import { Route, Routes } from "react-router";
import Inspection from "./pages/Inspection";
import Kia from "./pages/Kia";
import DetailPage from "./pages/DetailPage";
function App() {
  return (
    <>
      <Routes>
        {/* 정적 라우팅 */}
        <Route path={"/"} element={<Inspection />}></Route>
        <Route path={"/kia"} element={<Kia />}></Route>
        {/* 동적 라우팅 */}
        <Route path={"/detail/:teemo"} element={<DetailPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
