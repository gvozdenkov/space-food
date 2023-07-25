import { useCallback, useEffect } from 'react';
import { object, string } from 'yup';
import { useTranslation } from 'react-i18next';
import { useReactHookForm } from '../../components/form/hooks/use-react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { userQuery } from '../profile-layout/user-loader';
import { useEditUserMutation } from '../../features/profile/services/edit-user-mutation';

export const useProfileForm = () => {
  const { t } = useTranslation();

  const { data: user } = useQuery(userQuery());

  const inputName = {
    NAME: 'name',
    EMAIL: 'email',
    PASSWORD: 'password',
  };

  const defaultValues = {
    [inputName.NAME]: user?.name,
    [inputName.EMAIL]: user?.email,
    [inputName.PASSWORD]: '',
  };

  const validationSchema = object({
    [inputName.NAME]: string()
      .min(
        2,
        t('form.input.name.error.minLength', {
          length: 2,
        }),
      )
      .required(t('form.input.common.error.required')),
    [inputName.EMAIL]: string()
      .email(t('form.input.email.error.incorrect'))
      .required(t('form.input.common.error.required')),
    [inputName.PASSWORD]: string()
      .min(
        4,
        t('form.input.password.error.minLength', {
          length: 4,
        }),
      )
      .max(
        30,
        t('form.input.password.error.maxLength', {
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
  const { formState, control, reset, handleSubmit } = form;
  const { isDirty, isValid } = formState;

  // ============ Mutation ===============

  const {
    data: newUser,
    mutate,
    error: mutationError,
    isError,
    isLoading,
    isSuccess,
  } = useEditUserMutation();

  const onSubmit = useCallback(
    () =>
      handleSubmit((data) => {
        mutate(data);
      }),
    [handleSubmit, mutate],
  );

  const error = mutationError?.response?.data?.message ?? t('profile.error.editProfile');

  useEffect(() => {
    if (isSuccess) {
      const { user } = newUser;

      form.reset({
        [inputName.NAME]: user?.name,
        [inputName.EMAIL]: user?.email,
        [inputName.PASSWORD]: '',
      });
    }
    // eslint-disable-next-line
  }, [isSuccess]);

  const onIconClick = useCallback(
    (name) => {
      form.setFocus(name, { shouldSelect: true });
    },
    [form],
  );

  return {
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
  };
};
