import clsx from 'clsx';
import s from './burger-constructor-list.module.scss';
import { useBurgerConstructorList } from './use-burger-constractor-list';
import { useIntl } from 'react-intl';
import { BurgerConstructorItem } from '../burger-constructor-item/burger-constructor-item';

export const BurgerConstructorList = () => {
  const intl = useIntl();
  const {
    topComponentProps,
    middleComponetsProps,
    bottomComponentProps,
    isBun,
    isIngredients,
    handleRemoveFromConstructor,
    dropFromIngredients,
    dropFromConstructor,
    isOverConstructor,
  } = useBurgerConstructorList();

  const IngredientList = () => {
    return (
      <ul className={clsx(s.list)}>
        {middleComponetsProps.map((componentProps) => {
          return (
            <li key={componentProps._itemId}>
              <BurgerConstructorItem
                props={componentProps}
                handleClose={() => handleRemoveFromConstructor(componentProps)}
              />
            </li>
          );
        })}
      </ul>
    );
  };

  const EmptyElement = ({ type, text, extraClass }) => {
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

  return (
    <ul ref={dropFromIngredients} className={clsx(s.list)}>
      <li key='top' className={clsx(s.bun)}>
        {isBun ? (
          <BurgerConstructorItem props={topComponentProps} />
        ) : (
          <EmptyElement type='top' text={intl.formatMessage({ id: 'constructor.bun.empty' })} />
        )}
      </li>

      <li ref={dropFromConstructor} className={clsx(s.ingredients, 'customScroll')} key='middle'>
        {isIngredients ? (
          <IngredientList />
        ) : (
          <EmptyElement
            extraClass='ml-8'
            text={intl.formatMessage({ id: 'constructor.middle.empty' })}
          />
        )}
      </li>

      <li key='bottom' className={clsx(s.bun)}>
        {isBun ? (
          <BurgerConstructorItem props={bottomComponentProps} />
        ) : (
          <EmptyElement type='bottom' text={intl.formatMessage({ id: 'constructor.bun.empty' })} />
        )}
      </li>
    </ul>
  );
};
