import { IconName } from '#components/icons/types';
import { RouteURL } from '#types/route';
import { RequireAtLeastOne } from '#types/utils';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  PROFILE: '/profile',
  PROFILE_ORDERS: '/orders',
  ORDER: 'order',
  FEED: '/feed',
  INGREDIENTS: 'ingredients',
} as const;

export type NavItem = RequireAtLeastOne<
  {
    url: RouteURL;
    title?: string;
    icon?: IconName;
  },
  'title' | 'icon'
>;

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

export const profileRoutes: NavItem[] = [
  {
    title: 'profile.menu.profile',
    url: ROUTES.PROFILE,
  },
  {
    title: 'profile.menu.orders',
    url: ROUTES.PROFILE_ORDERS,
  },
];
