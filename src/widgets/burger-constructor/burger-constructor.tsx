import { clx } from '#shared/lib';
import { Total } from './ui/total/total';
import { Burger } from '#widgets/burger';

import s from './burger-constructor.module.scss';

export const BurgerConstructor = () => {
  return (
    <section className={clx(s.burgerConstructor, 'pt-25 pl-4')}>
      <Burger />
      <Total />
    </section>
  );
};
