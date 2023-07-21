import { FormSubmitBtn } from '../../../../components/form/form-submit-btn';
import { ButtonLoader } from '../../../../components/button-loader';
import { useTranslation } from 'react-i18next';
import { Form } from 'react-router-dom';
import { FormTitle } from '../../../../components/form/form-title';
import { PasswordInput } from '../../../../components/form/password-input';
import { TextInput } from '../../../../components/form/text-input';
import { useRegisterForm } from './use-register-form';

export const RegisterForm = () => {
  const { t } = useTranslation();

  const { control, isDirty, isValid, input, isSubmitting } = useRegisterForm();

  return (
    <Form method='POST' className='form'>
      <FormTitle>{t('register.form.title')}</FormTitle>

      <TextInput
        control={control}
        inputName={input.NAME}
        placeholder={t('form.placeholder.name')}
      />

      <TextInput
        type='email'
        control={control}
        inputName={input.EMAIL}
        placeholder={t('form.placeholder.email')}
      />

      <PasswordInput
        control={control}
        inputName={input.PASSWORD}
        placeholder={t('form.placeholder.password')}
      />

      <FormSubmitBtn disabled={!isDirty || !isValid || isSubmitting}>
        {isSubmitting ? <ButtonLoader /> : t('register.form.submit')}
      </FormSubmitBtn>
    </Form>
  );
};
