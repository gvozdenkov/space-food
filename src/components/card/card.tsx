import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { useGetIngredientsQuery } from '#feature/burger-ingredients';
import { CardContext } from './context/card-context';
import { clx } from '#utils/clx';
import { Image } from './components/image';
import { Price } from './components/price';
import { Body } from './components/body';
import { Header } from './components/header';
import { Footer } from './components/footer';

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
Card.Price = Price;
Card.Body = Body;
Card.Header = Header;
Card.Footer = Footer;

export { Card };
