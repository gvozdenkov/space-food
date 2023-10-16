import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LoaderShape } from '../../shared/ui/loader-shape';
import { clx } from '#shared/lib';
import { ROUTE } from '#shared/config';
import { Button } from '#shared/ui/form';

import s from './global-error.module.scss';

export const GlobalError = () => {
  const { t } = useTranslation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError();
  console.error(error);

  const status = error?.status ?? error?.response?.status;
  const statusText = error.statusText ?? error?.response?.data?.message;

  const isErrorResponse = isRouteErrorResponse(error);
  let errorTitle;
  let errorText;

  switch (status) {
    case 404: {
      errorTitle = t('errorElement.error.404.title');
      errorText = t('errorElement.error.404.text');
      break;
    }

    case 500: {
      errorTitle = t('errorElement.error.500.title');
      errorText = t('errorElement.error.500.text');
      break;
    }
    default:
      errorTitle = t('errorElement.error.common.title');
      errorText = t('errorElement.error.common.text');
  }

  return (
    <div className={clx(s.errorPage)}>
      <h1 className='text text_type_main-large mb-15'>{errorTitle}&nbsp;:(</h1>

      <LoaderShape />

      {isErrorResponse && (
        <p className={clx(s.subtitle, 'text text_type_main-large mt-15')}>
          {status && <span>{status}&nbsp;</span>}
          {statusText && <span>{statusText}</span>}
        </p>
      )}

      {errorText && (
        <p className={clx(s.subtitle, 'text text_type_main-default text_color_inactive mt-15')}>
          {errorText}
        </p>
      )}

      <Button htmlType='button' extraClass='mt-8'>
        <Link to={ROUTE.HOME} className={clx(s.link, 'reset-link text text_type_main-default')}>
          {t('errorElement.button.home')}
        </Link>
      </Button>
    </div>
  );
};
