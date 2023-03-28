import s from './app.module.css';
import { AppHeader } from '../app-header';
import { Main } from '../main';
import { useIngredients } from '../../utils/hooks/useIngredients';

export const App = () => {
  const { data, error, loading } = useIngredients();
  console.log(data);

  return (
    <div className={s.app}>
      <AppHeader />
      <Main ingredients={data} />
    </div>
  );
};
