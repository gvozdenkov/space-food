export const orderStatus = {
  PENDING: 'pending',
  CANCELED: 'cancel',
  DONE: 'done',
} as const;

export type OrderStatus = 'pending' | 'cancel' | 'done';
