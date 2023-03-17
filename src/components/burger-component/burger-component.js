import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { getIcons } from '../../utils';
import s from './burger-component.module.css';

export const BurgerComponent = (props) => {
  const { withDrag, ...otherPorps } = props;

  return (
    <div className={s.burgerComponent}>
      {withDrag && getIcons('primary')['drag']}
      <ConstructorElement {...otherPorps} />
    </div>
  );
};
