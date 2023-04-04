import PropTypes from 'prop-types';

export const serverConfig = {
  baseUrl: `https://norma.nomoreparties.space/api`,
  headers: {
    authorization: '',
    'Content-Type': 'application/json',
  },
};

export const ingredientTypes = [
  { type: 'bun', text: 'Булки' },
  { type: 'main', text: 'Начинки' },
  { type: 'sauce', text: 'Соусы' },
];

export const menuItems = [
  {
    title: 'Конструктор',
    icon: 'burger',
    url: '/',
  },
  {
    title: 'Лента заказов',
    icon: 'list',
    url: '/order-list',
  },
  {
    title: 'Личный кабинет',
    icon: 'profile',
    url: '/profile',
    mobileSubmenu: [
      {
        title: 'Профиль',
        url: 'profile',
      },
      {
        title: 'История заказов',
        url: 'order-history',
      },
      {
        title: 'Выход',
        url: 'logout',
      },
    ],
  },
];

export const ingredientPropTypes = PropTypes.shape({
  _id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string,
  __v: PropTypes.number,
});

export const MODAL_PORTAL_EL = document.querySelector('#modal-portal');
