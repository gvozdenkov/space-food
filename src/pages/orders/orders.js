import clsx from 'clsx';
import s from './orders.module.scss';
import { useIntl } from 'react-intl';

export const Orders = () => {
  const intl = useIntl();

  return (
    <>
      <section className={clsx(s.orders)}>
        <h1>Orders</h1>
      </section>
      <p className={clsx(s.comment, 'text text_type_main-default text_color_inactive')}>
        {intl.formatMessage({ id: 'profile.orders.comment' })}
      </p>
    </>
  );
};
