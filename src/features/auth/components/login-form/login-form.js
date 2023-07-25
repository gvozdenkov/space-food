import { FormSubmitBtn } from '../../../../components/form/form-submit-btn';
import { ButtonLoader } from '../../../../components/button-loader';
import { useTranslation } from 'react-i18next';
import { FormTitle } from '../../../../components/form/form-title';
import { PasswordInput } from '../../../../components/form/password-input';
import { useLoginForm } from './use-login-form';
import { TextInput } from '../../../../components/form/text-input';
import { ErrorMessage } from '../../../../components/error-message';

export const LoginForm = ({ redirectTo }) => {
  const { t } = useTranslation();

  const { control, isDirty, isValid, inputName, onSubmit, isLoading, isError, error } =
    useLoginForm({
      redirectTo,
    });

  return (
    <form onSubmit={onSubmit()} className='form'>
      <FormTitle>{t('login.form.title')}</FormTitle>

      <TextInput
        type='email'
        control={control}
        inputName={inputName.EMAIL}
        placeholder={t('form.input.email.placeholder')}
      />

      <PasswordInput
        control={control}
        inputName={inputName.PASSWORD}
        placeholder={t('form.input.password.placeholder')}
      />

      {isError && <ErrorMessage message={error} />}

      <FormSubmitBtn disabled={!isDirty || !isValid || isLoading}>
        {isLoading ? <ButtonLoader /> : t('login.form.button.submit')}
      </FormSubmitBtn>
    </form>
  );
};
