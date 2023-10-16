import { PropsWithChildren, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useUserQuery } from '#entities/session';
import { ROUTE } from '#shared/config';

type Props = {
  onlyUnAuth?: boolean;
  children: ReactNode;
};

const ProtectedRoute = ({ onlyUnAuth = false, children }: Props) => {
  const { data: user } = useUserQuery();
  const location = useLocation();

  // user unauth, but route only for auth users
  if (!user && !onlyUnAuth) {
    return <Navigate to={ROUTE.LOGIN} state={{ from: location }} />;
  }

  // user auth, but route only for unauth user
  if (user && onlyUnAuth) {
    const { from } = location.state || { from: { pathname: ROUTE.HOME } };
    return <Navigate to={from} />;
  }

  return children;
};

export const OnlyAuth = ProtectedRoute;

export const OnlyUnAuth = ({ children }: PropsWithChildren) => (
  <ProtectedRoute onlyUnAuth={true}>{children}</ProtectedRoute>
);
