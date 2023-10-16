import { clx } from '#shared/lib';
import { Link } from 'react-router-dom';

import s from './text-with-link.module.scss';

type Props = {
  text: string;
  link: string;
  linkText: string;
  extraClass?: string;
};
export const TextWithLink = ({ text, link, linkText, extraClass = '' }: Props) => {
  return (
    <p
      className={clx(
        'text text_type_main-default text_color_inactive',
        s['text-with-link'],

        {
          [extraClass]: !!extraClass,
        },
      )}>
      {text}&nbsp;
      <Link to={link} className={clx('reset-link', s['text-with-link__link'])}>
        {linkText}
      </Link>
    </p>
  );
};
