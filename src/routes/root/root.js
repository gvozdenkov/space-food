import { Outlet } from 'react-router-dom';
import s from './root.module.scss';
import { Header } from '../../components/header';

export const Root = () => {
  return (
    <div className={s.app}>
      <Header />
      <main className={s.main}>
        <Outlet />
      </main>
    </div>
  );
};
