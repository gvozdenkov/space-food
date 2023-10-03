import { Form } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LogoutButton } from '#feature/logout';
import { clx } from '#shared/lib';
import { NavItem } from '#shared/ui';
import { profileMenuItems } from './config/menu-items';

import s from './profile-menu.module.scss';

type Props = {
  extraClass?: string;
};

export const ProfileMenu = ({ extraClass = '' }: Props) => {
  const { t } = useTranslation();

  return (
    <nav className={clx(s.nav, { [extraClass]: !!extraClass })}>
      <ul className={clx(s['nav-list'])}>
        {profileMenuItems.map((item, index) => {
          return (
            <li className={clx(s['nav-list__item'])} key={index}>
              <NavItem title={t(item.title)} url={item.to} textStyle='text text_type_main-medium' />
            </li>
          );
        })}
      </ul>
      <Form method='POST'>
        <LogoutButton title={t('profile.menu.logout')} />
      </Form>
    </nav>
  );
};
