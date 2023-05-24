import s from './app.module.scss';
import { Header } from '../components/header';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home';
import { Login } from '../pages/login';
import { Register } from '../pages/register';
import { ForgotPassword } from '../pages/forgot-password';
import { ResetPassword } from '../pages/reset-password';

export const App = () => {
  return (
    <div className={s.app}>
      <Header />
      <main className={s.main}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
        </Routes>
      </main>
    </div>
  );
};
