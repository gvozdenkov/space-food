import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { getIcons } from '../../utils/utils';
import './BurgerComponent.css';

export const BurgerComponent = (props) => {
  const { withDrag, ...otherPorps } = props;

  return (
    <div className="BurgerComponent">
      {withDrag && getIcons('primary')['drag']}
      <ConstructorElement {...otherPorps} />
    </div>
  );
};
