import { TextWithLink } from '../../components/text-with-link';
import { ForgotPasswordForm } from '../../features/auth/components/fogot-password-form';
import { PATH } from '../../utils/config';
import { useTranslation } from 'react-i18next';
import { ErrorMessage } from '../../components/error-message';
import { FormView } from '../../components/form/form-view';
import { OnlyUnAuth } from '../../features/auth';

export const ForgotPassword = (props) => {
  const { t } = useTranslation();

  return (
    <OnlyUnAuth>
      <FormView>
        <ForgotPasswordForm />

        {props.outlet && <ErrorMessage message={props.outlet} extraClass='mt-8' />}

        <TextWithLink
          text={t('forgot-password.remember.password')}
          linkText={t('forgot-password.remember.password.link')}
          href={PATH.LOGIN}
          extraClass='mt-20'
        />
      </FormView>
    </OnlyUnAuth>
  );
};
