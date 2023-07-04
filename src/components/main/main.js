import s from './main.module.scss';
import { BurgerConstructor } from '../burger-constructor';
import { BurgerIngredients } from '../../features/burger-ingredients/components/burger-ingredients';

export const Main = () => {
  return (
    <div className={s.main}>
      <BurgerIngredients />
      <BurgerConstructor />
    </div>
  );
};
