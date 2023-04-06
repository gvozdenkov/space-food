import clsx from 'clsx';
import { useIntl } from 'react-intl';
import s from './loading.module.scss';
import ellipsis from '../../styles/blocks/animated-ellipsis/animated-ellipsis.module.scss';

export const Loading = () => {
  const intl = useIntl();

  return (
    <div className={clsx(s.loading)}>
      <h1 className={clsx(ellipsis.container, 'text text_type_main-large mb-4')}>
        <span>{intl.formatMessage({ id: 'loading.title' })}</span>
        <span className={clsx(ellipsis.ellipsis_animate)}></span>
      </h1>
      <p className='text text_type_main-small text_color_inactive'>
        {intl.formatMessage({ id: 'loading.subTitle' })}
      </p>
    </div>
  );
};
