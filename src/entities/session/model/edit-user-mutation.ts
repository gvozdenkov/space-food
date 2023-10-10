import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UserService } from '#shared/api';
import { QUERYKEY } from '#shared/config';

export const useEditUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [QUERYKEY.USER],
    mutationFn: UserService.editUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERYKEY.USER] });
    },
  });
};
