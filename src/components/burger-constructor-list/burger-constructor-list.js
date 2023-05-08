import clsx from 'clsx';
import s from './burger-constructor-list.module.scss';
import { useBurgerConstructorList } from './use-burger-constractor-list';
import { useIntl } from 'react-intl';
import { BurgerConstructorSortableList } from './burger-constructor-sortable-list';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { EmptyElement } from './empty-constructor-element';

export const BurgerConstructorList = () => {
  const intl = useIntl();
  const { topBun, bottomBun, isBun, isIngredients } = useBurgerConstructorList();

  return (
    <ul ref={null} className={clsx(s.list)}>
      <li key='top' className={clsx(s.bun)}>
        {isBun ? (
          <ConstructorElement {...topBun} />
        ) : (
          <EmptyElement type='top' text={intl.formatMessage({ id: 'constructor.bun.empty' })} />
        )}
      </li>

      <li className={clsx(s.ingredients, 'customScroll')} key='middle'>
        {isIngredients ? (
          <BurgerConstructorSortableList />
        ) : (
          <EmptyElement
            extraClass='ml-8'
            text={intl.formatMessage({ id: 'constructor.middle.empty' })}
          />
        )}
      </li>

      <li key='bottom' className={clsx(s.bun)}>
        {isBun ? (
          <ConstructorElement {...bottomBun} />
        ) : (
          <EmptyElement type='bottom' text={intl.formatMessage({ id: 'constructor.bun.empty' })} />
        )}
      </li>
    </ul>
  );
};
