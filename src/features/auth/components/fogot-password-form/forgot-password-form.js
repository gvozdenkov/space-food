import { FormSubmitBtn } from '../../../../components/form/form-submit-btn';
import { ButtonLoader } from '../../../../components/button-loader';
import { Form } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FormTitle } from '../../../../components/form/form-title';
import { EmailInput } from '../../../../components/form/email-input';
import { useForgotForm } from './use-forgot-password-form';

export const ForgotPasswordForm = () => {
  const { t } = useTranslation();

  const { control, isDirty, isValid, input, isSubmitting } = useForgotForm();

  return (
    <Form method='POST' className='form'>
      <FormTitle>{t('forgot-password.form.title')}</FormTitle>

      <EmailInput
        control={control}
        inputName={input.EMAIL}
        placeholder={t('form.placeholder.email')}
      />

      <FormSubmitBtn disabled={!isDirty || !isValid || isSubmitting}>
        {isSubmitting ? <ButtonLoader /> : t('forgot-password.submit')}
      </FormSubmitBtn>
    </Form>
  );
};
