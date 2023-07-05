import clsx from 'clsx';
import s from './burger-constructor.module.scss';
import { BurgerConstructorList } from './components/burger-constructor-list';
import { BurgerTotal } from './components/burger-total';

export const BurgerConstructor = () => {
  return (
    <section className={clsx(s.burgerConstructor, 'pt-25 pl-4')}>
      <BurgerConstructorList />
      <BurgerTotal />
    </section>
  );
};
