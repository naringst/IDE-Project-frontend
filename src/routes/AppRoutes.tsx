import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage/index';
import ProjectPage from '../pages/ProjectPage/index';
import Login from '../pages/LoginPage/index';
import SignUp from '../pages/SignUpPage/index';
import MyPage from '../pages/MyPage/index';
import GuestEnterPage from '../pages/GuestEnterPage/index';
import IDEPage from '../pages/IDEPage/index';
import MainLayout from '../layout/MainLayout';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/project" element={<ProjectPage />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/guest-enter" element={<GuestEnterPage />} />
      <Route path="/ide" element={<IDEPage />} />
    </Routes>
  );
};
