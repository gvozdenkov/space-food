import { Nav } from '#layout/nav';
import s from './header.module.scss';

export const Header = () => {
  return (
    <header className={s.header}>
      <Nav />
    </header>
  );
};
