import { Outlet } from 'react-router-dom';
import { BurgerIngredients } from '#widgets/burger-ingredients';
import { BurgerConstructor } from '#widgets/burger-constructor';

import s from './home.page.module.scss';

export const Home = () => {
  return (
    <div className={s.home}>
      <BurgerIngredients />
      <BurgerConstructor />
      <Outlet />
    </div>
  );
};
