import { useIntl } from 'react-intl';

export const useBurgerComponents = ({ components }) => {
  const intl = useIntl();
  let componentProps = [];

  components.forEach((component, index, array) => {
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
  const middleComponet = componentProps.slice(1, -1);

  return { topComponent, middleComponet, bottomComponent };
};
