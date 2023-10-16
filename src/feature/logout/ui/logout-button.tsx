import { clx } from '#shared/lib';

import s from './logout-button.module.scss';

export const LogoutButton = ({ title }: { title: string }) => {
  return (
    <button type='submit' className={clx(s['logout-btn'], 'text text_type_main-medium')}>
      {title}
    </button>
  );
};
