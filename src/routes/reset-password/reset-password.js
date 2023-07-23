import { useTranslation } from 'react-i18next';
import { TextWithLink } from '../../components/text-with-link';
import { ResetPasswordForm } from '../../features/auth/components/reset-password-form';
import { PATH } from '../../utils/config';
import { FormView } from '../../components/form/form-view';
import { OnlyUnAuth } from '../../features/auth';

export const ResetPassword = () => {
  const { t } = useTranslation();

  return (
    <OnlyUnAuth>
      <FormView>
        <ResetPasswordForm />

        <TextWithLink
          text={t('forgot.login.text')}
          linkText={t('forgot.login.link')}
          href={PATH.LOGIN}
          extraClass='mt-20'
        />
      </FormView>
    </OnlyUnAuth>
  );
};
