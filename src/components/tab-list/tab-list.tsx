import { useState } from 'react';
import { ComponentPropsWithoutRef } from 'react';
import { clx } from '#utils/clx';
import { Tab } from '#components/tab';
import s from './tab-list.module.scss';

type TabList = ComponentPropsWithoutRef<'ul'> & {
  tabs: { [key: string]: string };
  onTabClick?: () => void;
  extraClass?: string;
};

export const TabList = ({ tabs, onTabClick, extraClass = '' }: TabList) => {
  const tabNames = Object.keys(tabs);
  const tabValues = Object.values(tabs).map((val) => val);

  const [currentTab, setCurrentTab] = useState(tabValues[0]);

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
      {tabValues.map((tabValue, i) => {
        return (
          <li key={i} role='presentation'>
            <Tab
              value={tabValue}
              active={currentTab === tabValue}
              onClick={(current) => handleTabClick(current, i)}>
              {tabNames[i]}
            </Tab>
          </li>
        );
      })}
    </ul>
  );
};
