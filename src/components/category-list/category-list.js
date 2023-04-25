import clsx from 'clsx';
import { IngredientList } from '../ingredient-list';
import s from './category-list.module.scss';
import { useCategoryList } from './useCategoryList';
import { useTabContext } from '../../utils/contexts/tab-context';
import { InView } from 'react-intersection-observer';

export const CategoryList = () => {
  const { tabs, getRefs, setCurrentTab } = useTabContext();
  const { categorys } = useCategoryList({ tabs });

  return (
    <ul className={clsx(s.categoryList, 'customScroll')}>
      {categorys.map((category, index) => {
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
            <h2 className='text text_type_main-medium mb-6'>{category.text}</h2>

            <IngredientList ingredients={category.ingredients} />
          </InView>
        );
      })}
    </ul>
  );
};
