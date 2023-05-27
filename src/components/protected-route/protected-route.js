import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../common/hooks/useAuth';

export const ProtectedRoute = ({ children, isUserAuth = false }) => {
  const { isAuth } = useAuth();
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || '/';

  if (isUserAuth) {
    <Navigate to={fromPage} state={{ from: location }} replace={true} />;
  }

  return isAuth ? children : <Navigate to={'/login'} state={{ from: location }} />;
};
