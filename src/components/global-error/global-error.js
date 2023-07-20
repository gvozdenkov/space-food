import clsx from 'clsx';
import s from './global-error.module.scss';
import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { LoaderShape } from '../loader-shape';
import { PATH } from '../../utils/config';
import { useTranslation } from 'react-i18next';

export const GlobalError = () => {
  const { t } = useTranslation();
  const error = useRouteError();

  const status = error?.status ?? error?.response?.status;
  const statusText = error.statusText ?? error?.response?.data?.message;

  const isErrorResponse = isRouteErrorResponse(error);
  let errorTitle;
  let errorText;

  switch (status) {
    case 404: {
      errorTitle = t('error-page.404.title');
      errorText = t('error-page.404.text');
      break;
    }

    case 401: {
      errorTitle = t('error-page.401.title');
      errorText = t('error-page.401.text');
      break;
    }

    case 500: {
      errorTitle = t('error-page.500.title');
      errorText = t('error-page.500.text');
      break;
    }
    default:
      errorTitle = t('error-page.common.title');
      errorText = t('error-page.common.text');
  }

  return (
    <div className={clsx(s.errorPage)}>
      <h1 className='text text_type_main-large mb-15'>{errorTitle}&nbsp;:(</h1>

      <LoaderShape />

      {isErrorResponse && (
        <p className={clsx(s.subtitle, 'text text_type_main-large mt-15')}>
          {status && <span>{status}&nbsp;</span>}
          {statusText && <span>{statusText}</span>}
        </p>
      )}

      {errorText && (
        <p className={clsx(s.subtitle, 'text text_type_main-default text_color_inactive mt-15')}>
          {errorText}
        </p>
      )}

      <Button htmlType='button' extraClass='mt-8'>
        <Link to={PATH.HOME} className={clsx(s.link, 'reset-link text text_type_main-default')}>
          {t('error-page.back')}
        </Link>
      </Button>
    </div>
  );
};
