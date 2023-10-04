import { useTranslation } from 'react-i18next';

import { ROUTE } from '#shared/config';
import { TextWithLink } from '#shared/ui';
import { ForgotPaswordForm } from '#feature/forgot-password';

import s from './forgot-password.page.module.scss';

export const ForgotPasswordPage = () => {
  const { t } = useTranslation();

  return (
    <div className={s['forgot-password-page']}>
      <ForgotPaswordForm />
      <TextWithLink
        text={t('forgot.login.text')}
        link={ROUTE.LOGIN}
        linkText={t('forgot.login.link')}
        extraClass='mt-20'
      />
    </div>
  );
};
