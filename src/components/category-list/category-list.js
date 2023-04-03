import clsx from 'clsx';
import { IngredientList } from '../ingredient-list';
import s from './category-list.module.scss';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/config';
import { useCategoryList } from './useCategoryList';

export const CategoryList = ({ ingredients, types }) => {
  const { filterByType } = useCategoryList();

  return (
    <>
      <ul className={clsx(s.categoryList, 'customScroll')}>
        {types.map((type, index) => {
          return (
            <li key={index}>
              <h2 className="text text_type_main-medium mb-6">{type.text}</h2>
              <IngredientList ingredients={filterByType(ingredients, type.type)} />
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
      type: PropTypes.oneOf(['bun', 'main', 'sauce']),
      text: PropTypes.string,
    })
  ).isRequired,

  ingredients: PropTypes.arrayOf(ingredientPropTypes),
};
