import { useIntl } from 'react-intl';

export const useBurgerComponents = ({ buns, ingredients }) => {
  const intl = useIntl();
  let componentProps = [];
  const cartItems = [buns[0], ...ingredients, buns[1]];

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

  const topComponent = componentProps[0];
  const bottomComponent = componentProps[componentProps.length - 1];
  const middleComponets = componentProps.slice(1, -1);

  return { topComponent, middleComponets, bottomComponent };
};
