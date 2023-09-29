import { QueryClient, useQuery } from '@tanstack/react-query';
import { queryKey } from '#api';
import { Ingredient, Ingredients } from '#api/ingredients.types';
import { getIngredients } from '#api/ingredients';

const ingredientsQuery = () => ({
  queryKey: [queryKey.INGREDIENTS],
  queryFn: getIngredients,
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
