import { Nav } from '../Nav/Nav';
import s from './AppHeader.module.css';

export const AppHeader = () => {
  return (
    <header className={s.AppHeader}>
      <div className="page__section">
        <Nav />
      </div>
    </header>
  );
};
