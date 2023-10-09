import { useTranslation } from 'react-i18next';

import { ROUTE } from '#shared/config';
import { TextWithLink } from '#shared/ui';
import { ResetPasswordForm } from '#feature/reset-password';
import { OnlyUnAuth } from '#entities/session';

import s from './reset-password.page.module.scss';

export const ResetPasswordPage = () => {
  const { t } = useTranslation();

  return (
    <OnlyUnAuth>
      <div className={s['reset-password-page']}>
        <ResetPasswordForm />
        <TextWithLink
          text={t('reset.login.text')}
          link={ROUTE.LOGIN}
          linkText={t('reset.login.link')}
          extraClass='mt-20'
        />
      </div>
    </OnlyUnAuth>
  );
};
