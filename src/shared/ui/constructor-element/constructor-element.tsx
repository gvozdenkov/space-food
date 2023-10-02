import { clx } from '#shared/lib';
import { CurrencyIcon, DeleteIcon, LockIcon } from '../icons';

import s from './constructor-element.module.scss';

type Props = {
  text: string;
  thumbnail: string;
  price: number;
  type?: 'top' | 'bottom';
  isLocked?: boolean;
  extraClass?: string;
  handleDelete?: () => void;
};

export const ConstructorElement = ({
  type,
  text,
  thumbnail,
  price,
  isLocked,
  extraClass = '',
  handleDelete,
}: Props) => {
  const className = clx(
    s['constructor-element'],
    {
      [s[`constructor-element_pos_${type}`]]: type,
    },
    extraClass,
  );

  const action = isLocked ? (
    <LockIcon type='secondary' />
  ) : (
    <DeleteIcon type='primary' onClick={handleDelete} />
  );

  return (
    <div className={className}>
      <span className={s['constructor-element__row']}>
        <img className={s['constructor-element__image']} src={thumbnail} alt={text} />
        <span className={s['constructor-element__text']}>{text}</span>
        <span className={s['constructor-element__price']}>
          {price}
          <CurrencyIcon type='primary' />
        </span>
        <span className={clx(s['constructor-element__action'], 'pr-2')}>{action}</span>
      </span>
    </div>
  );
};
