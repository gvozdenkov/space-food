import { UserService } from '#shared/api';
import { QUERYKEY } from '#shared/config';
import { QueryClient, useQuery } from '@tanstack/react-query';

const userQuery = {
  queryKey: [QUERYKEY.USER],
  queryFn: async () => {
    try {
      const user = await UserService.getMe();
      return user.data.user;
    } catch (err) {
      return null;
    }
  },
};

export const useUserQuery = () =>
  useQuery({
    ...userQuery,
  });

export const userLoader = (queryClient: QueryClient) => async () => {
  return await queryClient.ensureQueryData(userQuery);
};
