import clsx from 'clsx';
import s from './heading.module.scss';
import { useCardContext } from './hook/use-card-context';

export const Heading = () => {
  const product = useCardContext();

  return <h3 className={clsx(s.heading, 'text text_type_main-default')}>{product.name}</h3>;
};
