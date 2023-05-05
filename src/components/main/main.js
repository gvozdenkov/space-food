import s from './main.module.scss';
import { BurgerConstructor } from '../burger-constructor';
import { BurgerIngredients } from '../../features/ingredient-details/burger-ingredients';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export const Main = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={s.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
    </DndProvider>
  );
};
