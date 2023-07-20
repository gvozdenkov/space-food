import s from './profile.module.scss';
import clsx from 'clsx';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useTranslation } from 'react-i18next';
import { FormSubmitBtn } from '../../components/form/form-submit-btn';
import { ButtonLoader } from '../../components/button-loader';
import { ErrorMessage } from '../../components/error-message';
import { useProfileForm } from './use-profile-form';
import { TextInput } from '../../components/form/text-input';
import { EmailInput } from '../../components/form/email-input';
import { PasswordInput } from '../../components/form/password-input';

export const Profile = (props) => {
  const { t } = useTranslation();
  const {
    control,
    reset,
    isDirty,
    isValid,
    fetcher,
    input,
    isSubmitting,
    isSubmitSuccessful,
    onIconClick,
  } = useProfileForm();

  return (
    <>
      <section className={clsx(s.profile)}>
        <fetcher.Form method='POST' action='/profile?index' className={clsx(s.form)}>
          <TextInput
            control={control}
            inputName={input.NAME}
            placeholder={t('form.placeholder.name')}
            icon={'EditIcon'}
            onIconClick={() => onIconClick(input.NAME)}
            extraClass={clsx(s.input_name)}
          />

          <EmailInput
            control={control}
            inputName={input.EMAIL}
            placeholder={t('form.placeholder.email')}
            icon={'EditIcon'}
            onIconClick={() => onIconClick(input.EMAIL)}
            extraClass={clsx(s.input_email)}
          />

          <PasswordInput
            control={control}
            inputName={input.PASSWORD}
            placeholder={t('form.placeholder.password')}
            extraClass={clsx(s.input_password)}
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
