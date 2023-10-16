import { useTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Input, SubmitButton } from '#shared/ui/form';
import { useForgotPasswordMutation } from '#entities/session';
import { ErrorMessage } from '#shared/ui/error-message';

import s from './forgot-pasword-from.module.scss';

export const ForgotPaswordForm = () => {
  const { t } = useTranslation();

  const formSchema = z.object({
    email: z.string().email({ message: t('form.input.email.error.incorrect') }),
  });

  type FormSchema = z.infer<typeof formSchema>;

  const defaultValues: FormSchema = {
    email: '',
  };

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { isValid, errors },
  } = useForm<FormSchema>({
    defaultValues,
    mode: 'onTouched',
    resolver: zodResolver(formSchema),
  });

  const {
    mutate: forgotPasswordMutation,
    isError: isForgotPasswordMutationError,
    error: forgotPasswordMutationError,
    isLoading,
  } = useForgotPasswordMutation();

  const mutationErrorText =
    forgotPasswordMutationError?.response?.data.message || t('forgot.error.forgot');

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    forgotPasswordMutation(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s['forgot-pasword-form']}>
      <h1 className='text text_type_main-medium'>{t('forgot.form.title')}</h1>
      <Input
        type='email'
        icon='edit'
        {...register('email')}
        error={!!errors.email}
        errorText={errors.email?.message}
        aria-invalid={!!errors.email}
        placeholder={t('forgot.form.input.email.placeholder')}
        extraClass={s.input_email}
        onIconClick={() => setFocus('email')}
        autoComplete='email'
      />

      <SubmitButton disabled={!isValid || isLoading} extraClass={s.input_submit}>
        {t('forgot.form.button.submit')}
      </SubmitButton>

      {isForgotPasswordMutationError && <ErrorMessage message={mutationErrorText} />}
    </form>
  );
};
