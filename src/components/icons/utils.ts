import { IconType } from './types';

export const getIconColor = (type: IconType) => {
  return `${
    type === 'secondary'
      ? '#8585AD'
      : type === 'error'
      ? '#E52B1A'
      : type === 'success'
      ? '#00CCCC'
      : '#F2F2F3'
  }`;
};
