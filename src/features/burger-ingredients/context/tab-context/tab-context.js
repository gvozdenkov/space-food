import { createContext, useCallback, useContext, useRef, useState } from 'react';
import { ingredientTabs } from '../../../../utils/config';

const TabContext = createContext();

export const useTabContext = () => {
  const context = useContext(TabContext);

  if (context === undefined) {
    throw new Error('You try to use useTabContext outside of its provider!');
  }

  return context;
};

export const TabContextProvider = ({ children }) => {
  const categorysRef = useRef(null);

  const tabs = Object.keys(ingredientTabs);
  const defaultTab = Object.keys(ingredientTabs)[0];
  const [currentTab, setCurrentTab] = useState(defaultTab);

  const scrollToId = useCallback((_itemId) => {
    const refs = getRefs();
    const node = refs.get(_itemId);
    node.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'center',
    });
  }, []);

  const getRefs = () => {
    if (!categorysRef.current) {
      // Initialize the Map on first usage.
      categorysRef.current = new Map();
    }
    return categorysRef.current;
  };

  return (
    <TabContext.Provider value={{ scrollToId, getRefs, tabs, currentTab, setCurrentTab }}>
      {children}
    </TabContext.Provider>
  );
};
