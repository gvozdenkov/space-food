import { useQuery } from '@tanstack/react-query';
import { ingredientsQuery } from '../../../../routes/root-layout/ingredients-loader';
import { orders } from '../../../../routes/orders/orders';
import { orderStatusIds } from '../../../../utils/config';

export const useOrderDetails = ({ number }) => {
  const { data: ingredientsCatalog } = useQuery(ingredientsQuery());

  const order = orders.find((order) => order.number === number);
  const orderDate = new Date(order.createdAt);

  const isDone = order.status === orderStatusIds.DONE;

  const ingredientsAll = order.ingredients.reduce(
    (res, item) => [...res, ingredientsCatalog[item]],
    [],
  );

  const ingredientsCount = ingredientsAll.reduce(
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
    order,
    ingredientIds: ingredientsCountIds,
    ingredients: ingredientsCount,
    orderDate,
    totalPrice,
    isDone,
  };
};
