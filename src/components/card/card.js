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
import { useQuery } from '@tanstack/react-query';
import { ingredientsQuery } from '../../routes/root-layout/ingredients-loader';
import { Overlay } from './overlay';

const Card = forwardRef((props, ref) => {
  const { productId, children } = props;
  const { data: ingredientsObj } = useQuery(ingredientsQuery());
  const product = ingredientsObj[productId];

  return (
    <CardContext.Provider value={product}>
      <article ref={ref} className={clsx(s.card, 'pl-4 pr-4')}>
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
Card.Overlay = Overlay;

export { Card };
