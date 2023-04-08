import clsx from 'clsx';
import s from './card.module.scss';
import PropTypes from 'prop-types';

export const Card = ({ children }) => {
  return <article className={clsx(s.card)}>{children}</article>;
};

Card.propTypes = {
  children: PropTypes.any,
};
