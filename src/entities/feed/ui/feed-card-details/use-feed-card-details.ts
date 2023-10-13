import { useGetIngredientsQuery } from '#widgets/burger-ingredients';
import { Ingredient } from '#api/ingredients.types';
import { Order } from '#entities/feed/types';

export const useOrderDetails = ({ order }: Order) => {
  const { data } = useGetIngredientsQuery();
  const ingredientsCatalog = data?.ingredientsObj;

  const orderDate = new Date(order.createdAt);

  const isDone = order.status === 'done';

  const ingredientsAll = order.ingredients.reduce<Ingredient[]>(
    (res, item) => [...res, ingredientsCatalog![item]],
    [],
  );

  type IngredientCount = {
    [key: string]: {
      ingredient: Ingredient;
      count: number;
    };
  };

  const ingredientsCount = ingredientsAll.reduce<IngredientCount>(
    (res, item) => ({
      ...res,
      [item._id]: {
        ingredient: item,
        count: res[item._id] ? (res[item._id].count += 1) : 1,
      },
    }),
    {},
  );

  const ingredientsCountIds = Object.keys(ingredientsCount);

  const totalPrice = ingredientsAll.reduce((sum, item) => (sum += item.price), 0);

  return {
    ingredientIds: ingredientsCountIds,
    ingredients: ingredientsCount,
    totalPrice,
    orderDate,
    isDone,
  };
};
