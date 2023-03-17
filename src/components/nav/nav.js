import { NavItem } from '../nav-item';
import s from './nav.module.css';

export const Nav = () => {
  return (
    <nav>
      <ul className={s.nav}>
        <NavItem iconName="burger" text="Конструктор" isActive={true} />
        <NavItem iconName="list" text="Лента заказов" isActive={false} />
        <NavItem iconName="logo" isCentered="true" />
        <NavItem iconName="profile" text="Личный кабинет" isActive={false} />
      </ul>
    </nav>
  );
};
