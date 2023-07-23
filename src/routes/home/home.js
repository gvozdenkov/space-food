import s from './home.module.scss';
import { BurgerIngredients } from '../../features/burger-ingredients';
import { BurgerConstructor } from '../../features/burger-constructor';
import { Outlet } from 'react-router-dom';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import { Card } from '../../components/card/card';
import { useDragIngredients } from './use-drag-ingredients';

export const Home = () => {
  const { handleDragStart, handleDragEnd, handleDragOver, activeId } = useDragIngredients();

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd} onDragOver={handleDragOver}>
      <div className={s.home}>
        <BurgerIngredients />
        <BurgerConstructor />
        <Outlet />
      </div>

      <DragOverlay dropAnimation={null} modifiers={[restrictToWindowEdges]}>
        {activeId && (
          <Card productId={activeId}>
            <Card.Overlay>
              <Card.Image id={activeId} />
              <Card.Info>
                <Card.Price />
                <Card.Heading />
              </Card.Info>
            </Card.Overlay>
          </Card>
        )}
      </DragOverlay>
    </DndContext>
  );
};
