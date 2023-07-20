import { useTranslation } from 'react-i18next';
import { object, string } from 'yup';
import { useReactHookForm } from '../../../../components/form/hooks/use-react-hook-form';

export const useLoginForm = () => {
  const { t } = useTranslation();

  const input = {
    EMAIL: 'email',
    PASSWORD: 'password',
  };

  const defaultValues = {
    [input.EMAIL]: '',
    [input.PASSWORD]: '',
  };

  const validationSchema = object({
    [input.EMAIL]: string()
      .email(t('form.errors.email.incorrect'))
      .required(t('form.errors.input.required')),
    [input.PASSWORD]: string().required(t('form.errors.input.required')),
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
