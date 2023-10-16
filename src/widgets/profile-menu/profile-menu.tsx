import { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { CookieService, clx } from '#shared/lib';
import { NavItem } from '#shared/ui';
import { useLogOutMutation } from '#entities/session';
import { LogoutButton } from '#feature/logout';

import { profileMenuItems } from './config/menu-items';
import s from './profile-menu.module.scss';

type Props = {
  extraClass?: string;
};

export const ProfileMenu = ({ extraClass = '' }: Props) => {
  const { t } = useTranslation();

  const { mutate: logoutMutation } = useLogOutMutation({ redirectTo: '/' });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    logoutMutation(CookieService.getRefreshToken());
  };

  return (
    <nav className={clx(s.nav, { [extraClass]: !!extraClass })}>
      <ul className={clx(s['nav-list'])}>
        {profileMenuItems.map((item, index, arr) => {
          return index === arr.length - 1 ? (
            <li className={clx(s['nav-list__item'])} key={index}>
              <NavItem title={t(item.title)} url={item.to} textStyle='text text_type_main-medium' />
            </li>
          ) : (
            <li className={clx(s['nav-list__item'])} key={index}>
              <NavItem
                title={t(item.title)}
                url={item.to}
                textStyle='text text_type_main-medium'
                isEnd
              />
            </li>
          );
        })}
      </ul>
      <form onSubmit={onSubmit}>
        <LogoutButton title={t('profile.menu.logout')} />
      </form>
    </nav>
  );
};
