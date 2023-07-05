import clsx from 'clsx';
import s from './empty-constructor-element.module.scss';

export const EmptyElement = ({ type, text, extraClass }) => {
  const top = type === 'top';
  const bottom = type === 'bottom';

  const className = clsx(
    s.emptyElement,
    `text text_type_main-default text_color_inactive ${extraClass}`,
    {
      [s.emptyElement_top]: top,
      [s.emptyElement_bottom]: bottom,
    },
  );

  return (
    <div className={className}>
      <span className={clsx(s.emptyElement_row)}>
        <p className='text text_type_main-default'>{text}</p>
      </span>
    </div>
  );
};
