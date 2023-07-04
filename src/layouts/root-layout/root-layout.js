import { Outlet, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from '../header';
import s from './root-layout.module.scss';

export const RootLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const lng = searchParams.get('lng');

    if (lng) {
      setSearchParams('', { replace: true });
    }
  }, []);

  return (
    <>
      <Header />
      <main className={s.main}>
        <Outlet />
      </main>
    </>
  );
};
