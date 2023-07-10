import { useSelector } from 'react-redux';
import {
  selectAllOrderItems,
  selectOrderBun,
  selectOrderIngredients,
} from '../../../services/order-slice';
import { useQuery } from '@tanstack/react-query';
import { ingredientsQuery } from '../../../../../routes/root-layout/ingredients-loader';

export const useBurgerTotal = () => {
  const { data: ingredientsObj } = useQuery(ingredientsQuery());

  const bun = useSelector(selectOrderBun);
  const ingredients = useSelector(selectOrderIngredients);
  const orderItems = useSelector(selectAllOrderItems);

  const totalPrice = orderItems.reduce((sum, id) => (sum += ingredientsObj[id].price), 0);

  const bunAdded = Object.keys(bun).length !== 0;
  const ingredientAdded = ingredients.length > 0;
  const isMinimalOrder = bunAdded && ingredientAdded;

  return {
    isMinimalOrder,
    totalPrice,
  };
};
