import clsx from 'clsx';
import { Nav } from '../nav';
import { StellarLogo } from '../stellar-logo';
import s from './header.module.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={s.header}>
      <div className='page__section'>
        <Link to='/'>
          <StellarLogo extraClass={clsx(s.headerLogo)} type='default' />
        </Link>
        <Nav />
      </div>
    </header>
  );
};
