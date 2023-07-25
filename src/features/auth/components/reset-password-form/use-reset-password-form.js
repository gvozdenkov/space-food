import { useTranslation } from 'react-i18next';
import { object, string } from 'yup';
import { useReactHookForm } from '../../../../components/form/hooks/use-react-hook-form';

export const useResetForm = () => {
  const { t } = useTranslation();

  const input = {
    PASSWORD: 'password',
    TOKEN: 'token',
  };

  const defaultValues = {
    [input.PASSWORD]: '',
    [input.TOKEN]: '',
  };

  const validationSchema = object({
    [input.PASSWORD]: string()
      .min(
        3,
        t('form.errors.password.min', {
          length: 3,
        }),
      )
      .required(t('form.errors.input.required')),
    [input.TOKEN]: string().required(t('form.errors.input.required')),
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
