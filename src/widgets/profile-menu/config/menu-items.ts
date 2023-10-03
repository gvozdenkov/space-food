import { ROUTE } from '#shared/config';

type ProfileMenuItems = {
  title: string;
  to: string;
};

export const profileMenuItems: ProfileMenuItems[] = [
  {
    title: 'profile.menu.profile',
    to: ROUTE.PROFILE.root,
  },
  {
    title: 'profile.menu.orders',
    to: ROUTE.PROFILE.orders,
  },
];
