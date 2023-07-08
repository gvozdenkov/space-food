import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useFetcher } from 'react-router-dom';
import { selectUser } from '../../features/user';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export const useProfile = () => {
  const { t } = useTranslation();
  // for state mutation (update user) without navigation
  const fetcher = useFetcher();

  const user = useSelector(selectUser);

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

  const validationSchema = Yup.object({
    [input.NAME]: Yup.string()
      .min(
        2,
        t('form.errors.name.min', {
          length: 2,
        }),
      )
      .required(t('form.errors.input.required')),
    [input.EMAIL]: Yup.string()
      .email(t('form.errors.email.incorrect'))
      .required(t('form.errors.input.required')),
    [input.PASSWORD]: Yup.string()
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

  // handle form state with react-hook-form
  const form = useForm({
    defaultValues,
    mode: 'onTouched',
    resolver: yupResolver(validationSchema),
  });

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
  }, [isSubmitSuccessful]);

  const onIconClick = (name) => {
    form.setFocus(name, { shouldSelect: true });
  };

  return {
    form,
    fetcher,
    input,
    isSubmitting,
    isSubmitSuccessful,
    onIconClick,
  };
};
