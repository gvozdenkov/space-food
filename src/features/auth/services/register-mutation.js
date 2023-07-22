import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../../../app/api-setup';
import { QUERYKEY } from '../../../utils/config';

export const registerMutation = async ({ name, email, password }) => {
  const res = await api.post('/auth/register', {
    name,
    email,
    password,
  });

  return res.data;
};

export const useRegisterMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [QUERYKEY.USER],
    mutationFn: registerMutation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERYKEY.USER] });
    },
  });
};
