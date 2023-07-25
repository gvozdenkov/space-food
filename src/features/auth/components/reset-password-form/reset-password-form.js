import { Form } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FormSubmitBtn } from '../../../../components/form/form-submit-btn';
import { ButtonLoader } from '../../../../components/button-loader';
import { FormTitle } from '../../../../components/form/form-title';
import { PasswordInput } from '../../../../components/form/password-input';
import { TextInput } from '../../../../components/form/text-input';
import { useResetForm } from './use-reset-password-form';

export const ResetPasswordForm = () => {
  const { t } = useTranslation();

  const { control, isDirty, isValid, input, isSubmitting } = useResetForm();

  return (
    <Form method='POST' className='form'>
      <FormTitle>{t('reset.form.title')}</FormTitle>

      <PasswordInput
        control={control}
        inputName={input.PASSWORD}
        placeholder={t('form.input.password.placeholder')}
      />

      <TextInput
        control={control}
        inputName={input.TOKEN}
        placeholder={t('reset.form.input.token.placeholder')}
      />

      <FormSubmitBtn disabled={!isDirty || !isValid || isSubmitting}>
        {isSubmitting ? <ButtonLoader /> : t('reset.form.button.submit')}
      </FormSubmitBtn>
    </Form>
  );
};
