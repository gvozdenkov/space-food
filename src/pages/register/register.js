import { TextWithLink } from '../../components/text-with-link';
import { FormView } from '../../components/form/components/form-view';
import { RegisterForm } from '../../features/auth/components/register-form';
import { PATH } from '../../utils/config';
import { useTranslation } from 'react-i18next';
import { FormErrorMessage } from '../../components/form-error-message';

export const Register = (props) => {
  const { t } = useTranslation();

  return (
    <FormView>
      <RegisterForm />

      {props.outlet && <FormErrorMessage message={props.outlet} />}

      <TextWithLink
        text={t('register.form.alreadyRegister')}
        linkText={t('register.form.login.link')}
        href={PATH.LOGIN}
        extraClass='mt-20'
      />
    </FormView>
  );
};
