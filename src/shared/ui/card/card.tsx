import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { CardContext } from './context/card-context';
import { clx } from '#shared/lib';
import { Image } from './components/image';
import { Price } from './components/price';
import { Body } from './components/body';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Counter } from './components/counter';
import { Overlay } from './components/overlay';
import { useGetIngredientsQuery } from '#widgets/burger-ingredients';
import { Link, useLocation } from 'react-router-dom';
import { ROUTE } from '#shared/config';

import s from './card.module.scss';

type Props = PropsWithChildren<ComponentPropsWithoutRef<'article'>> & {
  productId: string;
  extraClass?: string;
  dragAttributes?: any;
  dragListeners?: any;
};

const Card = ({ productId, extraClass = '', dragAttributes, dragListeners, children }: Props) => {
  const location = useLocation();
  const { data } = useGetIngredientsQuery();
  const { ingredientsObj } = data!;
  const ingredient = ingredientsObj[productId];

  return (
    <CardContext.Provider value={{ ingredient }}>
      <Link
        to={`${ROUTE.INGREDIENTS}/${ingredient._id}`}
        state={{ from: location }}
        className={s.link}>
        <article
          className={clx({ [extraClass]: !!extraClass })}
          {...dragAttributes}
          {...dragListeners}>
          {children}
        </article>
      </Link>
    </CardContext.Provider>
  );
};

Card.Image = Image;
Card.Counter = Counter;
Card.Price = Price;
Card.Body = Body;
Card.Header = Header;
Card.Footer = Footer;
Card.Overlay = Overlay;

export { Card };
