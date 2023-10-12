import { Outlet } from 'react-router-dom';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import { BurgerIngredients } from '#widgets/burger-ingredients';
import { BurgerConstructor } from '#widgets/burger-constructor';
import { useDragIngredients } from './use-drag-ingredients';
import { Card } from '#shared/ui/card';

import s from './home.page.module.scss';

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
          <Card productId={activeId as string}>
            <Card.Overlay>
              <Card.Image />
              <Card.Body>
                <Card.Price />
                <Card.Header />
              </Card.Body>
            </Card.Overlay>
          </Card>
        )}
      </DragOverlay>
    </DndContext>
  );
};
