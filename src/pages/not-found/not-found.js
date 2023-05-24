import clsx from 'clsx';
import { LoaderShape } from '../../components/loader-shape';
import s from './not-found.module.scss';
import { useIntl } from 'react-intl';

export const NotFound = () => {
  const intl = useIntl();

  return (
    <div className={clsx(s.notFound)}>
      <p className='text text_type_main-large'>{intl.formatMessage({ id: 'not-found.title' })}</p>
      <LoaderShape />
      <p className={clsx(s.subtitle, 'text text_type_main-default')}>
        {intl.formatMessage({ id: 'not-found.subtitle' })}
      </p>
    </div>
  );
};
