import { useTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Input, SubmitButton } from '#shared/ui/form';
import { PasswordInput } from '#shared/ui/form/password-input';
import { useResetPasswordMutation } from '#entities/session';
import { ErrorMessage } from '#shared/ui/error-message';

import s from './reset-password-form.module.scss';

export const ResetPasswordForm = () => {
  const { t } = useTranslation();

  const formSchema = z.object({
    password: z.string().nonempty(t('form.input.common.error.required')),
    token: z.string().nonempty(t('form.input.common.error.required')),
  });

  type FormSchema = z.infer<typeof formSchema>;

  const defaultValues: FormSchema = {
    password: '',
    token: '',
  };

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { isValid, errors },
  } = useForm<FormSchema>({
    defaultValues,
    mode: 'onTouched',
    resolver: zodResolver(formSchema),
  });

  const {
    mutate: resetPasswordMutation,
    isError: isResetPasswordMutationError,
    error: resetPasswordMutationError,
    isLoading,
  } = useResetPasswordMutation();

  const mutationErrorText =
    resetPasswordMutationError?.response?.data.message || t('reset.error.reset');

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    console.log('password updated', data);
    resetPasswordMutation(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s['reset-password-form']}>
      <h1 className='text text_type_main-medium'>{t('reset.form.title')}</h1>
      <PasswordInput
        {...register('password')}
        error={!!errors.password}
        errorText={errors.password?.message}
        aria-invalid={!!errors.password}
        placeholder={t('form.input.password.placeholder')}
        extraClass={s.input_password}
        autoComplete='off'
      />
      <Input
        type='text'
        icon='edit'
        {...register('token')}
        error={!!errors.token}
        errorText={errors.token?.message}
        aria-invalid={!!errors.token}
        placeholder={t('reset.form.input.token.placeholder')}
        extraClass={s.input_name}
        onIconClick={() => setFocus('token')}
        autoComplete='off'
      />

      <SubmitButton disabled={!isValid || isLoading} extraClass={s.input_submit}>
        {t('reset.form.button.submit')}
      </SubmitButton>

      {isResetPasswordMutationError && <ErrorMessage message={mutationErrorText} />}
    </form>
  );
};
