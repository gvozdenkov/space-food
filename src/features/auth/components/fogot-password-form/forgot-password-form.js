import { FormSubmitBtn } from '../../../../components/form/form-submit-btn';
import { ButtonLoader } from '../../../../components/button-loader';
import { useTranslation } from 'react-i18next';
import { FormTitle } from '../../../../components/form/form-title';
import { useForgotPasswordForm } from './use-forgot-password-form';
import { TextInput } from '../../../../components/form/text-input';
import { ErrorMessage } from '../../../../components/error-message';

export const ForgotPasswordForm = () => {
  const { t } = useTranslation();

  const { control, isDirty, isValid, inputName, onSubmit, isLoading, isError, error } =
    useForgotPasswordForm();

  return (
    <form onSubmit={onSubmit()} className='form'>
      <FormTitle>{t('forgot.form.title')}</FormTitle>

      <TextInput
        type='email'
        control={control}
        inputName={inputName.EMAIL}
        placeholder={t('form.input.email.placeholder')}
      />

      {isError && <ErrorMessage message={error} />}

      <FormSubmitBtn disabled={!isDirty || !isValid || isLoading}>
        {isLoading ? <ButtonLoader /> : t('forgot.form.button.submit')}
      </FormSubmitBtn>
    </form>
  );
};
