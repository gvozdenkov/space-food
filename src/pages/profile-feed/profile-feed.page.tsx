import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { clx } from '#shared/lib';

import { FeedList, FeedLoaderMessage, profileFeedQuery, useFeed } from '#entities/feed';
import { QUERYKEY } from '#shared/config';

import s from './profile-feed.page.module.scss';

export const ProfileFeedPage = () => {
  const { t } = useTranslation();

  const url = 'wss://norma.nomoreparties.space/orders';
  const querykeys = [QUERYKEY.PROFILE_ORDERS];

  const { orders, isLoading } = useFeed({
    url,
    useToken: true,
    querykeys,
    query: profileFeedQuery,
  });

  const isOrderListEmpty = orders.length === 0;

  return (
    <>
      <section className={clx(s.orders, { [s.orders_empty]: isOrderListEmpty || isLoading })}>
        {isLoading ? (
          <FeedLoaderMessage message={t('feed.loading')} />
        ) : isOrderListEmpty ? (
          <p className='text text_color_inactive text_type_main-medium'>{t('feed.empty')}</p>
        ) : (
          <div className={clx(s.wrapper, 'customScroll')}>
            <FeedList orders={orders} />
          </div>
        )}
      </section>

      <p className={clx(s.comment, 'text text_type_main-default text_color_inactive')}>
        {t('profile.orders.comment')}
      </p>

      <Outlet />
    </>
  );
};
