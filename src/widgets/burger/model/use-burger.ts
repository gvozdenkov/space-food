import { cartModel } from '#entities/cart';
import { useAppDispatch } from '#shared/model/hooks';

export const useBurger = () => {
  const dispatch = useAppDispatch();

  const removeElementFromBurger = (id: string) => {
    dispatch(cartModel.actions.ingredientRemoved(id));
  };

  return { removeElementFromBurger };
};
