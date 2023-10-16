import { Outlet } from 'react-router-dom';

import { ProfileMenu } from '#widgets/profile-menu';
import { OnlyAuth } from '#entities/session';

import s from './profile-layout.module.scss';

export const ProfileLayout = () => {
  return (
    <OnlyAuth>
      <div className={s['profile-layout']}>
        <ProfileMenu />

        <Outlet />
      </div>
    </OnlyAuth>
  );
};
