import { PropsWithChildren } from 'react';
import { IconProps } from '../types';
import { getIconColor, getIconSize } from '../utils';

type Props = PropsWithChildren<IconProps>;

export const Icon = ({ type, size = 'default', onClick, children }: Props) => {
  const width = getIconSize(size);
  const height = getIconSize(size);

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={`0 0 24 24`}
      fill={getIconColor(type)}
      onClick={onClick}>
      {children}
    </svg>
  );
};
