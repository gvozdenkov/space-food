import { IconProps } from '../types';
import { getIconSize } from '../utils';
import { Icon } from './icon';

export const MenuIcon = (props: IconProps) => {
  const { size = 'default' } = props;
  const width = getIconSize(size);

  return (
    <Icon {...props}>
      <rect x='3' y='6' width={width} height='2' rx='1' />
      <rect x='3' y='11' width={width} height='2' rx='1' />
      <rect x='3' y='16' width={width} height='2' rx='1' />
    </Icon>
  );
};
