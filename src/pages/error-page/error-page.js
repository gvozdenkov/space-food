import clsx from 'clsx';
import s from './error-page.module.scss';
import { useIntl } from 'react-intl';
import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { LoaderShape } from '../../components/loader-shape';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { PATH } from '../../utils/config';

export const ErrorPage = () => {
  const error = useRouteError();
  const intl = useIntl();

  const isErrorResponse = isRouteErrorResponse(error);
  let errorTitle;
  let errorText;

  switch (error?.status) {
    case 404: {
      errorTitle = intl.formatMessage({ id: 'error-page.404.title' });
      errorText = intl.formatMessage({ id: 'error-page.404.text' });
      break;
    }
    default:
      errorTitle = intl.formatMessage({ id: 'error-page.common.title' });
      errorText = intl.formatMessage({ id: 'error-page.common.text' });
  }

  return (
    <div className={clsx(s.errorPage)}>
      <h1 className='text text_type_main-large mb-15'>{errorTitle}</h1>

      <LoaderShape />

      {isErrorResponse && (
        <p className={clsx(s.subtitle, 'text text_type_main-large mt-15')}>
          {error?.status && <span>{error?.status}&nbsp;</span>}
          {error?.statusText && <span>{error?.statusText}</span>}
        </p>
      )}

      {errorText && (
        <p className={clsx(s.subtitle, 'text text_type_main-default text_color_inactive mt-15')}>
          {errorText}
        </p>
      )}

      <Button htmlType='button' extraClass='mt-8'>
        <Link to={PATH.HOME} className={clsx(s.link, 'reset-link text text_type_main-default')}>
          {intl.formatMessage({ id: 'error-page.back' })}
        </Link>
      </Button>
    </div>
  );
};
