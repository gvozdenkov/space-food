import clsx from 'clsx';
import { Nav } from '../nav';
import { StellarLogo } from '../stellar-logo';
import s from './header.module.scss';
import { Link } from 'react-router-dom';
import { PATH } from '../../utils/config';

export const Header = () => {
  return (
    <header className={s.header}>
      <div className='page__section'>
        <Link to={PATH.HOME}>
          <StellarLogo extraClass={clsx(s.headerLogo)} type='default' />
        </Link>
        <Nav />
      </div>
    </header>
  );
};
