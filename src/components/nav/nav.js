import { NavItem } from '../nav-item';
import s from './nav.module.scss';

export const Nav = () => {
  return (
    <nav>
      <ul className={s.nav}>
        <NavItem iconName="burger" isActive={true}>
          Конструктор
        </NavItem>
        <NavItem iconName="list" isActive={false}>
          Лента заказов
        </NavItem>
        <NavItem iconName="logo" extraClass="ml-auto mr-auto" />
        <NavItem iconName="profile" isActive={false}>
          Личный кабинет
        </NavItem>
      </ul>
    </nav>
  );
};
