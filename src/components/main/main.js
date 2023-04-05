import s from './main.module.scss';
import { BurgerConstructor } from '../burger-constructor';
import { BurgerIngredients } from '../burger-ingredients';

export const Main = () => {
  return (
    <main className={s.main}>
      <BurgerIngredients />
      <BurgerConstructor />
    </main>
  );
};
