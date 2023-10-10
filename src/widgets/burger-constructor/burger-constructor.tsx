import { FormEvent } from 'react';
import { clx } from '#shared/lib';
import { Total } from './ui/total/total';
import { Burger } from '#widgets/burger';
import { Checkout } from '#feature/checkout';

import s from './burger-constructor.module.scss';
import { useCreateOrderMutation } from '#entities/cart/model/create-order-mutation';
import { useAppSelector } from '#shared/model/hooks';
import { selectAllCartIds, selectIsMinimalOrder } from '#entities/cart';

export const BurgerConstructor = () => {
  const orderIngredients = useAppSelector(selectAllCartIds);
  const isMinimalOrder = useAppSelector(selectIsMinimalOrder);
  const cartIds = useAppSelector(selectAllCartIds);
  const isShowPrice = cartIds.length > 0;

  const { mutate, isLoading } = useCreateOrderMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(orderIngredients);
  };

  return (
    <section className={clx(s.burgerConstructor, 'pt-25 pl-4')}>
      <Burger extraClass={s.burgerConstructor__burger} />
      {isShowPrice && <Total extraClass={s.burgerConstructor__total} />}

      <form onSubmit={handleSubmit} className={clx(s.burgerConstructor__form, 'mr-4')}>
        <Checkout
          isLoading={isLoading}
          disabled={isLoading || !isMinimalOrder}
          extraClass={clx(s.burgerConstructor__checkoutBtn)}
        />
      </form>
    </section>
  );
};
