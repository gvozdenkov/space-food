import s from './main.module.scss';
import { BurgerConstructor } from '../burger-constructor';
import { BurgerIngredients } from '../../features/ingredient-details/burger-ingredients';
import { CartContextProvider } from '../../common/contexts/CartContext/CartContext';

export const Main = () => {
  return (
    <div className={s.main}>
      <CartContextProvider>
        <BurgerIngredients />
        <BurgerConstructor />
      </CartContextProvider>
    </div>
  );
};
