import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import IDEPage from "./pages/IDEPage";
import MyPage from "./pages/MyPage";
import ProjectPage from "./pages/ProjectPage";
import GuestEnterPage from "./pages/GuestEnterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/guest-enter" element={<GuestEnterPage />} />
      <Route path="/ide" element={<IDEPage />} />
    </Routes>
  );
}

export default App;
