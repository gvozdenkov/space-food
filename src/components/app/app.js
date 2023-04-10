import s from './app.module.scss';
import { Header } from '../header';
import { Main } from '../main';
import { useIngredients } from '../../utils/hooks/useIngredients';
import { IngredientContext } from '../../utils/contexts/ingredientsContext';
import { Modal } from '../modal';
import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { withLoading } from '../../utils/hoc/withLoading';
import { BurgerConstructorContext } from '../../utils/contexts/burgerConstructorContext';

export const App = () => {
  const { data, error, loading } = useIngredients();
  const [isOpen, setIsOpen] = useState(false);
  const [burgerConstructorItems, setBurgerConstructorItems] = useState([
    {
      _id: '60666c42cc7b410027a1a9b1',
      name: 'Краторная булка N-200i',
      type: 'bun',
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 1255,
      image: 'https://code.s3.yandex.net/react/code/bun-02.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
      __v: 0,
    },
    {
      _id: '60666c42cc7b410027a1a9b5',
      name: 'Говяжий метеорит (отбивная)',
      type: 'main',
      proteins: 800,
      fat: 800,
      carbohydrates: 300,
      calories: 2674,
      price: 3000,
      image: 'https://code.s3.yandex.net/react/code/meat-04.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/meat-04-large.png',
      __v: 0,
    },
    {
      _id: '60666c42cc7b410027a1a9b1',
      name: 'Краторная булка N-200i',
      type: 'bun',
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 1255,
      image: 'https://code.s3.yandex.net/react/code/bun-02.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
      __v: 0,
    },
  ]);
  const intl = useIntl();
  const MainWithLoading = withLoading(Main);

  useEffect(() => {
    if (error) setIsOpen(true);
  }, [error]);

  return (
    <div className={s.app}>
      <Header />
      <BurgerConstructorContext.Provider
        value={{ burgerConstructorItems, setBurgerConstructorItems }}>
        <IngredientContext.Provider value={data}>
          <MainWithLoading
            isLoading={loading}
            text={intl.formatMessage({ id: 'loading.subTitle' })}
          />
        </IngredientContext.Provider>
      </BurgerConstructorContext.Provider>

      <Modal
        title={intl.formatMessage({ id: 'popup.error.ingrdientsLoading.title' })}
        open={isOpen}
        setOpen={setIsOpen}>
        <p className='text text_type_main-medium mt-8'>
          {intl.formatMessage({ id: 'popup.error.ingrdientsLoading.message' })}
        </p>
      </Modal>
    </div>
  );
};
