import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import s from './tab-list.module.scss';
import clsx from 'clsx';
import { useTabContext } from '../../utils/contexts/tab-context';

export const TabList = () => {
  const { tabs, scrollToId, currentTab, setCurrentTab } = useTabContext();

  const handleTabClick = (current, index) => {
    setCurrentTab(current);
    scrollToId(index);
  };

  return (
    <ul className={clsx(s.tabList, 'mt-5 mb-10')}>
      {tabs.map((ingredient, index) => {
        return (
          <li key={index}>
            <Tab
              value={ingredient.type}
              active={currentTab === ingredient.type}
              onClick={(current) => handleTabClick(current, index)}>
              {ingredient.text}
            </Tab>
          </li>
        );
      })}
    </ul>
  );
};
