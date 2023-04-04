import s from './app.module.scss';
import { Header } from '../header';
import { Main } from '../main';
import { useIngredients } from '../../utils/hooks/useIngredients';

export const App = () => {
  const { data, error, loading } = useIngredients();

  return (
    <div className={s.app}>
      <Header />
      <Main ingredients={data} />
    </div>
  );
};
