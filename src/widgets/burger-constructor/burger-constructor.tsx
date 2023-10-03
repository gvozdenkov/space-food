import { clx } from '#shared/lib';
import { Total } from './ui/total/total';
import { Burger } from '#widgets/burger';

import s from './burger-constructor.module.scss';
import { Checkout } from '#feature/checkout';

export const BurgerConstructor = () => {
  return (
    <section className={clx(s['burger-constructor'], 'pt-25 pl-4')}>
      <Burger extraClass={s['burger-constructor__burger']} />
      <Total extraClass={s['burger-constructor__total']} />
      <Checkout extraClass={clx(s['burger-constructor__checkout-btn'], 'mr-4')} />
    </section>
  );
};
