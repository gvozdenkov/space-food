import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { selectCurrentToken } from '../../services/auth-slice';

export const useAuth = () => {
  const token = useSelector(selectCurrentToken);
  const isAuth = !!token;

  return useMemo(() => ({ isAuth }), [isAuth]);
};
