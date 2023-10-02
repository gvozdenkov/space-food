import { clx } from '#shared/lib';

import s from './empty-constructor-element.module.scss';

type Props = {
  text: string;
  type?: 'top' | 'bottom';
  extraClass?: string;
};

export const EmptyConstructorElement = ({ type, text, extraClass = '' }: Props) => {
  const isTop = type === 'top';
  const isBottom = type === 'bottom';

  const className = clx(
    s.emptyElement,
    `text text_type_main-default text_color_inactive ${extraClass}`,
    {
      [s.emptyElement_top]: isTop,
      [s.emptyElement_bottom]: isBottom,
    },
  );

  return (
    <div className={className}>
      <span className={clx(s.emptyElement_row)}>
        <p className='text text_type_main-default'>{text}</p>
      </span>
    </div>
  );
};
