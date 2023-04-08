// import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
// import clsx from 'clsx';
// import { useContext, useState } from 'react';
// import s from './ingredient-card.module.scss';
// import { Modal } from '../modal';
// import { IngredientDetails } from '../IngredientDetails';
// import { useIntl } from 'react-intl';
// import { IngredientContext } from '../../utils/contexts/ingredientsContext';
// import { findBy } from '../../utils/utils';
// import PropTypes from 'prop-types';
// import { IngredientSelectedContext } from '../../utils/contexts/IngredientSelectedContext';

// const IngredientCard = ({ _id, image, info }) => {
//   const intl = useIntl();
//   const selected = useContext(IngredientSelectedContext);
//   const ingredients = useContext(IngredientContext);
//   const [isOpen, setIsOpen] = useState(false);

//   const findIngredientById = findBy(ingredients, '_id');

//   const handleIngredientCardClick = (id) => {
//     const selectedIngredient = findIngredientById(id);
//     selected.setIngredient(selectedIngredient);
//     setIsOpen(true);
//   };

//   return (
//     <>
//       <article className={s.ingredientItem} onClick={() => handleIngredientCardClick(_id)}>
//         {true && <Counter count={2} size='default' extraClass={clsx(s.ingredientItem__counter)} />}
//         {image}
//         {info}
//       </article>

//       <Modal
//         title={intl.formatMessage({ id: 'ingredients.detail.popup.title' })}
//         open={isOpen}
//         setOpen={setIsOpen}>
//         <IngredientDetails ingredient={selected.ingredient} />
//       </Modal>
//     </>
//   );
// };

// IngredientCard.propTypes = {
//   _id: PropTypes.string.isRequired,
//   image: PropTypes.element,
//   price: PropTypes.element,
// };
