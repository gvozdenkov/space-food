import clsx from 'clsx';
import { BurgerComponents } from '../burger-components';
import { BurgerConstructorTotal } from '../burger-constructor-total';
import s from './burger-constructor.module.scss';
import { useContext } from 'react';
import { ConstructorContext } from '../../utils/contexts/ConstructorContext';

export const BurgerConstructor = () => {
  const { getTotalPrice } = useContext(ConstructorContext);

  return (
    <section className={clsx(s.burgerConstructor, 'pt-25 pl-4')}>
      <BurgerComponents />
      <BurgerConstructorTotal totalPrice={getTotalPrice()} />
    </section>
  );
};
