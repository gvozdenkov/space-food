import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import cn from 'classnames';
import { getIcons } from '../../utils';
import s from './burger-component.module.css';

export const BurgerComponent = (props) => {
  const { withDrag, ...otherPorps } = props;

  return (
    <div className={cn(s.burgerComponent)}>
      {withDrag && getIcons('primary')['drag']}
      <ConstructorElement {...otherPorps} />
    </div>
  );
};
