import './Main.css';
import { BurgerConstructor } from '../BurgerConstructor/BurgerConstructor';
import { BurgerIngredients } from '../BurgerIngredients/BurgerIngredients';
import { ingredientTypes } from '../../utils/data';

export const Main = (props) => {
  return (
    <main className="Main">
      <BurgerIngredients ingredientTypes={ingredientTypes} />
      <BurgerConstructor />
    </main>
  );
};
