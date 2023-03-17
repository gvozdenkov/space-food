import { NavItem } from '../NavItem/NavItem';
import s from './Nav.module.css';

export const Nav = () => {
  return (
    <nav>
      <ul className={s.Nav}>
        <NavItem iconName="burger" text="Конструктор" isActive={true} />
        <NavItem iconName="list" text="Лента заказов" isActive={false} />
        <NavItem iconName="logo" isCentered="true" />
        <NavItem iconName="profile" text="Личный кабинет" isActive={false} />
      </ul>
    </nav>
  );
};
