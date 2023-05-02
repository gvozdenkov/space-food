import { useMemo } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { ingredientRemoved } from '../../features/burger-constructor/burger-constructor-slice';

export const useBurgerComponents = () => {
  const intl = useIntl();
  const { bun, ingredients } = useSelector((state) => state.burgerConstructor);
  const dispatch = useDispatch();

  // construct props for <ConstructorElement />
  const burgerComponentProps = useMemo(() => {
    const cartItems = [bun, ...ingredients, bun];
    let componentProps = [];

    cartItems.forEach((component, index, array) => {
      const isLocked = index === 0 || index === array.length - 1;
      const price = component.price;
      const thumbnail = component.image_mobile;
      const constructorItemId = component.constructorItemId;

      let type;
      let text = component.name;

      if (index === 0) {
        type = 'top';
        text = `${component.name} (${intl.formatMessage({ id: 'constructor.top.intredient' })})`;
      } else if (index === array.length - 1) {
        type = 'bottom';
        text = `${component.name} (${intl.formatMessage({ id: 'constructor.bottom.intredient' })})`;
      }

      componentProps.push({ isLocked, type, text, price, thumbnail, constructorItemId });
    });

    const topComponentProps = componentProps[0];
    const bottomComponentProps = componentProps[componentProps.length - 1];
    const middleComponetsProps = componentProps.slice(1, -1);

    return { topComponentProps, middleComponetsProps, bottomComponentProps };
  }, [bun, ingredients, intl]);

  const handleRemoveFromConstructor = (item) => {
    dispatch(ingredientRemoved(item));
  };

  return { ...burgerComponentProps, handleRemoveFromConstructor };
};
