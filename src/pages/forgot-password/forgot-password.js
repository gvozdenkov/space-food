import s from './forgot-password.module.scss';
import { useIntl } from 'react-intl';
import { TextWithLink } from '../../components/text-with-link';
import { FormView } from '../../components/form/components/form-view';
import { ForgotPasswordForm } from './components/fogot-password-form';

export const ForgotPassword = () => {
  const intl = useIntl();

  return (
    <FormView>
      <ForgotPasswordForm />
      <TextWithLink
        text={intl.formatMessage({ id: 'fogot-password.remember.password' })}
        linkText={intl.formatMessage({ id: 'fogot-password.remember.password.link' })}
        href='/login'
        extraClass='mt-20'
      />
    </FormView>
  );
};
