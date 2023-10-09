import { useTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { clx } from '#shared/lib';
import { Button, Input, PasswordInput, SubmitButton } from '#shared/ui/form';

import s from './profile.page.module.scss';
import { useUserQuery } from '#entities/session';

export const ProfilePage = () => {
  const { t } = useTranslation();
  const { data: user } = useUserQuery();

  const formSchema = z.object({
    name: z
      .string()
      .min(2, {
        message: t('form.input.name.error.minLength', {
          length: 2,
        }),
      })
      .max(20, {
        message: t('form.input.name.error.maxLength', {
          length: 20,
        }),
      })
      .optional(),

    email: z.string().email(t('form.input.email.error.incorrect')).optional(),

    // password optional, but if used min 4
    password: z
      .union([
        z.string().length(0, {
          message: t('form.input.password.error.minLength', {
            length: 4,
          }),
        }),
        z.string().min(4, {
          message: t('form.input.password.error.minLength', {
            length: 4,
          }),
        }),
      ])
      .optional()
      .transform((e) => (e === '' ? undefined : e)),
  });

  type FormSchema = z.infer<typeof formSchema>;

  const defaultValues: FormSchema = {
    name: user?.name,
    email: user?.email,
    password: '',
  };

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { isValid, isDirty, isSubmitting, errors },
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
    <>
      <section className={clx(s.profile)}>
        <form onSubmit={handleSubmit(onSubmit)} className={clx(s.form)}>
          <Input
            type='text'
            icon='edit'
            {...register('name')}
            error={!!errors.name}
            errorText={errors.name?.message}
            aria-invalid={errors.name ? 'true' : 'false'}
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

          {isDirty && (
            <>
              <SubmitButton disabled={!isValid || isSubmitting} extraClass={s.input_submit}>
                {t('profile.form.button.submit')}
              </SubmitButton>
              <Button
                variant='secondary'
                htmlType='reset'
                disabled={isSubmitting}
                onClick={() => reset()}
                extraClass={clx(s.input_cancel)}>
                {t('profile.form.button.cancel')}
              </Button>
            </>
          )}
        </form>
      </section>

      <p className={clx(s.comment, 'text text_type_main-default text_color_inactive')}>
        {t('profile.comment')}
      </p>
    </>
  );
};
