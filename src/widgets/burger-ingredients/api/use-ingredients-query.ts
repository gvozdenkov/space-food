import { QueryClient, useQuery } from '@tanstack/react-query';

import { Ingredient, Ingredients, IngredientsRes } from '#shared/api/types';
import { QUERYKEY } from '#shared/config';
import { publicApi } from '#shared/api';

const ingredientsQuery = () => ({
  queryKey: [QUERYKEY.INGREDIENTS],
  queryFn: async (options?: { signal?: AbortSignal }) => {
    const { data } = await publicApi.get<IngredientsRes>('ingredients', {
      signal: options?.signal,
    });

    const ingredientsArray = data.data;

    const ingredientsObj = ingredientsArray.reduce<Ingredients>(
      (obj, item) => ({ ...obj, [item._id]: item }),
      {},
    );

    return { ingredientsArray, ingredientsObj };
  },
});

type GetIngredientsQuery = {
  ingredientsArray: Ingredient[];
  ingredientsObj: Ingredients;
};

export const useGetIngredientsQuery = () =>
  useQuery<GetIngredientsQuery, Error>({
    ...ingredientsQuery(),
    refetchOnMount: false,
  });

// return data or fetch it
export const ingredientsLoader = (queryClient: QueryClient) => async () =>
  await queryClient.ensureQueryData(ingredientsQuery());
