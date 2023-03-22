import s from './main.module.css';
import { BurgerConstructor } from '../burger-constructor';
import { BurgerIngredients } from '../burger-ingredients';
import PropTypes from 'prop-types';

export const Main = ({ ingredients }) => {
  return (
    <main className={s.main}>
      <BurgerIngredients ingredients={ingredients} />
      <BurgerConstructor />
    </main>
  );
};

Main.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      type: PropTypes.string,
      proteins: PropTypes.number,
      fat: PropTypes.number,
      carbohydrates: PropTypes.number,
      calories: PropTypes.number,
      price: PropTypes.number,
      image: PropTypes.string,
      image_mobile: PropTypes.string,
      image_large: PropTypes.string,
      __v: PropTypes.number,
    })
  ).isRequired,
};
