import { FormSubmitBtn } from '../../../../components/form/form-submit-btn';
import { ButtonLoader } from '../../../../components/button-loader';
import { Form } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FormTitle } from '../../../../components/form/form-title';
import { PasswordInput } from '../../../../components/form/password-input';
import { TextInput } from '../../../../components/form/text-input';
import { useResetForm } from './use-reset-password-form';

export const ResetPasswordForm = () => {
  const { t } = useTranslation();

  const { control, isDirty, isValid, input, isSubmitting } = useResetForm();

  return (
    <Form method='POST' className='form'>
      <FormTitle>{t('reset-password.form.title')}</FormTitle>

      <PasswordInput
        control={control}
        inputName={input.PASSWORD}
        placeholder={t('form.placeholder.password')}
      />

      <TextInput
        control={control}
        inputName={input.TOKEN}
        placeholder={t('reset-form.placeholder.token')}
      />

      <FormSubmitBtn disabled={!isDirty || !isValid || isSubmitting}>
        {isSubmitting ? <ButtonLoader /> : t('reset-form.submit')}
      </FormSubmitBtn>
    </Form>
  );
};
