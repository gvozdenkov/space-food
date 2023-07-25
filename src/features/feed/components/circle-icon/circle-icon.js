import PropTypes from 'prop-types';
import clsx from 'clsx';
import s from './circle-icon.module.scss';

export const CircleIcon = ({ img, hideCount = 0 }) => {
  return hideCount === 0 ? (
    <div className={s.wrapper}>
      <img src={img} alt='' className={clsx(s.icon)} />
    </div>
  ) : (
    <div className={clsx(s.wrapper)}>
      <span className={clsx('text text_type_main-default', s['hide-count'])}>+{hideCount}</span>
      <img src={img} alt='' className={clsx(s['icon-end'])} />
    </div>
  );
};

CircleIcon.protoTypes = {
  img: PropTypes.string.isRequired,
  hideCount: PropTypes.number,
};
