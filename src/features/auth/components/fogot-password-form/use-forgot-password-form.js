import { useTranslation } from 'react-i18next';
import { object, string } from 'yup';
import { useReactHookForm } from '../../../../components/form/hooks/use-react-hook-form';
import { useForgotPasswordMutation } from '../../services/forgot-password-mutation';
import { useCallback } from 'react';

export const useForgotPasswordForm = () => {
  const { t } = useTranslation();

  const inputName = {
    EMAIL: 'email',
  };

  const defaultValues = {
    [inputName.EMAIL]: '',
  };

  const validationSchema = object({
    [inputName.EMAIL]: string()
      .email(t('form.input.email.error.incorrect'))
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

  const { mutate, error: mutationError, isError, isLoading } = useForgotPasswordMutation();

  const error = mutationError?.response?.data?.message ?? t('forgot.error.forgot');

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
