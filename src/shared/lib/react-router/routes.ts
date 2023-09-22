export const ROUTE = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  PROFILE: {
    root: '/profile',
    orders: 'profile/orders',
  },
  ORDER: 'order',
  FEED: '/feed',
  INGREDIENTS: 'ingredients',
} as const;
