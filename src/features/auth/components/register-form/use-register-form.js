import { useTranslation } from 'react-i18next';
import { object, string } from 'yup';
import { useReactHookForm } from '../../../../components/form/hooks/use-react-hook-form';
import { useRegisterMutation } from '../../services/register-mutation';
import { useCallback } from 'react';
import { CookieService } from '../../../../utils/cookie-service';
import { Navigate } from 'react-router-dom';
import { PATH } from '../../../../utils/config';

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
        t('form.errors.name.min', {
          length: 2,
        }),
      )
      .required(t('form.errors.input.required')),
    [inputName.EMAIL]: string()
      .email(t('form.errors.email.incorrect'))
      .required(t('form.errors.input.required')),
    [inputName.PASSWORD]: string()
      .min(3, t('form.errors.password.min'))
      .required(t('form.errors.input.required')),
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
        mutate(data, {
          onSuccess: ({ accessToken: token, refreshToken }) => {
            const accessToken = token.split(' ')[1];

            CookieService.setAccessToken(accessToken);
            CookieService.setRefreshToken(refreshToken);

            return <Navigate to={PATH.HOME} replace />;
          },
        });
      }),
    [handleSubmit, mutate],
  );

  const error = mutationError?.response?.data?.message ?? t('register.form.error');

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
