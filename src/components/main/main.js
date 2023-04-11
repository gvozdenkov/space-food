import s from './main.module.scss';
import { BurgerConstructor } from '../burger-constructor';
import { BurgerIngredients } from '../burger-ingredients';
import { ConstructorProvider } from '../../utils/contexts/ConstructorContext';

export const Main = () => {
  return (
    <section className={s.main}>
      <ConstructorProvider>
        <BurgerIngredients />
        <BurgerConstructor />
      </ConstructorProvider>
    </section>
  );
};
