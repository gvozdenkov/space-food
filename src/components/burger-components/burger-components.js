import { BurgerComponent } from '../burger-component';
import s from './burger-components.module.css';

export const BurgerComponents = ({ components }) => {
  return (
    <ul className={s.burgerComponents}>
      {components.map((component, index, array) => {
        let pos;
        if (index === 0) {
          pos = 'top';
        } else if (index === array.length - 1) {
          pos = 'bottom';
        }
        return (
          <li key={index}>
            <BurgerComponent
              withDrag={index !== 0 && index !== array.length - 1}
              type={pos}
              isLocked={index === 0 || index === array.length - 1}
              text={component.name}
              price={component.price}
              thumbnail={component.image_mobile}
            />
          </li>
        );
      })}
    </ul>
  );
};
