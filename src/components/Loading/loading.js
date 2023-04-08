import clsx from 'clsx';
import s from './loading.module.scss';
import ellipsis from '../../styles/blocks/animated-ellipsis/animated-ellipsis.module.scss';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

export const Loading = ({ title, text = '' }) => {
  const intl = useIntl();

  return (
    <div className={clsx(s.loading)}>
      <span className={clsx(ellipsis.container, 'text text_type_main-large mb-4')}>
        <span>{title ? title : intl.formatMessage({ id: 'loading.title' })}</span>
        <span className={clsx(ellipsis.ellipsis_animate)}></span>
      </span>
      {text && <p className='text text_type_main-small text_color_inactive'>{text}</p>}
    </div>
  );
};

Loading.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
};
