import { clx } from '#shared/lib';
import { useCardContext } from '../../context/card-context';

type Props = {
  extraClass?: string;
};

export const Image = ({ extraClass = '' }: Props) => {
  const { ingredient } = useCardContext();

  return (
    <img
      src={ingredient.image}
      alt={ingredient.name}
      className={clx({ [extraClass]: !!extraClass })}
    />
  );
};
