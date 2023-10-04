import { useTranslation } from 'react-i18next';

import { ROUTE } from '#shared/config';
import { TextWithLink } from '#shared/ui';
import { RegisterForm } from '#feature/register';

import s from './register.page.module.scss';

export const RegisterPage = () => {
  const { t } = useTranslation();

  return (
    <div className={s['register-page']}>
      <RegisterForm />
      <TextWithLink
        text={t('register.login.text')}
        link={ROUTE.LOGIN}
        linkText={t('register.login.link')}
        extraClass='mt-20'
      />
    </div>
  );
};
