import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERYKEY } from '../../../utils/config';
import { UserService } from './user-service';

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
