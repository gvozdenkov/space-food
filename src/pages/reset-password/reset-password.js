import s from './reset-password.module.scss';
import { useIntl } from 'react-intl';
import { TextWithLink } from '../../components/text-with-link';
import { FormView } from '../../components/form/components/form-view';
import { ResetPasswordForm } from './components/reset-password-form';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../common/hooks/useAuth';
import { PATH } from '../../utils/config';

export const ResetPassword = () => {
  const intl = useIntl();
  const location = useLocation();
  const { isAuth } = useAuth();

  const fromForgotPage = location.state?.from?.pathname === PATH.FORGOT_PASSWORD;
  const from = location.state?.from?.pathname || PATH.HOME;

  // return isAuth && fromForgotPage ? (
  //   <FormView>
  //     <ResetPasswordForm />
  //     <TextWithLink
  //       text={intl.formatMessage({ id: 'forgot-password.remember.password' })}
  //       linkText={intl.formatMessage({ id: 'forgot-password.remember.password.link' })}
  //       href={PATH.LOGIN}
  //       extraClass='mt-20'
  //     />
  //   </FormView>
  // ) : isAuth && !fromForgotPage ? (
  //   <Navigate to={PATH.HOME} state={{ from: location }} />
  // ) : (
  //   <Navigate to={PATH.LOGIN} state={{ from: location }} />
  // );
  return (
    <FormView>
      <ResetPasswordForm />
      <TextWithLink
        text={intl.formatMessage({ id: 'forgot-password.remember.password' })}
        linkText={intl.formatMessage({ id: 'forgot-password.remember.password.link' })}
        href={PATH.LOGIN}
        extraClass='mt-20'
      />
    </FormView>
  );
};
