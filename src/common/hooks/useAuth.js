import { useSelector } from 'react-redux';
import {
  selectCurrentUser,
  selectCurrentUserAccessTocken,
  selectCurrentUserRefreshToken,
} from '../../services/auth-slice';
import { useMemo } from 'react';

export const useAuth = () => {
  const user = useSelector(selectCurrentUser);
  const refreshToken = useSelector(selectCurrentUserRefreshToken);
  const accessToken = useSelector(selectCurrentUserAccessTocken);
  const isAuth = !!accessToken && user.name && user.email;

  return useMemo(() => ({ user, refreshToken, isAuth }), [user, refreshToken, isAuth]);
};
