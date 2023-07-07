import { useEffect, useRef } from 'react';
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

  const field = {
    NAME: 'name',
    EMAIL: 'email',
    PASSWORD: 'password',
  };

  const defaultValues = {
    [field.NAME]: user?.name,
    [field.EMAIL]: user?.email,
    [field.PASSWORD]: '',
  };

  const validationSchema = Yup.object({
    [field.NAME]: Yup.string()
      .min(
        2,
        t('form.errors.name.min', {
          length: 2,
        }),
      )
      .required(t('form.errors.input.required')),
    [field.EMAIL]: Yup.string()
      .email(t('form.errors.email.incorrect'))
      .required(t('form.errors.input.required')),
    [field.PASSWORD]: Yup.string()
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
        password: '',
      });
    }
  }, [isSubmitSuccessful]);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const successMsgRef = useRef(null);

  const refs = {
    nameRef,
    emailRef,
    passwordRef,
    successMsgRef,
  };

  const onIconClick = (ref) => {
    setTimeout(() => {
      ref.current.focus();
      ref.current.select();
    }, 0);
  };

  return {
    form,
    fetcher,
    field,
    onIconClick,
    refs,
    isSubmitting,
    isSubmitSuccessful,
  };
};
