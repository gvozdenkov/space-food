import { Nav } from '../nav';
import s from './app-header.module.css';

export const AppHeader = () => {
  return (
    <header className={s.appheader}>
      <div className="page__section">
        <Nav />
      </div>
    </header>
  );
};
