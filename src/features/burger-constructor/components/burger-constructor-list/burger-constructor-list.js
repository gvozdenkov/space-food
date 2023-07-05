import clsx from 'clsx';
import s from './burger-constructor-list.module.scss';
import { useBurgerConstructorList } from './hooks/use-burger-constractor-list';
import { BurgerConstructorSortableList } from './components/burger-constructor-sortable-list/burger-constructor-sortable-list';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { EmptyElement } from './components/empty-constructor-element/empty-constructor-element';
import { useTranslation } from 'react-i18next';

export const BurgerConstructorList = () => {
  const { t } = useTranslation();
  const { topBun, bottomBun, isBun, isIngredients } = useBurgerConstructorList();

  return (
    <ul ref={null} className={clsx(s.list)}>
      <li key='top' className={clsx(s.bun)}>
        {isBun ? (
          <ConstructorElement {...topBun} />
        ) : (
          <EmptyElement type='top' text={t('constructor.bun.empty')} />
        )}
      </li>

      <li className={clsx(s.ingredients, 'customScroll')} key='middle'>
        {isIngredients ? (
          <BurgerConstructorSortableList />
        ) : (
          <EmptyElement extraClass='ml-8' text={t('constructor.middle.empty')} />
        )}
      </li>

      <li key='bottom' className={clsx(s.bun)}>
        {isBun ? (
          <ConstructorElement {...bottomBun} />
        ) : (
          <EmptyElement type='bottom' text={t('constructor.bun.empty')} />
        )}
      </li>
    </ul>
  );
};
