import PropTypes from 'prop-types';

export const serverConfig = {
  baseUrl: `https://norma.nomoreparties.space/api`,
  headers: {
    authorization: '',
    'Content-Type': 'application/json',
  },
};

export const ingredientIds = {
  BUN: 'bun',
  MAIN: 'main',
  SAUCE: 'sauce',
};

export const orderDropTarget = {
  BUN: 'bunDropTarget',
  MIDDLE: 'middleDropTarget',
  DROP_ZONE: 'dropZone',
};

export const ingredientTabs = {
  [ingredientIds.BUN]: 'ingredient.type.bun',
  [ingredientIds.MAIN]: 'ingredient.type.main',
  [ingredientIds.SAUCE]: 'ingredient.type.sauce',
};

export const PATH = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  PROFILE: '/profile',
  ORDERS: 'orders',
  ORDER: 'order',
  ORDER_FEED: '/order-feed',
  INGREDIENTS: 'ingredients',
};

export const QUERYKEY = {
  INGREDIENTS: 'ingredients',
  USER: 'user',
};

export const COOKIE = {
  ACCESSTOKEN: 'accessToken',
  REFRESHTOKEN: 'refreshToken',
  RESET_PASSWORD: 'reset-password',
  ORDER_BUN: 'order-bun',
  ORDER_INGREDIENTS: 'order-ingredients',
};

export const menuItems = [
  {
    title: 'nav.item.home',
    icon: 'burger',
    url: PATH.HOME,
  },
  {
    title: 'nav.item.orderList',
    icon: 'list',
    url: '/order-feed',
  },
  {
    title: 'nav.item.profile',
    icon: 'profile',
    url: PATH.PROFILE,
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

export const orderStatusIds = {
  PENDING: 'pending',
  CANCELED: 'cancel',
  DONE: 'done',
};

export const orderStatusTitle = {
  [orderStatusIds.PENDING]: 'order.status.pending',
  [orderStatusIds.CANCELED]: 'order.status.canceled',
  [orderStatusIds.DONE]: 'order.status.done',
};
