import { TextWithLink } from '../../components/text-with-link';
import { RegisterForm } from '../../features/auth/components/register-form';
import { PATH } from '../../utils/config';
import { useTranslation } from 'react-i18next';
import { FormView } from '../../components/form/form-view';
import { OnlyUnAuth } from '../../features/auth';

export const Register = () => {
  const { t } = useTranslation();

  return (
    <OnlyUnAuth>
      <FormView>
        <RegisterForm />

        <TextWithLink
          text={t('register.form.alreadyRegister')}
          linkText={t('register.form.login.link')}
          href={PATH.LOGIN}
          extraClass='mt-20'
        />
      </FormView>
    </OnlyUnAuth>
  );
};
