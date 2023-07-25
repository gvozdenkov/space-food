import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useDroppable } from '@dnd-kit/core';
import { useQuery } from '@tanstack/react-query';
import {
  selectDragTarget,
  selectOrderBun,
  selectOrderIngredients,
} from '../../../services/order-slice';
import { ingredientsQuery } from '../../../../../routes/root-layout/ingredients-loader';
import { ingredientIds, orderDropTarget } from '../../../../../utils/config';

export const useBurgerConstructorList = () => {
  const { t } = useTranslation();
  const { data: ingredientsObj } = useQuery(ingredientsQuery());
  const bun = useSelector(selectOrderBun);
  const ingredients = useSelector(selectOrderIngredients);

  const isBunAdded = Object.keys(bun).length !== 0;
  const isIngredientsAdded = ingredients.length !== 0;

  const bunProps = (type) => {
    const id = bun._id;
    const bunPositionText = t(`burgerConstructor.burger.bunPosition.${type}`);

    return {
      type,
      isLocked: true,
      price: ingredientsObj[id]?.price,
      text: `${ingredientsObj[id]?.name} (${bunPositionText})`,
      thumbnail: ingredientsObj[id]?.image_mobile,
    };
  };

  const topBun = bunProps('top');
  const bottomBun = bunProps('bottom');

  // for drag & drop

  const dragOverStyle = () => ({
    filter: `drop-shadow(0px 0px 8px rgba(51, 51, 255, 0.25)) drop-shadow(0px 0px 10px rgba(51, 51, 255, 0.5)) drop-shadow(0px 0px 30px rgba(51, 51, 255, 0.5))`,
  });

  const dragTarget = useSelector(selectDragTarget);

  const styleOverDrag = (target) => {
    const type = dragTarget?.type;

    const isSelectMiddle =
      target === orderDropTarget.MIDDLE &&
      (type === ingredientIds.MAIN || type === ingredientIds.SAUCE);
    const isSelectBun = target === orderDropTarget.BUN && type === ingredientIds.BUN;

    if (isSelectBun || isSelectMiddle) {
      return dragOverStyle();
    } else {
      return {};
    }
  };

  const middleStyle = styleOverDrag(orderDropTarget.MIDDLE);
  const bunStyle = styleOverDrag(orderDropTarget.BUN);

  const { setNodeRef } = useDroppable({ id: orderDropTarget.DROP_ZONE });

  return {
    topBun,
    bottomBun,
    isBunAdded,
    isIngredientsAdded,
    setNodeRef,
    middleStyle,
    bunStyle,
  };
};
