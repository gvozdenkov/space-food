import { useSelector } from 'react-redux';
import { selectCurrentUser, selectCurrentUserRefreshToken } from '../../services/auth-slice';
import { useMemo } from 'react';

export const useAuth = () => {
  const user = useSelector(selectCurrentUser);
  const refreshToken = useSelector(selectCurrentUserRefreshToken);

  return useMemo(() => ({ user, refreshToken }), [user, refreshToken]);
};
