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

export type IconProps = { type: IconType; onClick?: () => void };
