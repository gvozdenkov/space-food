import s from './reset-password.module.scss';
import { useIntl } from 'react-intl';
import { TextWithLink } from '../../components/text-with-link';
import { FormView } from '../../components/form/components/form-view';
import { ResetPasswordForm } from '../../features/auth/components/reset-password-form';
import { Navigate, useLocation } from 'react-router-dom';
import { PATH } from '../../utils/config';

export const ResetPassword = () => {
  const intl = useIntl();
  const location = useLocation();

  const fromForgotPage = location.state?.from === PATH.FORGOT_PASSWORD;

  return fromForgotPage ? (
    <FormView>
      <ResetPasswordForm />
      <TextWithLink
        text={intl.formatMessage({ id: 'forgot-password.remember.password' })}
        linkText={intl.formatMessage({ id: 'forgot-password.remember.password.link' })}
        href={PATH.LOGIN}
        extraClass='mt-20'
      />
    </FormView>
  ) : (
    <Navigate to={PATH.HOME} replace={true} />
  );
};
