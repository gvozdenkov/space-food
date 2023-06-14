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

export const PATH = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  PROFILE: '/profile',
  ORDERS: 'orders',
  ORDER_FEED: '/order-feed',
};

export const menuItems = [
  {
    title: 'nav.item.constructor',
    icon: 'burger',
    url: PATH.HOME,
  },
  {
    title: 'nav.item.orderList',
    icon: 'list',
    url: '/order-list',
  },
  {
    title: 'nav.item.profile',
    icon: 'profile',
    url: PATH.PROFILE,
    mobileSubmenu: [
      {
        title: 'nav.item.profile.profile',
        url: 'profile',
      },
      {
        title: 'nav.item.profile.history',
        url: 'order-history',
      },
    ],
  },
];

export const profileMenuItems = [
  {
    title: 'profile.menu.profile',
    to: PATH.PROFILE,
  },
  {
    title: 'profile.menu.orders',
    to: '/profile/orders',
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

export const LOCAL_STORAGE = {
  CONSTRUCTOR_BUN: 'constructortBun',
  CONSTRUCTOR_INGREDIENTS: 'constructorIngredients',
  USER: 'user',
};

export const DragTypes = {
  INGREDIENT: 'ingredient',
  CONSTRUCTOR_INGREDIENT: 'constructorIngredient',
};

export const JWT = {
  REFRESH: 'refresh-token',
};
