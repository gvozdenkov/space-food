import { useMutation, useQueryClient } from '@tanstack/react-query';
import { authApi } from '../../../app/api-setup';
import { QUERYKEY } from '../../../utils/config';

export const editUserMutation = async ({ name, email, password }) => {
  const res = await authApi.patch('/user', {
    name,
    email,
    password,
  });

  return res.data;
};

export const useEditUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [QUERYKEY.USER],
    mutationFn: editUserMutation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERYKEY.USER] });
    },
  });
};
