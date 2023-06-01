import clsx from 'clsx';
import s from './profile-layout.module.scss';
import { NavLink, Outlet } from 'react-router-dom';
import { profileMenuItems } from '../../utils/config';
import { IntlConvert } from '../../utils/utils';
import { useIntl } from 'react-intl';
import { useProfileLayout } from './use-profile-layout';

export const ProfileLayout = () => {
  const intl = useIntl();
  const intlProfileMenuItems = IntlConvert(profileMenuItems, 'title');
  const { handleLogout } = useProfileLayout();

  return (
    <div className={clsx(s.profile)}>
      <nav className={clsx(s.nav)}>
        <ul className={clsx(s.navList)}>
          {intlProfileMenuItems.map((menu, index) => {
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
                  {menu.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          onClick={handleLogout}
          type='submit'
          className={clsx(s.exitBtn, 'text text_type_main-medium')}>
          {intl.formatMessage({ id: 'profile.menu.logout' })}
        </button>
      </nav>

      <Outlet />
    </div>
  );
};
