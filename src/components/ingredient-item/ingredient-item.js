import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import clsx from 'clsx';
import { useState } from 'react';
import { Price } from '../price';
import s from './ingredient-item.module.scss';
import { ingredientPropTypes } from '../../utils/config';
import { Modal } from '../modal';
import { IngredientDetails } from '../IngredientDetails';
import { useIntl } from 'react-intl';

export const IngredientItem = ({ ingredient }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState({});
  const intl = useIntl();

  return (
    <>
      <article
        className={s.ingredientItem}
        onClick={() => {
          setSelectedIngredient(ingredient);
          setIsOpen(true);
        }}>
        {true && <Counter count={2} size='default' extraClass={clsx(s.ingredientItem__counter)} />}
        <img src={ingredient.image} alt={ingredient.name} />
        {<Price amount={ingredient.price} />}
        <p className={clsx(s.ingredientItem__title, 'text text_type_main-default')}>
          {ingredient.name}
        </p>
      </article>

      <Modal
        title={intl.formatMessage({ id: 'ingredients.detail.popup.title' })}
        open={isOpen}
        setOpen={setIsOpen}>
        <IngredientDetails ingredient={selectedIngredient} />
      </Modal>
    </>
  );
};

IngredientItem.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
};
