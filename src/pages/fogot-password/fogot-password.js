import s from './fogot-password.module.scss';
import { useIntl } from 'react-intl';
import { TextWithLink } from '../../components/text-with-link';
import { FormView } from '../../components/form/components/form-view';
import { FogotPasswordForm } from './components/fogot-password-form';

export const FogotPassword = () => {
  const intl = useIntl();

  return (
    <FormView>
      <FogotPasswordForm />
      <TextWithLink
        text={intl.formatMessage({ id: 'fogot-password.remember.password' })}
        linkText={intl.formatMessage({ id: 'fogot-password.remember.password.link' })}
        href='/'
        extraClass='mt-20'
      />
    </FormView>
  );
};
