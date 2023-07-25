import { useTranslation } from 'react-i18next';
import { object, string } from 'yup';
import { useCallback } from 'react';
import { useReactHookForm } from '../../../../components/form/hooks/use-react-hook-form';
import { useLogInMutation } from '../../services/login-mutation';

export const useLoginForm = ({ redirectTo }) => {
  const { t } = useTranslation();

  const inputName = {
    EMAIL: 'email',
    PASSWORD: 'password',
  };

  const defaultValues = {
    [inputName.EMAIL]: '',
    [inputName.PASSWORD]: '',
  };

  const validationSchema = object({
    [inputName.EMAIL]: string()
      .email(t('form.input.email.error.incorrect'))
      .required(t('form.input.common.error.required')),
    [inputName.PASSWORD]: string().required(t('form.input.common.error.required')),
  });

  const { form } = useReactHookForm({
    defaultValues,
    validationSchema,
  });

  // form - object from react-hook-form
  const { formState, control, handleSubmit } = form;
  const { isDirty, isValid } = formState;

  // ============ Mutation ===============

  const { mutate, error: mutationError, isError, isLoading } = useLogInMutation({ redirectTo });

  const error = mutationError?.response?.data?.message ?? t('login.error.login');

  const onSubmit = useCallback(
    () =>
      handleSubmit((data) => {
        mutate(data);
      }),
    [handleSubmit, mutate],
  );

  return {
    control,
    isDirty,
    isValid,
    inputName,
    onSubmit,
    isLoading,
    isError,
    error,
  };
};
