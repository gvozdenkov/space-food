import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { selectCurrentUser } from '../../services/user-slice';

export const useAuth = () => {
  const user = useSelector(selectCurrentUser);
  const isAuth = !!user;

  return useMemo(() => ({ user, isAuth }), [user, isAuth]);
};
