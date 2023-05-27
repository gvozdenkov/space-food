import s from './reset-password.module.scss';
import { useIntl } from 'react-intl';
import { TextWithLink } from '../../components/text-with-link';
import { FormView } from '../../components/form/components/form-view';
import { ResetPasswordForm } from './components/reset-password-form';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../common/hooks/useAuth';

export const ResetPassword = () => {
  const intl = useIntl();
  const location = useLocation();
  const { isAuth } = useAuth();

  const fromForgotPage = location.state?.from?.pathname === '/forgot-password';

  return isAuth && fromForgotPage ? (
    <FormView>
      <ResetPasswordForm />
      <TextWithLink
        text={intl.formatMessage({ id: 'forgot-password.remember.password' })}
        linkText={intl.formatMessage({ id: 'forgot-password.remember.password.link' })}
        href='/login'
        extraClass='mt-20'
      />
    </FormView>
  ) : isAuth && !fromForgotPage ? (
    <Navigate to={'/'} state={{ from: location }} />
  ) : (
    <Navigate to={'/login'} state={{ from: location }} />
  );
};
