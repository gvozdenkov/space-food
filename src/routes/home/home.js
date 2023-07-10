import s from './home.module.scss';
import { BurgerIngredients } from '../../features/burger-ingredients';
import { BurgerConstructor } from '../../features/burger-constructor';
import { Outlet } from 'react-router-dom';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import { useDispatch, useSelector } from 'react-redux';
import {
  bunAdded,
  ingredientAdded,
  removeDragTarget,
  selectDragTarget,
  setDragTarget,
} from '../../features/burger-constructor/services/order-slice';
import { useQuery } from '@tanstack/react-query';
import { ingredientsQuery } from '../root-layout/ingredients-loader';
import { ingredientIds, orderDropTarget } from '../../utils/config';
import { useState } from 'react';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import { Card } from '../../components/card/card';

export const Home = () => {
  const dispatch = useDispatch();
  const { data: ingredients } = useQuery(ingredientsQuery());

  const [activeId, setActiveId] = useState(null);

  const handleDragStart = ({ active, over }) => {
    dispatch(setDragTarget({ id: active?.id }));
    setActiveId(active.id);
  };

  const handleDragEnd = ({ active, over }) => {
    const ingredientDragType = ingredients[active?.id]?.type;

    dispatch(removeDragTarget());
    setActiveId(null);

    if (ingredientDragType === ingredientIds.BUN && over?.id === orderDropTarget.DROP_ZONE) {
      dispatch(bunAdded(active?.id));
    } else if (
      ingredientDragType === ingredientIds.MAIN &&
      over?.id === orderDropTarget.DROP_ZONE
    ) {
      dispatch(ingredientAdded(active?.id));
    }
  };

  const handleDragOver = ({ active, over }) => {
    const ingredientDragType = ingredients[active?.id].type;

    if (over?.id === orderDropTarget.DROP_ZONE) {
      dispatch(setDragTarget({ type: ingredientDragType, id: active?.id }));
    } else {
      dispatch(removeDragTarget());
    }
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd} onDragOver={handleDragOver}>
      <div className={s.home}>
        <BurgerIngredients />
        <BurgerConstructor />
        <Outlet />
      </div>

      <DragOverlay dropAnimation={null} modifiers={[restrictToWindowEdges]}>
        {activeId ? (
          <Card productId={activeId}>
            <Card.Overlay>
              <Card.Image id={activeId} />
              <Card.Info>
                <Card.Price />
                <Card.Heading />
              </Card.Info>
            </Card.Overlay>
          </Card>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};
