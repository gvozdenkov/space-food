import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

export const useBurgerConstructorList = () => {
  const { t } = useTranslation();

  const { bun, ingredients: constructorIngredients } = useSelector(
    (state) => state.order,
  );

  const isBun = Object.keys(bun).length !== 0;
  const isIngredients = constructorIngredients.length > 0;

  const bunProps = (type) => ({
    type,
    isLocked: true,
    price: bun.price,
    text: `${bun.text} (${t(`constructor.${type}.intredient`)})`,
    thumbnail: bun.thumbnail,
    _itemId: bun._itemId,
  });

  const topBun = bunProps('top');
  const bottomBun = bunProps('bottom');

  return {
    topBun,
    bottomBun,
    isBun,
    isIngredients,
  };
};
