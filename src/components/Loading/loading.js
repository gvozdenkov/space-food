import clsx from 'clsx';
import s from './loading.module.scss';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

export const Loading = ({ title, text = '' }) => {
  const intl = useIntl();

  return (
    <div className={clsx(s.loading)}>
      <p className={clsx('ellipsis text text_type_main-large mb-4')}>
        {title ? title : intl.formatMessage({ id: 'loading.title' })}
      </p>
      {text && <p className='text text_type_main-small text_color_inactive'>{text}</p>}
    </div>
  );
};

Loading.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
