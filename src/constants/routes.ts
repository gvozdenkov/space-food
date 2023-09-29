import { IconName } from '#shared/ui/icons/types';
import { RequireAtLeastOne } from '#types/utils';

export type NavItem = RequireAtLeastOne<
  {
    url: string;
    title?: string;
    icon?: IconName;
  },
  'title' | 'icon'
>;
