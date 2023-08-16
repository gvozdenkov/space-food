import { IconName } from '#components/icons/types';
import { ROUTES } from '#constants/routes';
import { RouteURL } from '#types/route';

export type NavItem = {
  title: string;
  url: RouteURL;
  icon?: IconName;
};

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
