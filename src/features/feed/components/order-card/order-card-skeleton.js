import clsx from 'clsx';
import { Skeleton } from '../../../../components/skeleton';
import sk from '../../../../components/skeleton/skeleton.module.scss';
import cs from './order-card.module.scss';
import s from './order-card-skeleton.module.scss';

export const OrderCardSkeleton = () => {
  return (
    <div className={clsx(cs.card)}>
      <Skeleton classes={clsx(sk.text, sk['width-15'], cs.number)} />
      <Skeleton classes={clsx(sk.title, sk['width-60'], cs.title)} />
      <Skeleton classes={clsx(sk.text, sk['width-10'], cs.status)} />
      <Skeleton classes={clsx(sk.text, s.icons, sk['width-50'], cs.icons)} />
      <Skeleton classes={clsx(sk.text, s.price, cs.price)} />
      <Skeleton classes={clsx(sk.text, s.date, cs.date)} />
    </div>
  );
};
