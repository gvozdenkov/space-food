import { publicApi } from '#shared/api';
import { Ingredients, IngredientsRes } from './ingredients.types';

const ENDPOINT = 'ingredients';

export const getIngredients = async (options?: { signal?: AbortSignal }) => {
  const { data } = await publicApi.get<IngredientsRes>(ENDPOINT, {
    signal: options?.signal,
  });

  const ingredientsArray = data.data;

  const ingredientsObj = ingredientsArray.reduce<Ingredients>(
    (obj, item) => ({ ...obj, [item._id]: item }),
    {},
  );

  return { ingredientsArray, ingredientsObj };
};
