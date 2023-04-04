import { useContext } from 'react';
import s from './app.module.scss';
import { Header } from '../header';
import { Main } from '../main';
import { useIngredients } from '../../utils/hooks/useIngredients';
import { IngredientContext } from '../../utils/contexts/ingredientsContext';

export const App = () => {
  const { data, error, loading } = useIngredients();

  return (
    <div className={s.app}>
      <Header />
      <IngredientContext.Provider value={data}>
        <Main />
      </IngredientContext.Provider>
    </div>
  );
};
