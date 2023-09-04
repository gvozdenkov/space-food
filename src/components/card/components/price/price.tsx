import { useCardContext } from '#components/card/context/card-context';
import { IconSize } from '#components/icons/types';
import { Price as PriceBase } from '#components/price';
import { clx } from '#utils/clx';

type Props = {
  size?: IconSize;
  extraClass?: string;
};

export const Price = ({ size = 'medium', extraClass = '' }: Props) => {
  const { ingredient } = useCardContext();

  return (
    <PriceBase
      price={ingredient.price}
      size={size}
      extraClass={clx({ [extraClass]: !!extraClass })}
    />
  );
};
