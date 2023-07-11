import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import s from './tab-list.module.scss';
import clsx from 'clsx';
import { useTabContext } from '../../context/tab-context';
import { ingredientTabs } from '../../../../utils/config';
import { useTranslation } from 'react-i18next';

export const TabList = () => {
  const { tabs, scrollToId, currentTab, setCurrentTab } = useTabContext();
  const { t } = useTranslation();

  const handleTabClick = (current, index) => {
    setCurrentTab(current);
    scrollToId(index);
  };

  return (
    <ul className={clsx(s.tabList, 'mt-5 mb-10')}>
      {tabs.map((tab, index) => {
        return (
          <li key={index}>
            <Tab
              value={tab}
              active={currentTab === tab}
              onClick={(current) => handleTabClick(current, index)}>
              {t(ingredientTabs[tab])}
            </Tab>
          </li>
        );
      })}
    </ul>
  );
};
