import s from './app.module.css';
import { AppHeader } from '../app-header';
import { Main } from '../main';
import { burgerIngredientsData } from '../../utils/data';

export const App = () => {
  const ingredients = burgerIngredientsData;

  return (
    <div className={s.app}>
      <AppHeader />
      <Main ingredients={ingredients} />
    </div>
  );
};
