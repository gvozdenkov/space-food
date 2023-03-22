import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { getIcons } from '../../utils';
import s from './burger-component.module.css';
import PropTypes from 'prop-types';

export const BurgerComponent = ({ withDrag, ...otherPorps }) => {
  return (
    <div className={s.burgerComponent}>
      {withDrag && getIcons('primary')['drag']}
      <ConstructorElement {...otherPorps} />
    </div>
  );
};

BurgerComponent.propTypes = {
  withDrag: PropTypes.bool,
  otherPorps: PropTypes.shape({
    text: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['top', 'bottom', undefined]),
    isLocked: PropTypes.bool,
    extraClass: PropTypes.string,
  }),
};
