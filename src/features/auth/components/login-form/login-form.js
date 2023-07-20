import { Form } from 'react-router-dom';
import { FormSubmitBtn } from '../../../../components/form/form-submit-btn';
import { ButtonLoader } from '../../../../components/button-loader';
import { useTranslation } from 'react-i18next';
import { FormTitle } from '../../../../components/form/form-title';
import { EmailInput } from '../../../../components/form/email-input';
import { PasswordInput } from '../../../../components/form/password-input';
import { useLoginForm } from './use-login-form';

export const LoginForm = ({ redirectTo }) => {
  const { t } = useTranslation();

  const { control, isDirty, isValid, input, isSubmitting } = useLoginForm();

  return (
    <Form method='POST' className='form'>
      <FormTitle>{t('login.form.title')}</FormTitle>

      <EmailInput
        control={control}
        inputName={input.EMAIL}
        placeholder={t('form.placeholder.email')}
      />

      <PasswordInput
        control={control}
        inputName={input.PASSWORD}
        placeholder={t('form.placeholder.password')}
      />

      <input type='hidden' id='path' value={redirectTo} name='redirectTo' />
      <FormSubmitBtn disabled={!isDirty || !isValid}>
        {isSubmitting ? <ButtonLoader /> : t('login.form.submit')}
      </FormSubmitBtn>
    </Form>
  );
};
