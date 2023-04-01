export const useBurgerComponents = ({ components }) => {
  let componentProps = [];

  components.forEach((component, index, array) => {
    const withDrag = index !== 0 && index !== array.length - 1;
    const isLocked = index === 0 || index === array.length - 1;
    const price = component.price;
    const thumbnail = component.image_mobile;

    let type;
    let text = component.name;

    if (index === 0) {
      type = 'top';
      text = `${component.name} (верх)`;
    } else if (index === array.length - 1) {
      type = 'bottom';
      text = `${component.name} (низ)`;
    }

    componentProps.push({ withDrag, isLocked, type, text, price, thumbnail });
  });

  return componentProps;
};
