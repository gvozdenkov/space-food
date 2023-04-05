import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import s from './tab-list.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export const TabList = ({ tabs }) => {
  const defaultTab = tabs[0]['type'];

  const [current, setCurrent] = useState(defaultTab);

  const handleTabClick = (current) => {
    setCurrent(current);
    const linkEl = document.querySelector(`#${current}-tab`);
    window.location.href = linkEl.href;
  };

  return (
    <ul className={clsx(s.tabList, 'mt-5 mb-10')}>
      {tabs.map((ingredient, index) => {
        return (
          <li key={index}>
            <a href={`#${ingredient.type}-category`} id={`${ingredient.type}-tab`} className='reset-link'>
              <Tab
                value={ingredient.type}
                active={current === ingredient.type}
                onClick={(current) => handleTabClick(current)}>
                {ingredient.text}
              </Tab>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

TabList.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};
