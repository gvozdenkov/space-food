import clsx from 'clsx';
import s from './burger-constructor-list.module.scss';
import { useBurgerComponents } from './useBurgerComponents';
import { useIntl } from 'react-intl';
import { BurgerConstructorItem } from '../burger-constructor-item/burger-constructor-item';
import { useDrop } from 'react-dnd';
import { DragTypes } from '../../utils/config';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { ingredientAdded } from '../../features/burger-constructor/burger-constructor-slice';
import { useGetIngredientsQuery } from '../../features/api/api-slice';

export const BurgerConstructorList = () => {
  const dispatch = useDispatch();
  const { data: ingredients } = useGetIngredientsQuery();

  const intl = useIntl();
  const {
    topComponentProps,
    middleComponetsProps,
    bottomComponentProps,
    handleRemoveFromConstructor,
  } = useBurgerComponents();

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
          { [s.dragHover]: isOver },
          'text text_type_main-default text_color_inactive mr-4',
        )}>
        {intl.formatMessage({ id: 'constructor.emptyIngredint.text' })}
      </p>
    </div>
  );

  const [{ isOver }, dropFromIngredients] = useDrop(() => ({
    accept: DragTypes.INGREDIENT,
    drop: (item, monitor) => {
      const ingredient = ingredients.data.find((ingredient) => ingredient._id === item.id);
      dispatch(ingredientAdded(ingredient));
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const [, dropFromConstructor] = useDrop(() => ({
    accept: DragTypes.CONSTRUCTOR_INGREDIENT,
  }));

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
