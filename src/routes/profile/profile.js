import s from './profile.module.scss';
import clsx from 'clsx';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useTranslation } from 'react-i18next';
import { FormSubmitBtn } from '../../components/form/form-submit-btn';
import { ButtonLoader } from '../../components/button-loader';
import { useProfileForm } from './use-profile-form';
import { TextInput } from '../../components/form/text-input';
import { PasswordInput } from '../../components/form/password-input';
import { ErrorMessage } from '../../components/error-message';

export const Profile = () => {
  const { t } = useTranslation();
  const {
    control,
    reset,
    isDirty,
    isValid,
    inputName,
    onIconClick,
    onSubmit,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useProfileForm();

  return (
    <>
      <section className={clsx(s.profile)}>
        <form onSubmit={onSubmit()} className={clsx(s.form)}>
          <TextInput
            control={control}
            inputName={inputName.NAME}
            placeholder={t('form.placeholder.name')}
            icon={'EditIcon'}
            onIconClick={() => onIconClick(inputName.NAME)}
            extraClass={clsx(s.input_name)}
          />

          <TextInput
            type='email'
            control={control}
            inputName={inputName.EMAIL}
            placeholder={t('form.placeholder.email')}
            icon={'EditIcon'}
            onIconClick={() => onIconClick(inputName.EMAIL)}
            extraClass={clsx(s.input_email)}
          />

          <PasswordInput
            control={control}
            inputName={inputName.PASSWORD}
            placeholder={t('form.placeholder.password')}
            extraClass={clsx(s.input_password)}
          />

          {isDirty && (
            <>
              <FormSubmitBtn disabled={!isValid || isLoading} extraClass={clsx(s.input_submit)}>
                {isLoading ? <ButtonLoader /> : t('profile.form.submit')}
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

          {isError && <ErrorMessage message={error} extraClass={clsx(s.error)} />}

          {isSuccess && !isDirty && (
            <p aria-live='assertive' className='text text_color_success'>
              {t('profile.form.sucess')}
            </p>
          )}
        </form>
      </section>

      <p className={clsx(s.comment, 'text text_type_main-default text_color_inactive')}>
        {t('profile.comment')}
      </p>
    </>
  );
};
