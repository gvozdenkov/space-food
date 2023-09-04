import { clx } from '#utils/clx';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
  extraClass?: string;
};

export const Footer = ({ extraClass = '', children }: Props) => {
  return <footer className={clx({ [extraClass]: !!extraClass })}>{children}</footer>;
};
