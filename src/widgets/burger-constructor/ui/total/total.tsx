import { selectTotalPrice } from '#entities/cart';
import { clx } from '#shared/lib';
import { useAppSelector } from '#shared/model/hooks';
import { Price } from '#shared/ui/price';
import s from './total.module.scss';

type Props = {
  extraClass?: string;
};

export const Total = ({ extraClass = '' }: Props) => {
  const total = useAppSelector(selectTotalPrice);

  return (
    <div className={clx(s.burgerTotal, { [extraClass]: !!extraClass })}>
      <Price price={total} size='medium' />
    </div>
  );
};
