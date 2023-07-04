import s from './home.module.scss';
import { BurgerIngredients } from '../../features/burger-ingredients';

export const Home = () => {
  return (
    <div className={s.home}>
      <BurgerIngredients />
      {/* <BurgerConstructor /> */}
    </div>
  );
};
