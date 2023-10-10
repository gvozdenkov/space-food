import { useUserQuery } from '#entities/session';
import { ROUTE } from '#shared/config';
import { clx } from '#shared/lib';
import { NavItem } from '#shared/ui';

import s from './profile.module.scss';

export const Profile = () => {
  const { data: user } = useUserQuery();

  let url: string = ROUTE.PROFILE.ROOT;
  let title = 'header.menu.profile';

  if (!user) {
    url = ROUTE.LOGIN;
    title = 'header.menu.login';
  }

  return <NavItem extraClass={clx(s.profile, 'mr-4')} url={url} icon='profile' title={title} />;
};
