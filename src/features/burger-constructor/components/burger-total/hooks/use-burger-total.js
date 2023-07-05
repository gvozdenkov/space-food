import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectOrder } from '../../../services/order-slice';
import { useQuery } from '@tanstack/react-query';
import { ingredientsQuery } from '../../../../../layouts/root-layout/ingredients-loader';

export const useBurgerTotal = () => {
  const { data: ingredientsObj } = useQuery(ingredientsQuery());
  const { orderItems, bun, ingredients } = useSelector(selectOrder);

  const totalPrice = orderItems.reduce((sum, id) => (sum += ingredientsObj[id].price), 0);

  const bunAdded = Object.keys(bun).length !== 0;
  const ingredientAdded = ingredients.length > 0;
  const isMinimalOrder = bunAdded && ingredientAdded;

  const [openModal, setOpenModal] = useState(null);
  const closeModal = () => setOpenModal(null);

  const handleCreateOrder = async () => {
    console.log('creating order...');
  };

  return {
    isMinimalOrder,
    totalPrice,
    handleCreateOrder,
    openModal,
    closeModal,
  };
};
