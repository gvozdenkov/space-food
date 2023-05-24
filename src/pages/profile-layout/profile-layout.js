import clsx from 'clsx';
import s from './profile-layout.module.scss';
import { NavLink, Outlet } from 'react-router-dom';

export const ProfileLayout = () => {
  return (
    <div className={clsx(s.profile)}>
      <nav>
        <ul className={clsx(s.navList)}>
          <li className={clsx(s.navListItem)}>
            <NavLink
              to='/profile'
              className={({ isActive }) =>
                clsx(s.link, { [s.link_active]: isActive }, 'reset-link text text_type_main-medium')
              }
              end>
              Профиль
            </NavLink>
          </li>
          <li className={clsx(s.navListItem)}>
            <NavLink
              to='/profile/orders'
              className={({ isActive }) =>
                clsx(s.link, { [s.link_active]: isActive }, 'reset-link text text_type_main-medium')
              }>
              История заказов
            </NavLink>
          </li>
          <li className={clsx(s.navListItem)}>
            <NavLink
              to='/logout'
              className={({ isActive }) =>
                clsx(s.link, { [s.link_active]: isActive }, 'reset-link text text_type_main-medium')
              }>
              Выход
            </NavLink>
          </li>
        </ul>
      </nav>

      <section className={clsx(s.profileSection)}>
        <Outlet />
      </section>
    </div>
  );
};
