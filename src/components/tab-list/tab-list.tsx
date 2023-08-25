import s from './tab-list.module.scss';
import { clx } from '#utils/clx';
import { Tab } from '#components/tab';
import { useState } from 'react';

type TabList = {
  tabs: string[];
  onTabClick?: () => void;
  extraClass?: string;
};

export const TabList = ({ tabs, onTabClick, extraClass = '' }: TabList) => {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const handleTabClick = (current: string, index: number) => {
    setCurrentTab(current);
    if (typeof onTabClick === 'function') {
      onTabClick();
    }
    // scrollToId(index);
    // console.log('click', index, current);
  };

  return (
    <ul className={clx(s.tabList, { [extraClass]: !!extraClass })}>
      {tabs.map((tab, index) => {
        return (
          <li key={index}>
            <Tab
              value={tab}
              active={currentTab === tab}
              onClick={(current) => handleTabClick(current, index)}>
              {tab}
            </Tab>
          </li>
        );
      })}
    </ul>
  );
};
