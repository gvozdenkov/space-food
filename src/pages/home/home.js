import s from './home.module.scss';
import { BurgerIngredients } from '../../features/burger-ingredients';
import { BurgerConstructor } from '../../features/burger-constructor';
import { Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <div className={s.home}>
      <BurgerIngredients />
      <BurgerConstructor />
      <Outlet />
    </div>
  );
};
