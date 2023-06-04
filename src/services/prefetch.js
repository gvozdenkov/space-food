import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { store } from '../app/store';
import { userApiSlice } from './api/user-api';

export const Prefetch = () => {
  useEffect(() => {
    // console.log('subscribing');

    const user = store.dispatch(userApiSlice.endpoints.getMe.initiate());

    return () => {
      // console.log('unsubscribe');
      user.unsubscribe();
    };
  }, []);

  return <Outlet />;
};
