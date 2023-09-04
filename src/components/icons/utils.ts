import { ICON_SIZE } from './constants';
import { IconSize, IconType } from './types';

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

export const getIconSize = (size: IconSize) => {
  return ICON_SIZE[size];
};
