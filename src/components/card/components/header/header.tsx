import { useCardContext } from '#components/card/context/card-context';
import { clx } from '#utils/clx';

type Props = {
  extraClass?: string;
};

export const Header = ({ extraClass = '' }: Props) => {
  const { ingredient } = useCardContext();

  return <p className={clx({ [extraClass]: !!extraClass })}>{ingredient.name}</p>;
};
