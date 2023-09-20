import { clx } from '#utils/clx';
import s from './counter.module.scss';

type Props = {
  count: number;
  size?: 'default' | 'small';
  extraClass?: string;
};

export const Counter = ({ count = 0, size = 'default', extraClass = '' }: Props) => {
  const className = clx(
    s.counter,
    {
      [s[size]]: size,
    },
    extraClass,
  );

  return (
    <div className={className}>
      <p className={s.counter__num}>{count}</p>
    </div>
  );
};
