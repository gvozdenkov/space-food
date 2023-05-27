import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../common/hooks/useAuth';
import { PATH } from '../../utils/config';

export const ProtectedRoute = ({ children }) => {
  const { isAuth } = useAuth();
  const location = useLocation();

  return isAuth ? children : <Navigate to={PATH.LOGIN} state={{ from: location }} />;
};
