import s from './register.module.scss';
import { useIntl } from 'react-intl';
import { TextWithLink } from '../../components/text-with-link';
import { FormView } from '../../components/form/components/form-view';
import { RegisterForm } from './components/register-form';

export const Register = () => {
  const intl = useIntl();

  return (
    <FormView>
      <RegisterForm />
      <TextWithLink
        text={intl.formatMessage({ id: 'register.form.alreadyRegister' })}
        linkText={intl.formatMessage({ id: 'register.form.login.link' })}
        href='/login'
        extraClass='mt-20'
      />
    </FormView>
  );
};
