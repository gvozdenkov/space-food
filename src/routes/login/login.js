import s from './login.module.scss';
import { useIntl } from 'react-intl';
import { TextWithLink } from '../../components/text-with-link';
import { FormView } from '../../components/form/components/form-view';
import { PATH } from '../../utils/config';
import { LoginForm } from '../../components/login-form';
import { Outlet } from 'react-router-dom';

export const Login = (props) => {
  const intl = useIntl();

  return (
    <>
      <FormView>
        <LoginForm />
        {props.outlet ? props.outlet : <Outlet />}
      
        <TextWithLink
          text={intl.formatMessage({ id: 'login.form.new.register' })}
          linkText={intl.formatMessage({ id: 'login.form.new.register.link' })}
          href={PATH.REGISTER}
          extraClass='mt-20'
        />
        <TextWithLink
          text={intl.formatMessage({ id: 'login.form.forgot.password' })}
          linkText={intl.formatMessage({ id: 'login.form.forgot.password.link' })}
          href={PATH.FORGOT_PASSWORD}
          extraClass='mt-4'
        />
      </FormView>
    </>
  );
};
