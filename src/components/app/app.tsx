import s from './app.module.scss';
import { AppHeader } from '../app-header';
import { Main } from '../main';
import { useIngredients } from '../../utils/hooks/useIngredients';

export const App = () => {
  const { data, error, loading } = useIngredients();

  return (
    <div className={s.app}>
      <AppHeader />
      <Main ingredients={data} />
    </div>
  );
};
