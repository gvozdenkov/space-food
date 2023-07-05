import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectOrder } from '../../../services/order-slice';
import { useQuery } from '@tanstack/react-query';
import { ingredientsQuery } from '../../../../../layouts/root-layout/ingredients-loader';

export const useBurgerConstructorList = () => {
  const { t } = useTranslation();
  const { data: ingredientsObj } = useQuery(ingredientsQuery());
  const { bun, ingredients } = useSelector(selectOrder);

  const isBun = Object.keys(bun).length !== 0;
  const isIngredients = ingredients.length > 0;

  const bunProps = (type) => ({
    type,
    isLocked: true,
    price: ingredientsObj[bun]?.price,
    text: `${ingredientsObj[bun]?.name} (${t(`constructor.${type}.intredient`)})`,
    thumbnail: ingredientsObj[bun]?.image_mobile,
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
