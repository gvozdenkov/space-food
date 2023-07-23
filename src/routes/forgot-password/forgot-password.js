import { TextWithLink } from '../../components/text-with-link';
import { ForgotPasswordForm } from '../../features/auth/components/fogot-password-form';
import { PATH } from '../../utils/config';
import { useTranslation } from 'react-i18next';
import { FormView } from '../../components/form/form-view';
import { OnlyUnAuth } from '../../features/auth';

export const ForgotPassword = () => {
  const { t } = useTranslation();

  return (
    <OnlyUnAuth>
      <FormView>
        <ForgotPasswordForm />

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
