import { CurrencyIcon } from '#shared/ui/icons';
import { IconSize } from '#shared/ui/icons/types';
import { clx } from '#shared/lib';

type Props = {
  price?: number;
  size?: IconSize;
  extraClass?: string;
};

export const Price = ({ price = 0, size = 'medium', extraClass = '' }: Props) => {
  return (
    <span className={clx({ [extraClass]: !!extraClass }, `text text_type_digits-${size}`)}>
      {price}
      <CurrencyIcon type='primary' size={size} />
    </span>
  );
};
