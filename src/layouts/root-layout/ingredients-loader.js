import { api } from '../../services/api-setup';
import { QUERYKEY } from '../../utils/config';

export const ingredientsQuery = () => ({
  queryKey: [QUERYKEY.INGREDIENTS],
  queryFn: async () => {
    const ingredients = await api.get('ingredients');

    if (!ingredients) {
      throw new Response('', {
        status: 404,
        statusText: 'Ingredients Not Found',
      });
    }
    const ingredientsObj = ingredients.data.data.reduce(
      (obj, item) => ({ ...obj, [item._id]: item }),
      {},
    );

    return ingredientsObj;
  },
});

// return data or fetch it
export const ingredientsLoader = (queryClient) => async () =>
  await queryClient.ensureQueryData(ingredientsQuery());
