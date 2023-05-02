import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import clsx from 'clsx';
import { getIcons } from '../../utils';
import s from './burger-constructor-list.module.scss';
import { useBurgerComponents } from './useBurgerComponents';
import { useIntl } from 'react-intl';

export const BurgerConstructorList = () => {
  const intl = useIntl();
  const {
    topComponentProps,
    middleComponetsProps,
    bottomComponentProps,
    handleRemoveFromConstructor,
  } = useBurgerComponents();

  const IngredientList = () => (
    <li className={clsx(s.ingredients, 'customScroll')} key='middle'>
      <ul className={clsx(s.list)}>
        {middleComponetsProps.map((component) => {
          return (
            <li className={clsx(s.withDrag)} key={component.constructorItemId}>
              {getIcons('primary')['drag']}
              <ConstructorElement
                {...component}
                handleClose={() => handleRemoveFromConstructor(component)}
              />
            </li>
          );
        })}
      </ul>
    </li>
  );

  const EmptyList = () => (
    <li className={clsx(s.emptyList)}>
      <p className={clsx(s.emptyDrag)}></p>
      <span className={clsx(s.emptyText, 'text text_type_main-default text_color_inactive mr-4')}>
        {intl.formatMessage({ id: 'constructor.emptyIngredint.text' })}
      </span>
    </li>
  );

  return (
    <ul className={clsx(s.list)}>
      <li key='top' className={clsx(s.bun)}>
        <ConstructorElement {...topComponentProps} />
      </li>

      {middleComponetsProps.length > 0 ? <IngredientList /> : <EmptyList />}

      <li key='bottom' className={clsx(s.bun)}>
        <ConstructorElement {...bottomComponentProps} />
      </li>
    </ul>
  );
};
