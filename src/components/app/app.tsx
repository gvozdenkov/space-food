import s from './app.module.css';
import { AppHeader } from '../app-header';
import { Main } from '../main';
import { useIngredients } from '../../utils/hooks/useIngredients';
import { Modal } from '../modal';
import { OrderDetails } from '../order-details';
import { IngredientDetails } from '../IngredientDetails';

export const App = () => {
  const { data, error, loading } = useIngredients();

  const ingredient = {
    _id: '60666c42cc7b410027a1a9b6',
    name: 'Биокотлета из марсианской Магнолии',
    type: 'main',
    proteins: 420,
    fat: 142,
    carbohydrates: 242,
    calories: 4242,
    price: 424,
    image: 'https://code.s3.yandex.net/react/code/meat-01.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png',
    __v: 0,
  };

  return (
    <div className={s.app}>
      <AppHeader />
      <Main ingredients={data} />
      <Modal open={false}>
        <OrderDetails orderNumber={345436} />
      </Modal>
      <Modal title="Детали ингредиента" open={true}>
        <IngredientDetails ingredient={ingredient} />
      </Modal>
    </div>
  );
};
