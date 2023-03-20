import s from './main.module.css';
import { BurgerConstructor } from '../burger-constructor';
import { BurgerIngredients } from '../burger-ingredients';
import { ingredientTypes } from '../../utils/data';

export const Main = (props) => {
  const {ingredients} = props
  return (
    <main className={s.main}>
      <BurgerIngredients ingredients={ingredients} />
      <BurgerConstructor />
    </main>
  );
};
