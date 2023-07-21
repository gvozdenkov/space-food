import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERYKEY } from '../../../utils/config';
import { api } from '../../../app/api-setup';

export const logInMutation = async ({ email, password }) => {
  const res = await api.post('/auth/login', {
    email,
    password,
  });

  return res.data;
};

export const useLogInMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [QUERYKEY.USER],
    mutationFn: logInMutation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERYKEY.USER] });
    },
    onError: (error) => {
      console.log('login muatation err:', error);
    },
  });
};
