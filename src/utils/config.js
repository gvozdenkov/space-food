import PropTypes from 'prop-types';

export const serverConfig = {
  baseUrl: `https://norma.nomoreparties.space/api`,
  headers: {
    authorization: '',
    'Content-Type': 'application/json',
  },
};

export const ingredientTypes = [
  { type: 'bun', text: 'ingredient.type.bun' },
  { type: 'main', text: 'ingredient.type.main' },
  { type: 'sauce', text: 'ingredient.type.sauce' },
];

export const menuItems = [
  {
    title: 'nav.item.constructor',
    icon: 'burger',
    url: '/',
  },
  {
    title: 'nav.item.orderList',
    icon: 'list',
    url: '/order-list',
  },
  {
    title: 'nav.item.profile',
    icon: 'profile',
    url: '/profile',
    mobileSubmenu: [
      {
        title: 'nav.item.profile.profile',
        url: 'profile',
      },
      {
        title: 'nav.item.profile.history',
        url: 'order-history',
      },
      {
        title: 'nav.item.profile.logout',
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
