import { CurrencyIcon } from '#components/icons';
import { IconSize } from '#components/icons/types';
import { clx } from '#utils/clx';

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
