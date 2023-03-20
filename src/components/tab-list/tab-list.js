import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import s from './tab-list.module.css';
import clsx from 'clsx';

export const TabList = ({ tabs }) => {
  const defaultTab = tabs[0]['type'];

  const [current, setCurrent] = useState(defaultTab);

  return (
    <div className={clsx(s.tabList, 'mt-5')}>
      {tabs.map((ingredient, index) => {
        return (
          <Tab
            key={index}
            value={ingredient.type}
            active={current === ingredient.type}
            onClick={setCurrent}
          >
            {ingredient.text}
          </Tab>
        );
      })}
    </div>
  );
};
