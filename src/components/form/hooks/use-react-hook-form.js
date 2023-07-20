import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigation } from 'react-router-dom';

export const useReactHookForm = ({ defaultValues, validationSchema }) => {
  const navigation = useNavigation();

  const form = useForm({
    defaultValues,
    mode: 'onTouched',
    resolver: yupResolver(validationSchema),
  });

  const isSubmitting = navigation.state === 'submitting';

  return { form, isSubmitting };
};
