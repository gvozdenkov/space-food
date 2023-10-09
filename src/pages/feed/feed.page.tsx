import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

import { clx } from '#shared/lib';
import { FeedList, FeedLoaderMessage, orderFeedQuery, useFeed } from '#entities/feed';
import { QUERYKEY } from '#shared/config';

import { OrderNumberList } from './ui/order-number-list';
import s from './feed.page.module.scss';

export const FeedPage = () => {
  const { t } = useTranslation();

  const url = 'wss://norma.nomoreparties.space/orders/all';
  const querykeys = [QUERYKEY.FEED];

  const { orders, total, totalToday, doneOrders, pendingOrders, isLoading } = useFeed({
    url,
    querykeys,
    query: orderFeedQuery,
  });

  return (
    <div className={clx(s.feedPage)}>
      {isLoading ? (
        <FeedLoaderMessage message='Loading' extraClass={s.feedPage__loader} />
      ) : (
        <>
          <section className={s.feedList}>
            <h1 className='text text_type_main-large mt-10 mb-5'>{t('feed.title')}</h1>
            <div className={clx(s.wrapper, 'customScroll')}>
              <FeedList orders={orders} />
            </div>
          </section>
          <section className={clx('mt-25', s.statistics)}>
            <h2 className={clx(s.statistics__done, 'text text_type_main-medium')}>
              {t('feed.doneTitle')}:
            </h2>
            <OrderNumberList
              orders={doneOrders}
              extraClass={clx(s.statistics__doneList, 'text_color_success')}
            />
            <h2 className={clx(s.statistics__pending, 'text text_type_main-medium')}>
              {t('feed.pendingTitle')}:
            </h2>
            <OrderNumberList
              orders={pendingOrders}
              extraClass={clx(s.statistics__pendingList, 'text_color_success')}
            />
            <h2 className={clx(s.statistics__totalTitle, 'text text_type_main-medium')}>
              {t('feed.totalTitle')}:
            </h2>
            <span className={clx(s.statistics__total, 'text text_type_digits-large')}>{total}</span>
            <h2 className={clx(s.statistics__totalTodayTitle, 'text text_type_main-medium')}>
              {t('feed.totalTodayTitle')}:
            </h2>
            <span className={clx(s.statistics__totalToday, 'text text_type_digits-large')}>
              {totalToday}
            </span>
          </section>

          <Outlet />
        </>
      )}
    </div>
  );
};
