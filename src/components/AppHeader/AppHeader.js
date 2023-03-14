import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { NavItem } from '../NavItem/NavItem';
import './AppHeader.css';

export const AppHeader = () => {
  return (
    <header className="AppHeader">
      <div className="page__section">
        <nav>
          <ul className="nav">
            <li className="nav__item">
              <NavItem text="Конструктор" color="primary">
                <BurgerIcon type="primary"></BurgerIcon>
              </NavItem>
            </li>
            <li className="nav__item nav__item_type_list">
              <NavItem text="Лента заказов" color="inactive">
                <ListIcon type="primary"></ListIcon>
              </NavItem>
            </li>
            <li className="nav__item">
              <NavItem>
                <Logo type="primary"></Logo>
              </NavItem>
            </li>
            <li className="nav__item nav__item_type_profile">
              <NavItem text="Личный кабинет" color="inactive">
                <ProfileIcon type="primary"></ProfileIcon>
              </NavItem>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
