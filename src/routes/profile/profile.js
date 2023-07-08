import s from './profile.module.scss';
import clsx from 'clsx';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useTranslation } from 'react-i18next';
import { FormSubmitBtn } from '../../components/form/form-submit-btn';
import { ButtonLoader } from '../../components/button-loader';
import { ErrorMessage } from '../../components/error-message';
import { useProfile } from './use-profile';
import { Controller } from 'react-hook-form';

export const Profile = (props) => {
  const { t } = useTranslation();
  const { form, fetcher, input, isSubmitting, isSubmitSuccessful, onIconClick } = useProfile();

  // form - object from react-hook-form
  const { formState, control, reset } = form;
  const { isDirty, isValid } = formState;

  return (
    <>
      <section className={clsx(s.profile)}>
        <fetcher.Form method='POST' action='/profile?index' className={clsx(s.form)}>
          <Controller
            control={control}
            name={input.NAME}
            render={({ field, fieldState }) => (
              <Input
                id={input.NAME}
                type={'text'}
                icon={'EditIcon'}
                extraClass={clsx(s.input_name)}
                placeholder={t('form.placeholder.name')}
                error={fieldState?.invalid}
                errorText={fieldState.error?.message}
                onIconClick={() => onIconClick(input.NAME)}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name={input.EMAIL}
            render={({ field, fieldState }) => (
              <Input
                id={input.EMAIL}
                type={'text'}
                icon={'EditIcon'}
                extraClass={clsx(s.input_email)}
                placeholder={t('form.placeholder.email')}
                error={fieldState?.invalid}
                errorText={fieldState.error?.message}
                onIconClick={() => onIconClick(input.EMAIL)}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name={input.PASSWORD}
            render={({ field, fieldState }) => (
              <Input
                id={input.PASSWORD}
                type={'password'}
                icon={'EditIcon'}
                extraClass={clsx(s.input_password)}
                placeholder={t('form.placeholder.password')}
                error={fieldState?.invalid}
                errorText={fieldState.error?.message}
                onIconClick={() => onIconClick(input.PASSWORD)}
                {...field}
              />
            )}
          />

          {isDirty && (
            <>
              <FormSubmitBtn disabled={!isValid || isSubmitting} extraClass={clsx(s.input_submit)}>
                {isSubmitting ? <ButtonLoader /> : t('profile.form.submit')}
              </FormSubmitBtn>
              <Button
                type='secondary'
                htmlType='reset'
                onClick={() => reset()}
                extraClass={clsx(s.input_cancel)}>
                {t('profile.form.cancel')}
              </Button>
            </>
          )}

          {props.outlet && <ErrorMessage message={props.outlet} extraClass='mt-8' />}

          {isSubmitSuccessful && !isDirty && (
            <p aria-live='assertive' className='text text_color_success'>
              {t('profile.form.sucess')}
            </p>
          )}
        </fetcher.Form>
      </section>
      <p className={clsx(s.comment, 'text text_type_main-default text_color_inactive')}>
        {t('profile.comment')}
      </p>
    </>
  );
};
