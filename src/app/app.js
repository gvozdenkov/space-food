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
import { Layout } from '../components/layout';
import { Prefetch } from '../services/prefetch';

export const App = () => {
  const { isAuth } = useAuth();

  return (
    <Routes>
      <Route path={PATH.HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.REGISTER} element={<Register />} />
        <Route path={PATH.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={PATH.RESET_PASSWORD} element={<ResetPassword />} />

        <Route element={<Prefetch />}>
          {/* Profile Layout */}
          <Route
            path={PATH.PROFILE}
            element={
              <ProtectedRoute>
                <ProfileLayout />
              </ProtectedRoute>
            }>
            <Route index element={<Profile />} />
            <Route path={PATH.ORDERS} element={<Orders />} />
          </Route>
        </Route>

        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};
