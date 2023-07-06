import { TextWithLink } from '../../components/text-with-link';
import { FormView } from '../../components/form/components/form-view';
import { PATH } from '../../utils/config';
import { useTranslation } from 'react-i18next';
import { LoginForm } from '../../features/auth';
import { FormErrorMessage } from '../../components/form-error-message';

export const Login = (props) => {
  const { t } = useTranslation();

  return (
    <FormView>
      <LoginForm />

      {props.outlet && <FormErrorMessage message={props.outlet} />}

      <TextWithLink
        text={t('login.form.new.register')}
        linkText={t('login.form.new.register.link')}
        href={PATH.REGISTER}
        extraClass='mt-20'
      />
      <TextWithLink
        text={t('login.form.forgot.password')}
        linkText={t('login.form.forgot.password.link')}
        href={PATH.FORGOT_PASSWORD}
        extraClass='mt-4'
      />
    </FormView>
  );
};
