import {
  CurrencyIcon,
  BurgerIcon,
  LockIcon,
  DragIcon,
  CloseIcon,
  CheckMarkIcon,
  ListIcon,
  ProfileIcon,
  EditIcon,
  InfoIcon,
  ShowIcon,
  HideIcon,
  LogoutIcon,
  DeleteIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  MenuIcon,
} from '#shared/ui/icons';

import { IconName, IconType } from '#shared/ui/icons/types';

const getIcon = (iconType: IconType) => (iconName: IconName) => {
  const icon = {
    currency: <CurrencyIcon type={iconType} />,
    burger: <BurgerIcon type={iconType} />,
    lock: <LockIcon type={iconType} />,
    drag: <DragIcon type={iconType} />,
    close: <CloseIcon type={iconType} />,
    check: <CheckMarkIcon type={iconType} />,
    list: <ListIcon type={iconType} />,
    profile: <ProfileIcon type={iconType} />,
    edit: <EditIcon type={iconType} />,
    info: <InfoIcon type={iconType} />,
    show: <ShowIcon type={iconType} />,
    hide: <HideIcon type={iconType} />,
    logout: <LogoutIcon type={iconType} />,
    delete: <DeleteIcon type={iconType} />,
    arrowUp: <ArrowUpIcon type={iconType} />,
    arrowDown: <ArrowDownIcon type={iconType} />,
    menu: <MenuIcon type={iconType} />,
  };

  return icon[iconName];
};

export const primaryIcon = getIcon('primary');
export const secondaryIcon = getIcon('secondary');
export const errorIcon = getIcon('error');
export const successIcon = getIcon('success');
