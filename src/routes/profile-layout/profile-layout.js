import clsx from 'clsx';
import s from './profile-layout.module.scss';
import { Form, NavLink, Outlet } from 'react-router-dom';
import { profileMenuItems } from '../../utils/config';
import { useTranslation } from 'react-i18next';

export const ProfileLayout = () => {
  const { t } = useTranslation();

  return (
    <section className={clsx(s.profile)}>
      <nav className={clsx(s.nav)}>
        <ul className={clsx(s.navList)}>
          {profileMenuItems.map((menu, index) => {
            return (
              <li className={clsx(s.navListItem)} key={index}>
                <NavLink
                  to={menu.to}
                  className={({ isActive }) =>
                    clsx(
                      s.link,
                      { [s.link_active]: isActive },
                      'reset-link text text_type_main-medium',
                    )
                  }
                  end>
                  {t(menu.title)}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <Form method='POST'>
          <button type='submit' className={clsx(s.exitBtn, 'text text_type_main-medium')}>
            {t('profile.menu.logout')}
          </button>
        </Form>
      </nav>

      <Outlet />
    </section>
  );
};
