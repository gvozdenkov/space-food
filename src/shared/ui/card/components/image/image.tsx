import { Link, useLocation } from 'react-router-dom';
import { ROUTE } from '#shared/config';
import { clx } from '#shared/lib';
import { useCardContext } from '../../context/card-context';

type Props = {
  extraClass?: string;
};

export const Image = ({ extraClass = '' }: Props) => {
  const { ingredient } = useCardContext();
  const location = useLocation();

  return (
    <Link to={`${ROUTE.INGREDIENTS}/${ingredient._id}`} state={{ from: location }}>
      <img
        src={ingredient.image}
        alt={ingredient.name}
        className={clx({ [extraClass]: !!extraClass })}
      />
    </Link>
  );
};
