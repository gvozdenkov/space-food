import { Outlet } from 'react-router-dom';
import { BurgerIngredients } from '#widgets/burger-ingredients';
import s from './home.module.scss';

export const Home = () => {
  return (
    <div className={s.home}>
      <BurgerIngredients />
      <Outlet />
    </div>
  );
};
