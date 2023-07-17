import { useQuery } from '@tanstack/react-query';
import { ingredientsQuery } from '../../../../routes/root-layout/ingredients-loader';
import { orderStatusIds } from '../../../../utils/config';
import { ordersQuery } from '../../../../routes/orders/orders-loader';

export const useOrderDetails = ({ number }) => {
  const { data: ingredientsCatalog } = useQuery(ingredientsQuery());
  const { data: ordersData } = useQuery(ordersQuery());
  const { orders } = ordersData;

  const order = orders.find((order) => order.number === Number(number));

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
