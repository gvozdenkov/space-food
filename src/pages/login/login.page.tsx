import { useTranslation } from 'react-i18next';

import { LoginForm } from '#feature/login';
import { ROUTE } from '#shared/config';
import { TextWithLink } from '#shared/ui';

import s from './login.page.module.scss';

export const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <div className={s['login-page']}>
      <LoginForm />
      <TextWithLink
        text={t('login.register.text')}
        link={ROUTE.REGISTER}
        linkText={t('login.register.link')}
        extraClass='mt-20 mb-4'
      />
      <TextWithLink
        text={t('login.forgot.text')}
        link={ROUTE.FORGOT_PASSWORD}
        linkText={t('login.forgot.link')}
      />
    </div>
  );
};
