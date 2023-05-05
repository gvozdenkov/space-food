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

  const EmptyList = () => (
    <div className={clsx(s.emptyList)}>
      <p className={clsx(s.emptyDrag)}></p>
      <p
        className={clsx(
          s.emptyText,
          { [s.dragHover]: isOverConstructor },
          'text text_type_main-default text_color_inactive mr-4',
        )}>
        {intl.formatMessage({ id: 'constructor.emptyIngredint.text' })}
      </p>
    </div>
  );

  return (
    <ul ref={dropFromIngredients} className={clsx(s.list)}>
      <li key='top' className={clsx(s.bun)}>
        <BurgerConstructorItem props={topComponentProps} />
      </li>

      <li ref={dropFromConstructor} className={clsx(s.ingredients, 'customScroll')} key='middle'>
        {middleComponetsProps.length > 0 ? <IngredientList /> : <EmptyList />}
      </li>

      <li key='bottom' className={clsx(s.bun)}>
        <BurgerConstructorItem props={bottomComponentProps} />
      </li>
    </ul>
  );
};
