import { useTranslation } from 'react-i18next';
import { object, string } from 'yup';
import { useReactHookForm } from '../../../../components/form/hooks/use-react-hook-form';

export const useRegisterForm = () => {
  const { t } = useTranslation();

  const input = {
    NAME: 'name',
    EMAIL: 'email',
    PASSWORD: 'password',
  };

  const defaultValues = {
    [input.NAME]: '',
    [input.EMAIL]: '',
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
      .min(3, t('form.errors.password.min'))
      .required(t('form.errors.input.required')),
  });

  const { form, isSubmitting } = useReactHookForm({
    defaultValues,
    validationSchema,
  });

  // form - object from react-hook-form
  const { formState, control } = form;
  const { isDirty, isValid } = formState;

  return {
    control,
    isDirty,
    isValid,
    input,
    isSubmitting,
  };
};
