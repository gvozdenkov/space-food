import { useCardContext } from '#shared/ui/card/context/card-context';
import { IconSize } from '#shared/ui/icons/types';
import { Price as PriceBase } from '#shared/ui/price';
import { clx } from '#shared/lib';

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
