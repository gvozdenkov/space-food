import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectOrder } from '../../../services/order-slice';
import { useQuery } from '@tanstack/react-query';
import { ingredientsQuery } from '../../../../../routes/root-layout/ingredients-loader';

export const useBurgerConstructorList = () => {
  const { t } = useTranslation();
  const { data: ingredientsObj } = useQuery(ingredientsQuery());
  const { bun, ingredients } = useSelector(selectOrder);

  const isBunAdded = Object.keys(bun).length !== 0;
  const isIngredientsAdded = ingredients.length !== 0;

  const bunProps = (type) => {
    const id = bun._id;

    return {
      type,
      isLocked: true,
      price: ingredientsObj[id]?.price,
      text: `${ingredientsObj[id]?.name} (${t(`constructor.${type}.intredient`)})`,
      thumbnail: ingredientsObj[id]?.image_mobile,
    };
  };

  const topBun = bunProps('top');
  const bottomBun = bunProps('bottom');

  return {
    topBun,
    bottomBun,
    isBunAdded,
    isIngredientsAdded,
  };
};
