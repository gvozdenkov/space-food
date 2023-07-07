import s from './profile.module.scss';
import clsx from 'clsx';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useTranslation } from 'react-i18next';
import { FormSubmitBtn } from '../../components/form/components/form-submit-btn';
import { ButtonLoader } from '../../components/button-loader';
import { FormErrorMessage } from '../../components/form-error-message';
import { DevTool } from '@hookform/devtools';
import { useProfile } from './use-profile';

export const Profile = (props) => {
  const { t } = useTranslation();
  const { form, fetcher, field, onIconClick, refs, isSubmitting, isSubmitSuccessful } =
    useProfile();

  // form - object from react-hook-form
  const { register, formState, control, reset } = form;
  const { errors, isDirty, isValid } = formState;

  return (
    <>
      <section className={clsx(s.profile)}>
        <fetcher.Form method='POST' action='/profile?index' className={clsx(s.form)}>
          <Input
            id={field.NAME}
            type={'text'}
            icon={'EditIcon'}
            onIconClick={() => onIconClick(refs.nameRef)}
            extraClass={clsx(s.input_name)}
            placeholder={t('form.placeholder.name')}
            error={!!errors[field.NAME]?.message}
            errorText={errors[field.NAME]?.message}
            {...register(field.NAME)}
          />
          <Input
            id={field.EMAIL}
            type={'email'}
            icon={'EditIcon'}
            onIconClick={() => onIconClick(refs.emailRef)}
            extraClass={clsx(s.input_email)}
            placeholder={t('form.placeholder.email')}
            error={!!errors[field.EMAIL]?.message}
            errorText={errors[field.EMAIL]?.message}
            {...register(field.EMAIL)}
          />
          <Input
            id={field.PASSWORD}
            type={'password'}
            icon={'EditIcon'}
            onIconClick={() => onIconClick(refs.passwordRef)}
            extraClass={clsx(s.input_pwd)}
            placeholder={t('form.placeholder.password')}
            error={!!errors[field.PASSWORD]?.message}
            errorText={errors[field.PASSWORD]?.message}
            {...register(field.PASSWORD)}
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

          {props.outlet && <FormErrorMessage message={props.outlet} />}

          {isSubmitSuccessful && !isDirty && (
            <p ref={refs.successMsgRef} aria-live='assertive' className='text text_color_success'>
              {t('profile.form.sucess')}
            </p>
          )}
        </fetcher.Form>
        <DevTool control={control} />
      </section>
      <p className={clsx(s.comment, 'text text_type_main-default text_color_inactive')}>
        {t('profile.comment')}
      </p>
    </>
  );
};
