import { Link, useLocation } from 'react-router-dom';
import { useCardContext } from '#components/card/context/card-context';
import { ROUTES } from '#constants/routes';
import { clx } from '#utils/clx';

type Props = {
  extraClass?: string;
};

export const Image = ({ extraClass = '' }: Props) => {
  const { ingredient } = useCardContext();
  const location = useLocation();

  return (
    <Link to={`${ROUTES.INGREDIENTS}/${ingredient._id}`} state={{ from: location }}>
      <img
        src={ingredient.image}
        alt={ingredient.name}
        className={clx({ [extraClass]: !!extraClass })}
      />
    </Link>
  );
};
