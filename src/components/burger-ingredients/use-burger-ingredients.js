import { ingredientTypes } from '../../utils/config';
import { IntlConvert } from '../../utils/utils';

export const useBurgerIngredients = () => {
  const tabs = IntlConvert(ingredientTypes, 'text');

  return { tabs };
};
