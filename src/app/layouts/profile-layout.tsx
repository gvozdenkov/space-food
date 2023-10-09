import { ProfileMenu } from '#widgets/profile-menu';
import { Outlet } from 'react-router-dom';

import s from './profile-layout.module.scss';
import { OnlyAuth } from '#entities/session';

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
