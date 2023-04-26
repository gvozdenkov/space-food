import s from './app.module.scss';
import { Header } from '../header';
import { Main } from '../main';
import { IngredientContextProvider } from '../../utils/contexts/IngredientContext';
import { OrderContextProvider } from '../../utils/contexts/OrderContext';

export const App = () => {
  return (
    <div className={s.app}>
      <IngredientContextProvider>
        <OrderContextProvider>
          <Header />
          <main className={s.main}>
            <Main />
          </main>
        </OrderContextProvider>
      </IngredientContextProvider>
    </div>
  );
};
