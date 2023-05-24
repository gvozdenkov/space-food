import s from './profile.module.scss';
import clsx from 'clsx';
export const Profile = () => {
  return (
    <div className={clsx(s.profile)}>
      <h1>Profile</h1>
    </div>
  );
};
