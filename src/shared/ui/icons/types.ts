import { ValueOf } from '#types/utils';
import { ICON_SIZE } from './constants';

export type IconName =
  | 'currency'
  | 'burger'
  | 'lock'
  | 'drag'
  | 'close'
  | 'check'
  | 'list'
  | 'profile'
  | 'edit'
  | 'info'
  | 'show'
  | 'hide'
  | 'logout'
  | 'delete'
  | 'arrowUp'
  | 'arrowDown'
  | 'menu';

export type IconType = 'primary' | 'secondary' | 'error' | 'success';
export type IconSize = keyof typeof ICON_SIZE;
export type IconSizeValue = ValueOf<typeof ICON_SIZE>;

export type IconProps = {
  type: IconType;
  size?: IconSize;
  onClick?: () => void;
};
