import clsx from 'clsx';
import { BurgerConstructorList } from '../burger-constructor-list';
import { BurgerConstructorTotal } from '../burger-constructor-total';
import s from './burger-constructor.module.scss';

export const BurgerConstructor = () => {
  return (
    <section className={clsx(s.burgerConstructor, 'pt-25 pl-4')}>
      <BurgerConstructorList />
      <BurgerConstructorTotal />
    </section>
  );
};
