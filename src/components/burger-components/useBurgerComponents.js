import { useMemo } from 'react';
import { useIntl } from 'react-intl';
import { useCartContext } from '../../utils/contexts/CartContext';

export const useBurgerComponents = () => {
  const intl = useIntl();
  const { cart } = useCartContext();

  // construct props for <ConstructorElement />
  const burgerComponentProps = useMemo(() => {
    const cartItems = [cart.buns[0], ...cart.ingredients, cart.buns[1]];
    let componentProps = [];

    cartItems.forEach((component, index, array) => {
      const isLocked = index === 0 || index === array.length - 1;
      const price = component.price;
      const thumbnail = component.image_mobile;

      let type;
      let text = component.name;

      if (index === 0) {
        type = 'top';
        text = `${component.name} (${intl.formatMessage({ id: 'constructor.top.intredient' })})`;
      } else if (index === array.length - 1) {
        type = 'bottom';
        text = `${component.name} (${intl.formatMessage({ id: 'constructor.bottom.intredient' })})`;
      }

      componentProps.push({ isLocked, type, text, price, thumbnail });
    });

    const topComponentProps = componentProps[0];
    const bottomComponentProps = componentProps[componentProps.length - 1];
    const middleComponetsProps = componentProps.slice(1, -1);

    return { topComponentProps, middleComponetsProps, bottomComponentProps };
  }, [cart.buns, cart.ingredients, intl]);

  return burgerComponentProps;
};
