import { CurrencyIcon } from '#shared/ui/icons';
import { IconSize, IconType } from '#shared/ui/icons/types';
import { clx } from '#shared/lib';

import s from './price.module.scss';

type Props = {
  price?: number;
  size?: IconSize;
  type?: IconType;
  extraClass?: string;
};

export const Price = ({ price = 0, size = 'medium', type = 'primary', extraClass = '' }: Props) => {
  return (
    <span className={clx(s.price, { [extraClass]: !!extraClass }, `text text_type_digits-${size}`)}>
      {price}
      <CurrencyIcon type={type} size={size} />
    </span>
  );
};
