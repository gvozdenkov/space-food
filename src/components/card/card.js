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

const Card = ({ product, children }) => {
  return (
    <CardContext.Provider value={product}>
      <article className={clsx(s.card, 'pl-4 pr-4')}>{children}</article>
    </CardContext.Provider>
  );
};

Card.propTypes = {
  product: ingredientPropTypes.isRequired,
  children: PropTypes.any,
};

Card.Image = Image;
Card.Price = Price;
Card.Info = Info;
Card.Heading = Heading;
Card.Button = Button;

export { Card };
