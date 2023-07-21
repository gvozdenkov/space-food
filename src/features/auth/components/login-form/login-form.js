import { Form } from 'react-router-dom';
import { FormSubmitBtn } from '../../../../components/form/form-submit-btn';
import { ButtonLoader } from '../../../../components/button-loader';
import { useTranslation } from 'react-i18next';
import { FormTitle } from '../../../../components/form/form-title';
import { PasswordInput } from '../../../../components/form/password-input';
import { useLoginForm } from './use-login-form';
import { TextInput } from '../../../../components/form/text-input';

export const LoginForm = ({ redirectTo }) => {
  const { t } = useTranslation();

  const { control, isDirty, isValid, inputName, onSubmit, isLoading, isError, error } =
    useLoginForm({
      redirectTo,
    });

  return (
    <Form onSubmit={onSubmit()} className='form'>
      <FormTitle>{t('login.form.title')}</FormTitle>

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

      {isError && (
        <p aria-live='assertive' className='text text_type_main-default text_color_error'>
          {error}
        </p>
      )}

      <FormSubmitBtn disabled={!isDirty || !isValid || isLoading}>
        {isLoading ? <ButtonLoader /> : t('login.form.submit')}
      </FormSubmitBtn>
    </Form>
  );
};
