import { useEffect } from 'react';
import { useLogoutUserMutation } from '../../services/api-slice';
import { useDispatch } from 'react-redux';
import { userLogedOut } from '../../services/auth-slice';
import { useAuth } from '../../common/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

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
      navigate('/login', { replace: true });
    }
  }, [isSuccess]);
};
