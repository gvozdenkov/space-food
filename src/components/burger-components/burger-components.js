import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import clsx from 'clsx';
import { getIcons } from '../../utils';
import s from './burger-components.module.css';
import { useBurgerComponents } from './useBurgerComponents';

export const BurgerComponents = ({ components }) => {
  const componentProps = useBurgerComponents({ components });

  return (
    <ul className={clsx(s.burgerComponents)}>
      {components.map((_, index) => {
        const withDrag = componentProps[index].withDrag;
        return (
          <li
            className={clsx(
              { [s.burgerComponents__item_withDrag]: withDrag },
              { 'ml-15': !withDrag }
            )}
            key={index}
          >
            {withDrag && getIcons('primary')['drag']}
            <ConstructorElement {...componentProps[index]} />
          </li>
        );
      })}
    </ul>
  );
};
