import clsx from 'clsx';
import s from './global-error.module.scss';
import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { LoaderShape } from '../loader-shape';
import { PATH } from '../../utils/config';

export const GlobalError = () => {
  const error = useRouteError();

  const isErrorResponse = isRouteErrorResponse(error);
  let errorTitle;
  let errorText;

  switch (error?.status) {
    case 404: {
      errorTitle = 'Ой, тут ничего нет :(';
      errorText = 'Произошла ошибка в навигации и вы попали в неизвестный сектор галактики';
      break;
    }
    default:
      errorTitle = 'Ой, что-то пошло не так :(';
      errorText = 'Всё засосало в чёрную дыру, уже летим чинить :(';
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
          Собрать бургер
        </Link>
      </Button>
    </div>
  );
};
