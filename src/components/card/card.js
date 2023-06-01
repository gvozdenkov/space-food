import clsx from 'clsx';
import s from './card.module.scss';
import PropTypes from 'prop-types';
import { Image } from './image';
import { Heading } from './heading';
import { Info } from './info';
import { CardContext } from './context/card-context';
import { Price } from './price';
import { Button } from './button';
import { Counter } from './counter';
import { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { selectIngredientById } from '../../services/api/ingredients-api';

const Card = forwardRef(({ productId, onClick, isDragging, children }, ref) => {
  const product = useSelector((state) => selectIngredientById(state, productId));

  return (
    <CardContext.Provider value={product}>
      <article
        ref={ref}
        className={clsx(s.card, 'pl-4 pr-4', { [s.card_dragging]: isDragging })}
        onClick={onClick}>
        {children}
      </article>
    </CardContext.Provider>
  );
});

Card.propTypes = {
  productId: PropTypes.string.isRequired,
  children: PropTypes.any,
};

Card.Image = Image;
Card.Price = Price;
Card.Info = Info;
Card.Heading = Heading;
Card.Button = Button;
Card.Counter = Counter;

export { Card };
