import clsx from 'clsx';
import { useIntl } from 'react-intl';
import { ingredientTypes } from '../../utils/config';
import { useIngredientContext } from '../../utils/contexts/IngredientContext/IngredientContext';
import { useIngredientSelectedContext } from '../../utils/contexts/IngredientSelectedContext/IngredientSelectedContext';
import { IntlConvert } from '../../utils/utils';
import { CategoryList } from '../category-list/category-list';
import { IngredientDetails } from '../IngredientDetails';
import { Modal } from '../modal';
import { TabList } from '../tab-list';
import s from './burger-ingredients.module.scss';

export const BurgerIngredients = () => {
  const intl = useIntl();
  const intlIngredientTypes = IntlConvert(ingredientTypes, 'text');

  const { selectedId, isOpen, setIsOpen } = useIngredientSelectedContext();
  const { ingredients } = useIngredientContext();

  const selectedIngredient = ingredients.find((ingr) => ingr._id === selectedId);

  return (
    <section className={clsx(s.burgerIngridients, 'pt-10')}>
      <h1 className='text text_type_main-large'>
        {intl.formatMessage({ id: 'constructor.title' })}
      </h1>
      <TabList tabs={intlIngredientTypes} />
      <CategoryList types={intlIngredientTypes} />

      <Modal
        title={intl.formatMessage({ id: 'ingredients.detail.popup.title' })}
        open={isOpen}
        setOpen={setIsOpen}>
        <IngredientDetails ingredient={selectedIngredient} />
      </Modal>
    </section>
  );
};
