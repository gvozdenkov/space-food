import { useMemo } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { ingredientRemoved } from '../../features/burger-constructor/burger-constructor-slice';

export const useBurgerComponents = () => {
  const intl = useIntl();
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

  return { ...burgerComponentProps, handleRemoveFromConstructor };
};
