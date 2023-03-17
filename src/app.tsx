import s from './app.module.css';
import { AppHeader } from './components/app-header';
import { Main } from './components/main';
import { burgerIngredientsData } from './utils/data';

export const App = () => {
  const data = burgerIngredientsData;

  return (
    <div className={s.app}>
      <AppHeader />
      <Main />
    </div>
  );
};
