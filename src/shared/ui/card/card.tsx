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

type Props = PropsWithChildren<ComponentPropsWithoutRef<'article'>> & {
  productId: string;
  extraClass?: string;
};

const Card = ({ productId, extraClass = '', children }: Props) => {
  const { data } = useGetIngredientsQuery();
  const { ingredientsObj } = data!;
  const ingredient = ingredientsObj[productId];

  return (
    <CardContext.Provider value={{ ingredient }}>
      <article className={clx({ [extraClass]: !!extraClass })}>{children}</article>
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
