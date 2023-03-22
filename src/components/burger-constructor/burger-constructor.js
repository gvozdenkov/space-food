import clsx from 'clsx';
import { BurgerComponents } from '../burger-components';
import { BurgerConstructorTotal } from '../burger-constructor-total';
import s from './burger-constructor.module.css';
import ProopTypes from 'prop-types';

export const BurgerConstructor = () => {
  return (
    <section className={clsx(s.burgerConstructor, 'pt-25')}>
      <BurgerComponents />
      <BurgerConstructorTotal totalPrice={610} />
    </section>
  );
};