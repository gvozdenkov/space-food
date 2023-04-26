import clsx from 'clsx';
import s from './image.module.scss';
import { useCardContext } from './hook/useCardContext';

export const Image = ({ onClick }) => {
  const product = useCardContext();

  return <img src={product.image} alt={product.name} className={clsx(s.image)} onClick={onClick} />;
};
