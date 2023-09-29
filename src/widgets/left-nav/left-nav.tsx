import { Link } from 'react-router-dom';
import s from './left-nav.module.scss';
import { clx } from '#shared/lib';

export const LeftNav = () => {
  return (
    <nav>
      <ul className={s.nav}>
        <li className={s.nav__item}>
          <Link to='/' className={clx('text text_type_main-default', s.nav__link)}>
            Link 01
          </Link>
        </li>
        <li>
          <Link to='/' className={clx('text text_type_main-default', s.nav__link)}>
            Link 02
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export const RightNav = () => {
  return (
    <Link to='/' className={clx('text text_type_main-default', s.nav__link)}>
      Login
    </Link>
  );
};

