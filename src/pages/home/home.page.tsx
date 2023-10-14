import { Outlet } from 'react-router-dom';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import { BurgerIngredients } from '#widgets/burger-ingredients';
import { BurgerConstructor } from '#widgets/burger-constructor';
import { useDragIngredients } from './use-drag-ingredients';
import { Card } from '#shared/ui/card';
import { clx } from '#shared/lib';

import s from './home.page.module.scss';

export const Home = () => {
  const { handleDragStart, handleDragEnd, handleDragOver, activeId, sensors } =
    useDragIngredients();

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      sensors={sensors}>
      <div className={s.home}>
        <BurgerIngredients />
        <BurgerConstructor />
        <Outlet />
      </div>

      <DragOverlay dropAnimation={null} modifiers={[restrictToWindowEdges]}>
        {activeId && (
          <Card productId={activeId as string} extraClass={s.card}>
            <Card.Overlay>
              <Card.Image />
              <Card.Body extraClass={s.card__body}>
                <Card.Price size='default' extraClass={s.card__price} />
                <Card.Header extraClass={clx(s.card__header, 'text text_type_main-default')} />
              </Card.Body>
            </Card.Overlay>
          </Card>
        )}
      </DragOverlay>
    </DndContext>
  );
};
