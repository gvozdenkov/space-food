import { TextWithLink } from '../../components/text-with-link';
import { PATH } from '../../utils/config';
import { useTranslation } from 'react-i18next';
import { LoginForm, OnlyUnAuth } from '../../features/auth';
import { useLocation } from 'react-router-dom';
import { FormView } from '../../components/form/form-view';

export const Login = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const redirectAfterLogin = location?.state?.from?.pathname || PATH.HOME;

  return (
    <OnlyUnAuth>
      <FormView>
        <LoginForm redirectTo={redirectAfterLogin} />

        <TextWithLink
          text={t('login.register.text')}
          linkText={t('login.register.link')}
          href={PATH.REGISTER}
          extraClass='mt-20'
        />
        <TextWithLink
          text={t('login.forgot.text')}
          linkText={t('login.forgot.link')}
          href={PATH.FORGOT_PASSWORD}
          extraClass='mt-4'
        />
      </FormView>
    </OnlyUnAuth>
  );
};
