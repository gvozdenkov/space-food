import clsx from 'clsx';
import { useIntl } from 'react-intl';
import { ingredientTypes } from '../../utils/config';
import { IntlConvert } from '../../utils/utils';
import { CategoryList } from '../category-list/category-list';
import { TabList } from '../tab-list';
import s from './burger-ingredients.module.scss';

export const BurgerIngredients = () => {
  const intl = useIntl();
  const intlIngredientTypes = IntlConvert(ingredientTypes, 'text');

  return (
    <section className={clsx(s.burgerIngridients, 'pt-10')}>
      <h1 className='text text_type_main-large'>
        {intl.formatMessage({ id: 'constructor.title' })}
      </h1>
      <TabList tabs={intlIngredientTypes} />
      <CategoryList types={intlIngredientTypes} />
    </section>
  );
};
