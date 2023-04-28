import s from './app.module.scss';
import { Header } from '../components/header';
import { Main } from '../components/main';
import { OrderContextProvider } from '../common/contexts/OrderContext';

export const App = () => {
  return (
    <div className={s.app}>
        <OrderContextProvider>
          <Header />
          <main className={s.main}>
            <Main />
          </main>
        </OrderContextProvider>
    </div>
  );
};
