import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import cn from 'classnames';
import React from 'react';
import s from './burger-ingredients.module.css';

export const BurgerIngredients = (props) => {
  const { ingredientTypes, ...otherProps } = props;

  const [current, setCurrent] = React.useState(ingredientTypes[0]['type']);

  return (
    <section className={cn(s.burgerIngridients, 'pt-10')}>
      <h2 className="text text_type_main-large">Соберите бургер</h2>
      <div className="mt-5" style={{ display: 'flex' }}>
        {ingredientTypes.map((ingredient, index) => {
          return (
            <Tab
              key={index}
              value={ingredient.type}
              active={current === ingredient.type}
              onClick={setCurrent}
            >
              {ingredient.text}
            </Tab>
          );
        })}
      </div>
    </section>
  );
};
