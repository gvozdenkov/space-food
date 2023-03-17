import cn from 'clsx';
import { BurgerComponents } from '../burger-components';
import { BurgerConstructorTotal } from '../burger-constructor-total';
import s from './burger-constructor.module.css';

export const BurgerConstructor = (props) => {
  return (
    <section className={cn(s.burgerConstructor, 'pt-25')}>
      <BurgerComponents />
      <BurgerConstructorTotal />
    </section>
  );
};