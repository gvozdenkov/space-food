import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCreateOrderMutation } from '../../../../../services/api/api';
import { constructorReseted, totalPriceCaluclated } from '../../../services/order-slice';
import { FETCH_STATUS } from '../../../../../utils/constants';
import { orderCreated } from '../../../../../services/order-slice';
import { useLocation, useNavigate } from 'react-router-dom';
import { PATH } from '../../../../../utils/config';

export const useBurgerTotal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { constructorItems, bun, ingredients, totalPrice } = useSelector(
    (state) => state.burgerConstructor,
  );
  const cartIngredients = constructorItems.map((item) => item._id);

  const bunAdded = Object.keys(bun).length !== 0;
  const ingredientAdded = ingredients.length > 0;
  const isMinimalOrder = bunAdded && ingredientAdded;

  useEffect(() => {
    dispatch(totalPriceCaluclated());
  }, [constructorItems, dispatch]);

  // useEffect(() => {
  //   if (isSuccess) {
  //     dispatch(constructorReseted());
  //   }
  // }, [isSuccess, dispatch]);

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
