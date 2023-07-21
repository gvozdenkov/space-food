import { useEffect } from 'react';
import { useFetcher } from 'react-router-dom';
import { object, string } from 'yup';
import { useTranslation } from 'react-i18next';
import { useReactHookForm } from '../../components/form/hooks/use-react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { userQuery } from '../profile-layout/user-loader';

export const useProfileForm = () => {
  const { t } = useTranslation();
  // for state mutation (update user) without navigation
  const fetcher = useFetcher();

  const { data: user } = useQuery(userQuery());

  const input = {
    NAME: 'name',
    EMAIL: 'email',
    PASSWORD: 'password',
  };

  const defaultValues = {
    [input.NAME]: user?.name,
    [input.EMAIL]: user?.email,
    [input.PASSWORD]: '',
  };

  const validationSchema = object({
    [input.NAME]: string()
      .min(
        2,
        t('form.errors.name.min', {
          length: 2,
        }),
      )
      .required(t('form.errors.input.required')),
    [input.EMAIL]: string()
      .email(t('form.errors.email.incorrect'))
      .required(t('form.errors.input.required')),
    [input.PASSWORD]: string()
      .min(
        4,
        t('form.errors.password.min', {
          length: 4,
        }),
      )
      .max(
        30,
        t('form.errors.password.max', {
          length: 30,
        }),
      )
      // skip validation if password is empty
      .nullable()
      .transform((curr, orig) => (orig === '' ? null : curr)),
  });

  const { form } = useReactHookForm({
    defaultValues,
    validationSchema,
  });

  // form - object from react-hook-form
  const { formState, control, reset } = form;
  const { isDirty, isValid } = formState;

  // check success submit with fetcher
  // server return in res { success: true / false, user } object
  const isSubmitSuccessful = fetcher.data?.success;
  const isSubmitting = fetcher.state === 'submitting';

  useEffect(() => {
    if (isSubmitSuccessful) {
      form.reset({
        [input.NAME]: user?.name,
        [input.EMAIL]: user?.email,
        [input.PASSWORD]: '',
      });
    }
    // eslint-disable-next-line
  }, [isSubmitSuccessful]);

  const onIconClick = (name) => {
    form.setFocus(name, { shouldSelect: true });
  };

  return {
    control,
    reset,
    isDirty,
    isValid,
    fetcher,
    input,
    isSubmitting,
    isSubmitSuccessful,
    onIconClick,
  };
};
