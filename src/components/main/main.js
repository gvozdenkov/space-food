import s from './main.module.scss';
import { BurgerConstructor } from '../burger-constructor';
import { BurgerIngredients } from '../burger-ingredients';
import { useState } from 'react';
import { IngredientSelectedContext } from '../../utils/contexts/IngredientSelectedContext';
import { Modal } from '../modal';
import { useIntl } from 'react-intl';
import { IngredientDetails } from '../IngredientDetails';

export const Main = () => {
  const intl = useIntl();
  const [isOpen, setIsOpen] = useState(false);

  const [selectedIngredient, setSelectedIngredient] = useState({});

  return (
    <IngredientSelectedContext.Provider
      value={{ isOpen, setIsOpen, selectedIngredient, setSelectedIngredient }}>
      <main className={s.main}>
        <BurgerIngredients />
        <BurgerConstructor />

        <Modal
          title={intl.formatMessage({ id: 'ingredients.detail.popup.title' })}
          open={isOpen}
          setOpen={setIsOpen}>
          <IngredientDetails ingredient={selectedIngredient} />
        </Modal>
      </main>
    </IngredientSelectedContext.Provider>
  );
};
