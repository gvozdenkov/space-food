import s from './login.module.scss';
import { useIntl } from 'react-intl';
import { TextWithLink } from '../../components/text-with-link';
import { FormView } from '../../components/form/components/form-view';
import { LoginForm } from './components/login-form';

export const Login = () => {
  const intl = useIntl();

  return (
    <FormView>
      <LoginForm />
      <TextWithLink
        text={intl.formatMessage({ id: 'login.form.new.register' })}
        linkText={intl.formatMessage({ id: 'login.form.new.register.link' })}
        href='/'
        extraClass='mt-20'
      />
      <TextWithLink
        text={intl.formatMessage({ id: 'login.form.fogot.password' })}
        linkText={intl.formatMessage({ id: 'login.form.fogot.password.link' })}
        href='/'
        extraClass='mt-4'
      />
    </FormView>
  );
};
