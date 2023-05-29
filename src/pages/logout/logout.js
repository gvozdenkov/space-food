import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userLogedOut } from '../../services/auth-slice';
import { useAuth } from '../../common/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../utils/config';
import { useLogoutUserMutation } from '../../services/api/auth-api';

export const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { refreshToken } = useAuth();
  const [logoutUser, { isLoading, isFetching, isSuccess, isError, error, data }] =
    useLogoutUserMutation();

  useEffect(() => {
    logoutUser({ token: refreshToken });
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(userLogedOut());
      navigate(PATH.LOGIN, { replace: true });
    }
  }, [isSuccess]);
};
