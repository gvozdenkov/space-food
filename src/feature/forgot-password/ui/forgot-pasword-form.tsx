import { useTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Input, SubmitButton } from '#shared/ui/form';

import s from './forgot-pasword-from.module.scss';

export const ForgotPaswordForm = () => {
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
    console.log('send forgot password code to email', data);
    reset();
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

      <SubmitButton disabled={!isValid || isSubmitting} extraClass={s.input_submit}>
        {t('forgot.form.button.submit')}
      </SubmitButton>
    </form>
  );
};
