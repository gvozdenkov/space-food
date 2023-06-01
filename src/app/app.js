import s from './app.module.scss';
import { Header } from '../components/header';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home';
import { Login } from '../pages/login';
import { Register } from '../pages/register';
import { ForgotPassword } from '../pages/forgot-password';
import { ResetPassword } from '../pages/reset-password';
import { NotFound } from '../pages/not-found';
import { ProfileLayout } from '../pages/profile-layout';
import { Profile } from '../pages/profile-layout/components/profile';
import { Orders } from '../pages/profile-layout/components/orders';
import { ProtectedRoute } from '../components/protected-route/protected-route';
import { PATH } from '../utils/config';
import { useAuth } from '../common/hooks/useAuth';

export const App = () => {
  const { isAuth } = useAuth();

  return (
    <div className={s.app}>
      <Header />
      <main className={s.main}>
        <Routes>
          <Route path={PATH.HOME} element={<Home />} />
          <Route
            path={PATH.LOGIN}
            element={isAuth ? <Navigate to={PATH.HOME} replace={true} /> : <Login />}
          />
          <Route
            path={PATH.REGISTER}
            element={isAuth ? <Navigate to={PATH.HOME} replace={true} /> : <Register />}
          />
          <Route
            path={PATH.FORGOT_PASSWORD}
            element={isAuth ? <Navigate to={PATH.HOME} replace={true} /> : <ForgotPassword />}
          />
          <Route
            path={PATH.RESET_PASSWORD}
            element={isAuth ? <Navigate to={PATH.HOME} replace={true} /> : <ResetPassword />}
          />
          <Route
            path={PATH.PROFILE}
            element={
              <ProtectedRoute>
                <ProfileLayout />
              </ProtectedRoute>
            }>
            <Route index element={<Profile />} />
            <Route path='orders' element={<Orders />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};
