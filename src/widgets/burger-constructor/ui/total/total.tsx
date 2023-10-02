import { selectTotalPrice } from '#entities/cart';
import { clx } from '#shared/lib';
import { useAppSelector } from '#shared/model/hooks';
import { Price } from '#shared/ui/price';
import s from './total.module.scss';

export const Total = () => {
  const total = useAppSelector(selectTotalPrice);

  return (
    <div className={clx(s.burgerTotal, 'mt-10 pr-4')}>
      <Price price={total} size='medium' />
    </div>
  );
};
