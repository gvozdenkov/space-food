import { useNavigate } from 'react-router-dom';
import { JWT, PATH } from '../../utils/config';
import { useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import { useLogoutUserMutation } from '../../services/api/auth-api';
import { logout } from '../../services/user-slice';
import { useEffect } from 'react';

export const useProfileLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [logoutUser, { isLoading, isFetching, isSuccess, isError, error, data }] =
    useLogoutUserMutation();

  useEffect(() => {
    if (isSuccess) {
      dispatch(logout());
      cookies.remove(JWT.REFRESH);
      cookies.remove(JWT.ACCESS);
      navigate(PATH.LOGIN, { replace: true });
    }
  }, [isSuccess, dispatch, navigate]);

  const handleLogout = () => {
    const refreshToken = cookies.get(JWT.REFRESH);
    refreshToken ? logoutUser({ token: refreshToken }) : navigate(PATH.LOGIN, { replace: true });
  };

  return { handleLogout };
};
