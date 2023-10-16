import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UserService } from '#shared/api';
import { QUERYKEY } from '#shared/config';
import { ApiError } from '#shared/api/types';
import { EditUser, UserRes } from '#shared/api';

export const useEditUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<UserRes, AxiosError<ApiError>, EditUser>({
    mutationKey: [QUERYKEY.USER],
    mutationFn: UserService.editUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERYKEY.USER] });
    },
  });
};
