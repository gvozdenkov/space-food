import { clx } from '#shared/lib';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
  extraClass?: string;
  dragAttributes?: any;
  dragListeners?: any;
};

export const Body = ({ extraClass = '', dragAttributes, dragListeners, children }: Props) => {
  return (
    <div {...dragAttributes} {...dragListeners} className={clx({ [extraClass]: !!extraClass })}>
      {children}
    </div>
  );
};
