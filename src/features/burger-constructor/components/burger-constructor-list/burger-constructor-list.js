import clsx from 'clsx';
import s from './burger-constructor-list.module.scss';
import { useBurgerConstructorList } from './hooks/use-burger-constractor-list';
import { BurgerConstructorSortableList } from './components/burger-constructor-sortable-list/burger-constructor-sortable-list';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { EmptyElement } from './components/empty-constructor-element/empty-constructor-element';
import { useTranslation } from 'react-i18next';

export const BurgerConstructorList = () => {
  const { t } = useTranslation();
  const { topBun, bottomBun, isBunAdded, isIngredientsAdded, setNodeRef, middleStyle, bunStyle } =
    useBurgerConstructorList();

  return (
    <ul ref={setNodeRef} className={clsx(s.list)}>
      <li style={bunStyle} key={`bun_top`} className={clsx(s.bun)}>
        {isBunAdded ? (
          <ConstructorElement {...topBun} />
        ) : (
          <EmptyElement type='top' text={t('constructor.bun.empty')} />
        )}
      </li>

      <li
        style={middleStyle}
        key={`ingredient_middle`}
        className={clsx(s.ingredients, 'customScroll')}>
        {isIngredientsAdded ? (
          <BurgerConstructorSortableList />
        ) : (
          <EmptyElement extraClass='ml-8' text={t('constructor.middle.empty')} />
        )}
      </li>

      <li style={bunStyle} key={`bun_bottom`} className={clsx(s.bun)}>
        {isBunAdded ? (
          <ConstructorElement {...bottomBun} />
        ) : (
          <EmptyElement type='bottom' text={t('constructor.bun.empty')} />
        )}
      </li>
    </ul>
  );
};
