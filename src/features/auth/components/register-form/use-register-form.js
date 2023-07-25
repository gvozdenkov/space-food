import { useTranslation } from 'react-i18next';
import { object, string } from 'yup';
import { useReactHookForm } from '../../../../components/form/hooks/use-react-hook-form';
import { useRegisterMutation } from '../../services/register-mutation';
import { useCallback } from 'react';

export const useRegisterForm = () => {
  const { t } = useTranslation();

  const inputName = {
    NAME: 'name',
    EMAIL: 'email',
    PASSWORD: 'password',
  };

  const defaultValues = {
    [inputName.NAME]: '',
    [inputName.EMAIL]: '',
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
      .required(t('form.input.common.error.required')),
  });

  const { form } = useReactHookForm({
    defaultValues,
    validationSchema,
  });

  // form - object from react-hook-form
  const { formState, control, handleSubmit } = form;
  const { isDirty, isValid } = formState;

  // ============ Mutation ===============

  const { mutate, error: mutationError, isError, isLoading, isSuccess } = useRegisterMutation();

  const onSubmit = useCallback(
    () =>
      handleSubmit((data) => {
        mutate(data);
      }),
    [handleSubmit, mutate],
  );

  const error = mutationError?.response?.data?.message ?? t('register.error.register');

  return {
    control,
    isDirty,
    isValid,
    inputName,
    onSubmit,
    isLoading,
    isSuccess,
    isError,
    error,
  };
};
