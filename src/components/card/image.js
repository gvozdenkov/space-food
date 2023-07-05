import clsx from 'clsx';
import s from './image.module.scss';
import { useCardContext } from './hook/use-card-context';
import { Link, useLocation } from 'react-router-dom';
import { PATH } from '../../utils/config';

export const Image = ({ id }) => {
  const product = useCardContext();
  const location = useLocation();

  return (
    <Link to={`${PATH.INGREDIENTS}/${id}`} state={{ from: location }}>
      <img src={product.image} alt={product.name} className={clsx(s.image)} />
    </Link>
  );
};
