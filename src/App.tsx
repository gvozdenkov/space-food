import s from './App.module.css';
import { AppHeader } from './components/AppHeader/AppHeader';
import { Main } from './components/Main/Main';
import { burgerIngredientsData } from './utils/data';

function App() {
  const data = burgerIngredientsData;

  return (
    <div className={s.App}>
      <AppHeader />
      <Main />
    </div>
  );
}

export default App;
