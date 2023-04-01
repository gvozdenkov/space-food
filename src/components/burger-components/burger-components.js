import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import clsx from 'clsx';
import { getIcons } from '../../utils';
import s from './burger-components.module.scss';
import { useBurgerComponents } from './useBurgerComponents';

export const BurgerComponents = ({ components }) => {
  const { topComponent, middleComponet, bottomComponent } = useBurgerComponents({
    components,
  });

  return (
    <ul className={clsx(s.burgerComponents)}>
      <li key="top" className={clsx(s.burgerComponent__topBottom)}>
        <ConstructorElement {...topComponent} />
      </li>

      <li
        className={clsx(s.burgerComponents, s.burgerComponents_middle, 'custom-scroll')}
        key="middle"
      >
        <ul className={clsx(s.burgerComponents)}>
          {middleComponet.map((component, index) => {
            return (
              <li className={clsx(s.burgerComponent_withDrag)} key={index}>
                {getIcons('primary')['drag']}
                <ConstructorElement {...component} />
              </li>
            );
          })}
        </ul>
      </li>

      <li key="bottom" className={clsx(s.burgerComponent__topBottom)}>
        <ConstructorElement {...bottomComponent} />
      </li>
    </ul>
  );
};
