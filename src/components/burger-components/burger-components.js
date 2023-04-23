import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import clsx from 'clsx';
import { getIcons } from '../../utils';
import s from './burger-components.module.scss';
import { useBurgerComponents } from './useBurgerComponents';
import { useCartContext } from '../../utils/contexts/CartContext/CartContext';
import { useIntl } from 'react-intl';

export const BurgerComponents = () => {
  const intl = useIntl();
  const { cart } = useCartContext();

  const { topComponent, middleComponets, bottomComponent } = useBurgerComponents(cart);

  return (
    <ul className={clsx(s.burgerComponents)}>
      <li key='top' className={clsx(s.burgerComponent__topBottom)}>
        <ConstructorElement {...topComponent} />
      </li>

      {cart.ingredients.length > 2 ? (
        <li
          className={clsx(s.burgerComponents, s.burgerComponents_middle, 'customScroll')}
          key='middle'>
          <ul className={clsx(s.burgerComponents)}>
            {middleComponets.map((component, index) => {
              return (
                <li className={clsx(s.burgerComponent_withDrag)} key={index}>
                  {getIcons('primary')['drag']}
                  <ConstructorElement {...component} />
                </li>
              );
            })}
          </ul>
        </li>
      ) : (
        <li className={clsx(s.emptyList)}>
          <p className={clsx(s.emptyDrag)}></p>
          <span
            className={clsx(s.emptyText, 'text text_type_main-default text_color_inactive mr-4')}>
            {intl.formatMessage({ id: 'constructor.emptyIngredint.text' })}
          </span>
        </li>
      )}

      <li key='bottom' className={clsx(s.burgerComponent__topBottom)}>
        <ConstructorElement {...bottomComponent} />
      </li>
    </ul>
  );
};
