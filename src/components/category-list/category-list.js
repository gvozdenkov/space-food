import clsx from 'clsx';
import { IngredientList } from '../ingredient-list';
import s from './category-list.module.scss';
import PropTypes from 'prop-types';
import { useCategoryList } from './useCategoryList';
import { useContext, useMemo } from 'react';
import { IngredientContext } from '../../utils/contexts/ingredientsContext';

export const CategoryList = ({ types }) => {
  const { filterByType } = useCategoryList();
  const ingredients = useContext(IngredientContext);

  const ingredientList = useMemo(() => {
    return types.map((type, index) => {
      return (
        <li key={index}>
          <h2 className='text text_type_main-medium mb-6' id={`${type.type}-category`}>
            {type.text}
          </h2>
          <IngredientList ingredients={filterByType(ingredients, type.type)} />
        </li>
      );
    });
  }, [types, filterByType, ingredients]);

  return (
    <>
      <ul className={clsx(s.categoryList, 'customScroll')}>{ingredientList}</ul>
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
