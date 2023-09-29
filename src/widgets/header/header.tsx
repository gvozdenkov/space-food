import { HeaderLayout } from '#shared/ui';
import { Logo } from './ui/logo/logo';
import { Nav } from './ui/nav';
import { Profile } from './ui/profile/profile';

export const Header = () => {
  return <HeaderLayout leftSlot={<Nav />} centerSlot={<Logo />} rightSlot={<Profile />} />;
};
