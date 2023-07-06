import { Outlet, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from '../header';
import s from './root-layout.module.scss';
import { GlobalError } from '../../components/global-error';

export const RootLayout = (props) => {
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
        {props.outlet ? (
          <div className={s.errorPage}>
            <GlobalError />
          </div>
        ) : (
          <Outlet />
        )}
      </main>
    </>
  );
};
