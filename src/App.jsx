import { Routes, Route, Navigate } from "react-router-dom";
import TopNav from "./components/TopNav";
import Screen1 from "./pages/Screen1";
import Screen2 from "./pages/Screen2";

export default function App() {
  return (
    <>
      <TopNav />

      <Routes>
        <Route path="/" element={<Navigate to="/s1" />} />
        <Route path="/s1" element={<Screen1 />} />
        <Route path="/s2" element={<Screen2 />} />
      </Routes>
    </>
  );
}
