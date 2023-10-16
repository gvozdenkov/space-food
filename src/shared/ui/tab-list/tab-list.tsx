import { ComponentPropsWithoutRef, MouseEvent } from 'react';
import { clx } from '#shared/lib';
import { Tab } from '#shared/ui/tab';
import s from './tab-list.module.scss';

type TabList = ComponentPropsWithoutRef<'ul'> & {
  tabs: {
    title: string;
    value: string;
  }[];
  activeTab: string;
  setActiveTab: (current: string) => void;
  onTabClick?: (id: string) => void;
  extraClass?: string;
};

export const TabList = ({
  tabs,
  activeTab,
  setActiveTab,
  onTabClick,
  extraClass = '',
}: TabList) => {
  const handleTabClick = (event: MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = event.currentTarget;
    setActiveTab(button.name);

    if (typeof onTabClick === 'function') {
      onTabClick(button.name);
    }
  };

  return (
    <ul className={clx(s.tabList, { [extraClass]: !!extraClass })} role='tablist'>
      {tabs.map((tab, i) => {
        return (
          <li key={i} role='presentation'>
            <Tab value={tab.value} active={activeTab === tab.value} onClick={handleTabClick}>
              {tab.title}
            </Tab>
          </li>
        );
      })}
    </ul>
  );
};
