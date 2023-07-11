import { TextWithLink } from '../../components/text-with-link';
import { RegisterForm } from '../../features/auth/components/register-form';
import { PATH } from '../../utils/config';
import { useTranslation } from 'react-i18next';
import { ErrorMessage } from '../../components/error-message';
import { FormView } from '../../components/form/form-view';

export const Register = (props) => {
  const { t } = useTranslation();

  return (
    <FormView>
      <RegisterForm />

      {props.outlet && <ErrorMessage message={props.outlet} extraClass='mt-8' />}

      <TextWithLink
        text={t('register.form.alreadyRegister')}
        linkText={t('register.form.login.link')}
        href={PATH.LOGIN}
        extraClass='mt-20'
      />
    </FormView>
  );
};
