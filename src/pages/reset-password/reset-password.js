import s from './reset-password.module.scss';
import { useIntl } from 'react-intl';
import { TextWithLink } from '../../components/text-with-link';
import { FormView } from '../../components/form/components/form-view';
import { ResetPasswordForm } from './components/reset-password-form';

export const ResetPassword = () => {
  const intl = useIntl();

  return (
    <FormView>
      <ResetPasswordForm />
      <TextWithLink
        text={intl.formatMessage({ id: 'fogot-password.remember.password' })}
        linkText={intl.formatMessage({ id: 'fogot-password.remember.password.link' })}
        href='/'
        extraClass='mt-20'
      />
    </FormView>
  );
};
