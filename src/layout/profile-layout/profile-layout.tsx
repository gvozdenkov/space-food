import { Form, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { clx } from '#utils/clx';
import { profileRoutes } from '#constants/routes';
import { NavItem } from '#components/nav-item';
import s from './profile-layout.module.scss';

export const ProfileLayout = () => {
  const { t } = useTranslation();

  return (
    <div className={s.profile}>
      <nav className={s.nav}>
        <ul className={s.navList}>
          {profileRoutes.map((item, i) => (
            <li className={s.navListItem} key={i}>
              <NavItem {...item} textStyle='text_type_main-medium' />
            </li>
          ))}
        </ul>
        <Form method='POST'>
          <button type='submit' className={clx(s.logoutBtn, 'text text_type_main-medium')}>
            {t('profile.menu.logout')}
          </button>
        </Form>
      </nav>

      <Outlet />
    </div>
  );
};
