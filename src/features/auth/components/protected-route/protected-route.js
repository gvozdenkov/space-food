import { Navigate, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { userQuery } from '../../../../routes/profile-layout/user-loader';
import { PATH } from '../../../../utils/config';

const ProtectedRoute = ({ onlyUnAuth = false, component }) => {
  const { data: user } = useQuery(userQuery());
  const location = useLocation();

  // user unauth, but route only for auth users
  if (!user && !onlyUnAuth) {
    return <Navigate to={PATH.LOGIN} state={{ from: location }} />;
  }

  // user auth, but route only for unauth user
  if (user && onlyUnAuth) {
    const { from } = location.state || { from: { pathname: PATH.HOME } };
    return <Navigate to={from} />;
  }

  return component;
};

export const OnlyAuth = ProtectedRoute;

export const OnlyUnAuth = ({ component }) => (
  <ProtectedRoute onlyUnAuth={true} component={component} />
);
