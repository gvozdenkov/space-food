import { useMemo } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import {
  ingredientAdded,
  ingredientRemoved,
} from '../../features/burger-constructor/burger-constructor-slice';
import { DragTypes } from '../../utils/config';
import { useGetIngredientsQuery } from '../../features/api/api-slice';

export const useBurgerConstructorList = () => {
  const intl = useIntl();
  const { data: ingredients } = useGetIngredientsQuery();
  const { constructorItems } = useSelector((state) => state.burgerConstructor);
  const dispatch = useDispatch();

  // construct props for <ConstructorElement />
  const burgerComponentProps = useMemo(() => {
    let componentProps = [];

    constructorItems.forEach((component, index, array) => {
      const isLocked = index === 0 || index === array.length - 1;
      const price = component.price;
      const thumbnail = component.image_mobile;
      const _itemId = component._itemId;

      let type;
      let text = component.name;
      let haveDrag = true;

      if (index === 0) {
        type = 'top';
        text = `${component.name} (${intl.formatMessage({ id: 'constructor.top.intredient' })})`;
        haveDrag = false;
      } else if (index === array.length - 1) {
        type = 'bottom';
        text = `${component.name} (${intl.formatMessage({ id: 'constructor.bottom.intredient' })})`;
        haveDrag = false;
      }

      componentProps.push({ isLocked, haveDrag, type, text, price, thumbnail, _itemId });
    });

    const topComponentProps = componentProps[0];
    const bottomComponentProps = componentProps[componentProps.length - 1];
    const middleComponetsProps = componentProps.slice(1, -1);

    return { topComponentProps, middleComponetsProps, bottomComponentProps };
  }, [constructorItems, intl]);

  const handleRemoveFromConstructor = (item) => {
    dispatch(ingredientRemoved(item));
  };

  // DnD
  const [, dropFromConstructor] = useDrop(() => ({
    accept: DragTypes.CONSTRUCTOR_INGREDIENT,
  }));

  const [{ isOverConstructor }, dropFromIngredients] = useDrop(() => ({
    accept: DragTypes.INGREDIENT,
    drop: (item, monitor) => {
      const ingredient = ingredients.data.find((ingredient) => ingredient._id === item.id);
      dispatch(ingredientAdded(ingredient));
    },
    collect: (monitor) => ({
      isOverConstructor: monitor.isOver(),
    }),
  }));

  return {
    ...burgerComponentProps,
    handleRemoveFromConstructor,
    dropFromIngredients,
    dropFromConstructor,
    isOverConstructor,
  };
};