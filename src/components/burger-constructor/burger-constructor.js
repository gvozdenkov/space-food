import clsx from 'clsx';
import { BurgerComponents } from '../burger-components';
import { BurgerConstructorTotal } from '../burger-constructor-total';
import s from './burger-constructor.module.scss';
import { useContext } from 'react';
import { BurgerConstructorContext } from '../../utils/contexts/burgerConstructorContext';

export const BurgerConstructor = () => {
  const { burgerConstructorItems } = useContext(BurgerConstructorContext);

  const total = burgerConstructorItems.reduce((sum, component) => sum + component.price, 0);

  return (
    <section className={clsx(s.burgerConstructor, 'pt-25 pl-4')}>
      <BurgerComponents components={burgerConstructorItems} />
      <BurgerConstructorTotal totalPrice={total} />
    </section>
  );
};
