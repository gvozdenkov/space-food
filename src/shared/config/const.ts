export const orderStatus = {
  PENDING: 'pending',
  CANCELED: 'cancel',
  DONE: 'done',
} as const;

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

export const INGREDIENT_TYPES = ['bun', 'main', 'sauce'] as const;

export const MODAL_PORTAL_EL = document.querySelector('#modal-portal');
