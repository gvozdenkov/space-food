export const orderStatus = {
  PENDING: 'pending',
  CANCELED: 'cancel',
  DONE: 'done',
} as const;

export type OrderStatus = 'pending' | 'cancel' | 'done';

export const orderDropTarget = {
  BUN: 'bunDropTarget',
  MIDDLE: 'middleDropTarget',
  DROP_ZONE: 'dropZone',
};

export const ingredientIds = {
  BUN: 'bun',
  MAIN: 'main',
  SAUCE: 'sauce',
};
