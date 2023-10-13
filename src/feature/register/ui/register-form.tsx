import { useTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Input, SubmitButton } from '#shared/ui/form';
import { PasswordInput } from '#shared/ui/form/password-input';
import s from './register-from.module.scss';
import { useRegisterMutation } from '#entities/session';

export const RegisterForm = () => {
  const { t } = useTranslation();

  const formSchema = z.object({
    name: z
      .string()
      .nonempty(t('form.input.common.error.required'))
      .min(2, {
        message: t('form.input.name.error.minLength', {
          length: 2,
        }),
      })
      .max(20, {
        message: t('form.input.name.error.maxLength', {
          length: 20,
        }),
      }),
    email: z.string().email({ message: t('form.input.email.error.incorrect') }),
    password: z.string().nonempty(t('form.input.common.error.required')),
  });

  type FormSchema = z.infer<typeof formSchema>;

  const defaultValues: FormSchema = {
    name: '',
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

  const { mutate: registerMutation } = useRegisterMutation();

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    registerMutation(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s['register-form']}>
      <h1 className='text text_type_main-medium'>{t('register.form.title')}</h1>
      <Input
        type='text'
        icon='edit'
        {...register('name')}
        error={!!errors.name}
        errorText={errors.name?.message}
        aria-invalid={!!errors.name}
        placeholder={t('form.input.name.placeholder')}
        extraClass={s.input_name}
        onIconClick={() => setFocus('name')}
        autoComplete='username'
      />
      <Input
        type='email'
        icon='edit'
        {...register('email')}
        error={!!errors.email}
        errorText={errors.email?.message}
        aria-invalid={!!errors.email}
        placeholder={t('form.input.email.placeholder')}
        extraClass={s.input_email}
        onIconClick={() => setFocus('email')}
        autoComplete='email'
      />
      <PasswordInput
        {...register('password')}
        error={!!errors.password}
        errorText={errors.password?.message}
        aria-invalid={!!errors.password}
        placeholder={t('form.input.password.placeholder')}
        extraClass={s.input_password}
        autoComplete='off'
      />

      <SubmitButton disabled={!isValid || isSubmitting} extraClass={s.input_submit}>
        {t('register.form.button.submit')}
      </SubmitButton>
    </form>
  );
};
