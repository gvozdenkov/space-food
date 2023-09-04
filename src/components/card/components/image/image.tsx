import { useCardContext } from '#components/card/context/card-context';
import { clx } from '#utils/clx';

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
