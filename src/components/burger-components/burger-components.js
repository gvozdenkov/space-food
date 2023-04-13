import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import clsx from 'clsx';
import { getIcons } from '../../utils';
import s from './burger-components.module.scss';
import { useBurgerComponents } from './useBurgerComponents';
import { useCartContext } from '../../utils/contexts/CartContext/CartContext';

export const BurgerComponents = () => {
  const { ingredients } = useCartContext();

  const { topComponent, middleComponets, bottomComponent } = useBurgerComponents({
    ingredients,
  });

  return (
    <ul className={clsx(s.burgerComponents)}>
      <li key='top' className={clsx(s.burgerComponent__topBottom)}>
        <ConstructorElement {...topComponent} />
      </li>

      {ingredients.length > 2 && (
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
      )}

      <li key='bottom' className={clsx(s.burgerComponent__topBottom)}>
        <ConstructorElement {...bottomComponent} />
      </li>
    </ul>
  );
};
