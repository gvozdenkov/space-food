import { clx } from '#shared/lib';
import { useCardContext } from '../../context/card-context';

type Props = {
  extraClass?: string;
};

export const Header = ({ extraClass = '' }: Props) => {
  const { ingredient } = useCardContext();

  return <p className={clx({ [extraClass]: !!extraClass })}>{ingredient.name}</p>;
};
