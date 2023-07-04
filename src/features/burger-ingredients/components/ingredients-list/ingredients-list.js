import clsx from 'clsx';
import s from './ingredients-list.module.scss';
import { IngredientCard } from '../../../../components/ingredient-card';
import { useIngredientsList } from '../../hooks/use-ingredients-list';
import { InView } from 'react-intersection-observer';
import { useTabContext } from '../../context/tab-context';
import { useTranslation } from 'react-i18next';

export const IngredientsList = () => {
  const { t } = useTranslation();
  const { getRefs, setCurrentTab } = useTabContext();
  const { categorys } = useIngredientsList();

  const List = ({ ingredients }) => {
    return (
      <ul className={clsx(s.ingredientList, 'mb-10')}>
        {ingredients.map((ingredient) => {
          return (
            <li key={ingredient._id}>
              <IngredientCard ingredientId={ingredient._id} />
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <ul className={clsx(s.categoryList, 'customScroll')}>
      {categorys?.map((category, index) => {
        return (
          <InView
            as='li'
            key={index}
            data-type={category.type}
            onChange={(inView, entry) => {
              const refs = getRefs();
              refs.set(index, entry.target);

              if (inView) {
                setCurrentTab(entry.target.dataset.type);
              }
            }}
            threshold={0.4}
            delay={500}>
            <h2 className='text text_type_main-medium mb-6'>{t(category.text)}</h2>
            <List ingredients={category.ingredients} />
          </InView>
        );
      })}
    </ul>
  );
};
