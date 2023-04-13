import s from './app.module.scss';
import { Header } from '../header';
import { Main } from '../main';
import { IngredientContextProvider } from '../../utils/contexts/IngredientContext';

export const App = () => {
  return (
    <div className={s.app}>
      <Header />
      <main className={s.main}>
        <IngredientContextProvider>
          <Main />
        </IngredientContextProvider>
      </main>
    </div>
  );
};
