import { useMemo } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { ingredientAdded, ingredientRemoved } from '../../services/burger-constructor-slice';
import { DragTypes } from '../../utils/config';
import { useGetIngredientsQuery } from '../../services/api-slice';

export const useBurgerConstructorList = () => {
  const intl = useIntl();
  const { data: ingredients } = useGetIngredientsQuery();
  const {
    constructorItems,
    bun,
    ingredients: constructorIngredients,
  } = useSelector((state) => state.burgerConstructor);
  const dispatch = useDispatch();

  const isBun = Object.keys(bun).length !== 0;
  const isIngredients = constructorIngredients.length > 0;

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

  return {
    ...burgerComponentProps,
    isBun,
    isIngredients,
    handleRemoveFromConstructor,
  };
};
