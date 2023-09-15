import { ComponentPropsWithoutRef } from 'react';
import { clx } from '#utils/clx';
import { Tab } from '#components/tab';
import s from './tab-list.module.scss';

type TabList = ComponentPropsWithoutRef<'ul'> & {
  tabs: {
    title: string;
    value: string;
  }[];
  activeTab: string;
  setActiveTab: (current: string) => void;
  onTabClick?: (id: number) => void;
  extraClass?: string;
};

export const TabList = ({
  tabs,
  activeTab,
  setActiveTab,
  onTabClick,
  extraClass = '',
}: TabList) => {
  const handleTabClick = (current: string, i: number) => {
    setActiveTab(current);

    if (typeof onTabClick === 'function') {
      onTabClick(i);
    }
  };

  return (
    <ul className={clx(s.tabList, { [extraClass]: !!extraClass })} role='tablist'>
      {tabs.map((tab, i) => {
        return (
          <li key={i} role='presentation'>
            <Tab
              value={tab.value}
              active={activeTab === tab.value}
              onClick={(current) => handleTabClick(current, i)}>
              {tab.title}
            </Tab>
          </li>
        );
      })}
    </ul>
  );
};
