import { ROUTE } from '#shared/config';
import { NavItem } from '#shared/ui';

import s from './profile.module.scss';

export const Profile = () => {
  const isAuth = false;

  if (!isAuth) {
    return (
      <NavItem extraClass={s.profile} url={ROUTE.LOGIN} icon='profile' title='header.menu.login' />
    );
  }

  return (
    <NavItem
      extraClass={s.profile}
      url={ROUTE.PROFILE.root}
      icon='profile'
      title='header.menu.profile'
    />
  );
};
