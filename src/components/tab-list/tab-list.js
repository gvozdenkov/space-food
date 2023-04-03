import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import s from './tab-list.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

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

TabList.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      text: PropTypes.string,
    })
  ).isRequired,
};
