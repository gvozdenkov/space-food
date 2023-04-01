import s from './app.module.css';
import { AppHeader } from '../app-header';
import { Main } from '../main';
import { useIngredients } from '../../utils/hooks/useIngredients';
import { Modal } from '../modal';
import { IngredientDetails } from '../IngredientDetails';

export const App = () => {
  const { data, error, loading } = useIngredients();

  return (
    <div className={s.app}>
      <AppHeader />
      <Main ingredients={data} />
    </div>
  );
};
