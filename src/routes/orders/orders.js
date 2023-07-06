import clsx from 'clsx';
import s from './orders.module.scss';
import { useTranslation } from 'react-i18next';

export const Orders = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className={clsx(s.orders)}>
        <h1>Orders будут тут :)</h1>
      </section>
      <p className={clsx(s.comment, 'text text_type_main-default text_color_inactive')}>
        {t('profile.orders.comment')}
      </p>
    </>
  );
};
