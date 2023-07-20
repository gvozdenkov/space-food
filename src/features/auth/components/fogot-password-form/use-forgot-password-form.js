import { useTranslation } from 'react-i18next';
import { object, string } from 'yup';
import { useReactHookForm } from '../../../../components/form/hooks/use-react-hook-form';

export const useForgotForm = () => {
  const { t } = useTranslation();

  const input = {
    EMAIL: 'email',
  };

  const defaultValues = {
    [input.EMAIL]: '',
  };

  const validationSchema = object({
    [input.EMAIL]: string()
      .email(t('form.errors.email.incorrect'))
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
