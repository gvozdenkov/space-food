import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ResponseError, UserService } from '#shared/api';
import { QUERYKEY } from '#shared/config';
import { EditUser, UserRes } from '#shared/api';

export const useEditUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<UserRes, ResponseError, EditUser>({
    mutationKey: [QUERYKEY.USER],
    mutationFn: UserService.editUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERYKEY.USER] });
    },
  });
};
