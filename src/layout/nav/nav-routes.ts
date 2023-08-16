import { IconName } from '#components/icons/types';
import { ROUTES } from '#constants/routes';
import { RouteURL } from '#types/route';
import { RequireAtLeastOne } from '#types/utils';

type ItemProps = {
  url: RouteURL;
  title?: string;
  icon?: IconName;
};

export type NavItem = RequireAtLeastOne<ItemProps, 'title' | 'icon'>;

export const navRoutes: NavItem[] = [
  {
    title: 'header.menu.constructor',
    icon: 'burger',
    url: ROUTES.HOME,
  },
  {
    title: 'header.menu.feed',
    icon: 'list',
    url: ROUTES.FEED,
  },
  {
    title: 'header.menu.profile',
    icon: 'profile',
    url: ROUTES.PROFILE,
  },
];
