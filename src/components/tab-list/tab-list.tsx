import { useState } from 'react';
import { ComponentPropsWithoutRef } from 'react';
import { clx } from '#utils/clx';
import { Tab } from '#components/tab';
import s from './tab-list.module.scss';

type TabList = ComponentPropsWithoutRef<'ul'> & {
  tabs: {
    title: string;
    type: string;
  }[];
  onTabClick?: () => void;
  extraClass?: string;
};

export const TabList = ({ tabs, onTabClick, extraClass = '' }: TabList) => {
  const [currentTab, setCurrentTab] = useState(tabs[0].type);

  const handleTabClick = (current: string, index: number) => {
    setCurrentTab(current);
    if (typeof onTabClick === 'function') {
      onTabClick();
    }
    // scrollToId(index);
    // console.log('click', index, current);
  };

  return (
    <ul className={clx(s.tabList, { [extraClass]: !!extraClass })} role='tablist'>
      {tabs.map((tab, i) => {
        return (
          <li key={i} role='presentation'>
            <Tab
              value={tab.type}
              active={currentTab === tab.type}
              onClick={(current) => handleTabClick(current, i)}>
              {tab.title}
            </Tab>
          </li>
        );
      })}
    </ul>
  );
};
