import clsx from 'clsx';
import { LoaderShape } from '../../components/loader-shape';
import s from './not-found.module.scss';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { PATH } from '../../utils/config';

export const NotFound = () => {
  const intl = useIntl();

  return (
    <div className={clsx(s.notFound)}>
      <p className='text text_type_main-large mb-15'>
        {intl.formatMessage({ id: 'not-found.title' })}
      </p>
      <LoaderShape />
      <p className={clsx(s.subtitle, 'text text_type_main-default text_color_inactive mt-15')}>
        {intl.formatMessage({ id: 'not-found.subtitle' })}
      </p>
      <Button htmlType='button' extraClass='mt-8'>
        <Link to={PATH.HOME} className={clsx(s.link, 'reset-link text text_type_main-default')}>
          {intl.formatMessage({ id: 'not-found.back' })}
        </Link>
      </Button>
    </div>
  );
};
