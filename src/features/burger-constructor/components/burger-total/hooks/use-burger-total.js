import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import {
  selectAllOrderItems,
  selectOrderBun,
  selectOrderIngredients,
} from '../../../services/order-slice';
import { ingredientsQuery } from '../../../../../routes/root-layout/ingredients-loader';
import { useOrderMutation } from './use-order-mutation';

export const useBurgerTotal = () => {
  const { data: ingredientsObj } = useQuery(ingredientsQuery());
  const { t } = useTranslation();
  const { mutate: orderMutation, error: mutationError, isError, isLoading } = useOrderMutation();

  const bun = useSelector(selectOrderBun);
  const ingredients = useSelector(selectOrderIngredients);
  const orderItems = useSelector(selectAllOrderItems);

  const error = mutationError?.response?.data?.message ?? t('burgerConstructor.error.createOrder');

  const totalPrice = orderItems.reduce((sum, id) => (sum += ingredientsObj[id].price), 0);

  const bunAdded = Object.keys(bun).length !== 0;
  const ingredientAdded = ingredients.length > 0;
  const isMinimalOrder = bunAdded && ingredientAdded;
  const isShowPrice = orderItems.length > 0;

  const onSubmit = (e) => {
    e.preventDefault();
    orderMutation(ingredients);
  };

  return {
    onSubmit,
    isError,
    error,
    isLoading,
    isMinimalOrder,
    isShowPrice,
    totalPrice,
  };
};
