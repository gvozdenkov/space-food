import { api } from "../../services/api/api-axios";

export const ingredientsQuery = () => ({
  queryKey: ['ingredients'],
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
export const loader = (queryClient) => async () =>
  await queryClient.ensureQueryData(ingredientsQuery());
