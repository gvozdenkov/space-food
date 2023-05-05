import clsx from 'clsx';
import s from './card.module.scss';
import PropTypes from 'prop-types';
import { Image } from './image';
import { Heading } from './heading';
import { Info } from './info';
import { CardContext } from './context/card-context';
import { Price } from './price';
import { ingredientPropTypes } from '../../utils/config';
import { Button } from './button';
import { Counter } from './counter';
import { forwardRef } from 'react';

const Card = forwardRef(({ product, onClick, isDragging, children }, ref) => {
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
  product: ingredientPropTypes.isRequired,
  children: PropTypes.any,
};

Card.Image = Image;
Card.Price = Price;
Card.Info = Info;
Card.Heading = Heading;
Card.Button = Button;
Card.Counter = Counter;

export { Card };
