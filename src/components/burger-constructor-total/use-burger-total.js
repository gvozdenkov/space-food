import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCreateOrderMutation } from '../../services/api/api';
import { constructorReseted, totalPriceCaluclated } from '../../services/burger-constructor-slice';
import { FETCH_STATUS } from '../../utils/constants';
import { orderCreated } from '../../services/order-slice';
import { useAuth } from '../../common/hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import { PATH } from '../../utils/config';

export const useBurgerTotal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuth } = useAuth();

  const [createOrder, { isLoading, isFetching, isSuccess, isError, error, data: order }] =
    useCreateOrderMutation();

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

  useEffect(() => {
    if (isSuccess) {
      dispatch(constructorReseted());
    }
  }, [isSuccess, dispatch]);

  const [openModal, setOpenModal] = useState(null);
  const closeModal = () => setOpenModal(null);

  const handleCreateOrder = async () => {
    if (!isAuth) {
      console.log(`You don't authorized. Pleae login`);
      navigate(PATH.LOGIN, { state: { from: location.pathname } });
    }
    
    if (!isLoading && !isFetching) {
      try {
        await createOrder({ ingredients: cartIngredients }).unwrap();
      } catch (err) {
        console.error('Failed to create the order: ', err);
      }
    }
  };

  useEffect(() => {
    if (isError) setOpenModal(FETCH_STATUS.FAILED);
    if (isLoading) setOpenModal(FETCH_STATUS.LOADING);
    if (isSuccess) {
      dispatch(orderCreated(order));
      setOpenModal(FETCH_STATUS.SUCCESSED);
    }
  }, [isError, isLoading, isSuccess, dispatch, order]);

  return {
    order,
    isMinimalOrder,
    totalPrice,
    isLoading,
    error,
    handleCreateOrder,
    openModal,
    closeModal,
  };
};
