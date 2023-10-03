import { useTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Input, PasswordInput, SubmitButton } from '#shared/ui/form';

import s from './login-from.module.scss';

export const LoginForm = () => {
  const { t } = useTranslation();

  const formSchema = z.object({
    email: z.string().email({ message: t('form.input.email.error.incorrect') }),
    password: z.string().nonempty(t('form.input.common.error.required')),
  });

  type FormSchema = z.infer<typeof formSchema>;

  const defaultValues: FormSchema = {
    email: '',
    password: '',
  };

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { isValid, isSubmitting, errors },
  } = useForm<FormSchema>({
    defaultValues,
    mode: 'onTouched',
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s['login-form']}>
      <Input
        type='email'
        icon='edit'
        {...register('email')}
        error={!!errors.email}
        errorText={errors.email?.message}
        aria-invalid={errors.email ? 'true' : 'false'}
        placeholder={t('form.input.email.placeholder')}
        extraClass={s.input_email}
        onIconClick={() => setFocus('email')}
        autoComplete='email'
      />
      <PasswordInput
        {...register('password')}
        error={!!errors.password}
        errorText={errors.password?.message}
        aria-invalid={errors.password ? 'true' : 'false'}
        placeholder={t('form.input.password.placeholder')}
        extraClass={s.input_password}
        autoComplete='off'
      />

      <SubmitButton disabled={!isValid || isSubmitting} extraClass={s.input_submit}>
        {t('login.form.button.submit')}
      </SubmitButton>
    </form>
  );
};
