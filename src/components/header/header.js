import clsx from 'clsx';
import { Nav } from '../nav';
import { StellarLogo } from '../stellar-logo';
import s from './header.module.scss';

export const Header = () => {
  return (
    <header className={s.header}>
      <div className='page__section'>
        <a href='/'>
          <StellarLogo extraClass={clsx(s.headerLogo)} type='default' />
        </a>
        <Nav />
      </div>
    </header>
  );
};
