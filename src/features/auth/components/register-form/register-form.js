import { FormSubmitBtn } from '../../../../components/form/form-submit-btn';
import { ButtonLoader } from '../../../../components/button-loader';
import { useTranslation } from 'react-i18next';
import { FormTitle } from '../../../../components/form/form-title';
import { PasswordInput } from '../../../../components/form/password-input';
import { TextInput } from '../../../../components/form/text-input';
import { useRegisterForm } from './use-register-form';
import { ErrorMessage } from '../../../../components/error-message';

export const RegisterForm = () => {
  const { t } = useTranslation();

  const { control, isDirty, isValid, inputName, onSubmit, isLoading, isError, error } =
    useRegisterForm();

  return (
    <form onSubmit={onSubmit()} className='form'>
      <FormTitle>{t('register.form.title')}</FormTitle>

      <TextInput
        control={control}
        inputName={inputName.NAME}
        placeholder={t('form.placeholder.name')}
      />

      <TextInput
        type='email'
        control={control}
        inputName={inputName.EMAIL}
        placeholder={t('form.placeholder.email')}
      />

      <PasswordInput
        control={control}
        inputName={inputName.PASSWORD}
        placeholder={t('form.placeholder.password')}
      />

      {isError && <ErrorMessage message={error} />}

      <FormSubmitBtn disabled={!isDirty || !isValid || isLoading}>
        {isLoading ? <ButtonLoader /> : t('register.form.submit')}
      </FormSubmitBtn>
    </form>
  );
};
