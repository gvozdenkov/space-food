import s from './forgot-password.module.scss';
import { useIntl } from 'react-intl';
import { TextWithLink } from '../../components/text-with-link';
import { FormView } from '../../components/form/components/form-view';
import { ForgotPasswordForm } from './components/fogot-password-form';
import { PATH } from '../../utils/config';

export const ForgotPassword = () => {
  const intl = useIntl();

  return (
    <FormView>
      <ForgotPasswordForm />
      <TextWithLink
        text={intl.formatMessage({ id: 'forgot-password.remember.password' })}
        linkText={intl.formatMessage({ id: 'forgot-password.remember.password.link' })}
        href={PATH.LOGIN}
        extraClass='mt-20'
      />
    </FormView>
  );
};
