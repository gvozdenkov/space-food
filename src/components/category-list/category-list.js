import clsx from 'clsx';
import { IngredientList } from '../ingredient-list';
import s from './category-list.module.scss';
import PropTypes from 'prop-types';
import { useCategoryList } from './useCategoryList';

export const CategoryList = ({ types }) => {
  const { categorys } = useCategoryList({ types });

  return (
    <>
      <ul className={clsx(s.categoryList, 'customScroll')}>
        {categorys.map((category, index) => {
          return (
            <li key={index}>
              <h2 className='text text_type_main-medium mb-6' id={`${category.type}-category`}>
                {category.text}
              </h2>
              <IngredientList ingredients={category.ingredients} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

CategoryList.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};
