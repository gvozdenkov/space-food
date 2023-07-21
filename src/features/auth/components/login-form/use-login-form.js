import { useTranslation } from 'react-i18next';
import { object, string } from 'yup';
import { useReactHookForm } from '../../../../components/form/hooks/use-react-hook-form';
import { CookieService } from '../../../../utils/cookie-service';
import { Navigate } from 'react-router-dom';
import { useLogInMutation } from '../../services/login-mutation';
import { useCallback } from 'react';

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
      .email(t('form.errors.email.incorrect'))
      .required(t('form.errors.input.required')),
    [inputName.PASSWORD]: string().required(t('form.errors.input.required')),
  });

  const { form } = useReactHookForm({
    defaultValues,
    validationSchema,
  });

  // form - object from react-hook-form
  const { formState, control, handleSubmit } = form;
  const { isDirty, isValid } = formState;

  // ============ Mutation ===============

  const { mutate, error: mutationError, isError, isLoading } = useLogInMutation();

  const error = mutationError?.response?.data?.message ?? t('error-page.401.text');

  const onSubmit = useCallback(
    () =>
      handleSubmit((data) => {
        mutate(data, {
          onSuccess: ({ accessToken: token, refreshToken }) => {
            const accessToken = token.split(' ')[1];

            CookieService.setAccessToken(accessToken);
            CookieService.setRefreshToken(refreshToken);

            return <Navigate to={redirectTo} replace />;
          },
        });
      }),
    [handleSubmit, mutate, redirectTo],
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
