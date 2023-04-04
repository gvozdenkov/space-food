import s from './main.module.scss';
import { BurgerConstructor } from '../burger-constructor';
import { BurgerIngredients } from '../burger-ingredients';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/config';

export const Main = ({ ingredients }) => {
  return (
    <main className={s.main}>
      <BurgerIngredients ingredients={ingredients} />
      <BurgerConstructor />
    </main>
  );
};

Main.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};
