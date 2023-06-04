import { useNavigate } from 'react-router-dom';
import { JWT, PATH } from '../../utils/config';
import { useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import { useLogoutUserMutation } from '../../services/api/auth-api';
import { useEffect } from 'react';
import { logOut } from '../../services/auth-slice';

export const useProfileLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [logoutUser, { isLoading, isFetching, isSuccess, isError, error, data }] =
    useLogoutUserMutation();

  useEffect(() => {
    if (isSuccess) {
      dispatch(logOut());
      cookies.remove(JWT.REFRESH);
      navigate(PATH.LOGIN, { replace: true });
    }
  }, [isSuccess, dispatch, navigate]);

  const handleLogout = () => {
    const refreshToken = cookies.get(JWT.REFRESH);
    refreshToken ? logoutUser({ token: refreshToken }) : navigate(PATH.LOGIN, { replace: true });
  };

  return { handleLogout };
};
