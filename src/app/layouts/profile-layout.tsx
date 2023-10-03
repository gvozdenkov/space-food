import { ProfileMenu } from '#widgets/profile-menu';
import { Outlet } from 'react-router-dom';

import s from './profile-layout.module.scss';

export const ProfileLayout = () => {
  return (
    <div className={s['profile-layout']}>
      <ProfileMenu />

      <Outlet />
    </div>
  );
};
