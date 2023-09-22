import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IngrediensByTypes, useGetIngredientsQuery } from '..';
import { INGREDIENT_TYPES } from '#constants/ingredients';
import { debounce } from '#utils/debounce';

export const useBurgerIngredients = () => {
  const { t } = useTranslation();

  const { data } = useGetIngredientsQuery();
  const { ingredientsArray } = data!;

  const ingredients: IngrediensByTypes[] = useMemo(
    () =>
      INGREDIENT_TYPES.map((type) => ({
        type: type,
        title: t(`ingredient.type.${type}`),
        ingredientIds: ingredientsArray.reduce<string[]>((arr, ingredient) => {
          if (ingredient.type === type) arr.push(ingredient._id);
          return arr;
        }, []),
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ingredientsArray],
  );

  const tabs = useMemo(
    () =>
      INGREDIENT_TYPES.map((type) => ({
        value: type,
        title: t(`ingredient.type.${type}`),
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  function getTitleNodes() {
    if (IngredientTypeListRef.current) {
      const listNode = IngredientTypeListRef.current;
      const titleNodes = listNode.querySelectorAll('li > h2');
      return titleNodes;
    }

    return [];
  }

  const [activeTab, setActiveTab] = useState<string>(tabs[0].value);
  const [observe, setObserve] = useState(false);

  const IngredientTypeListRef = useRef<HTMLUListElement>(null);

  // Create & assign Intersection Observer to titles
  useEffect(() => {
    const scrollContainer = IngredientTypeListRef.current!;

    const enableObservOnScroll = debounce(() => setObserve(true), 250);

    scrollContainer.addEventListener('scroll', enableObservOnScroll);

    const setActiveTabCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entrie) => {
        // set active Tab only when manual scrolling (not by Tab click)
        if (entrie.isIntersecting && observe) {
          setActiveTab(entrie.target.id);
        }
      });
    };

    const IngredientTypeListObserver = new IntersectionObserver(setActiveTabCallback, {
      threshold: 0.5,
      rootMargin: '0px 0px -60% 0px',
    });

    const ingredientTypeLiNodes = getTitleNodes();
    ingredientTypeLiNodes.forEach((node) => IngredientTypeListObserver.observe(node));

    return () => {
      scrollContainer?.removeEventListener('scroll', enableObservOnScroll);
      ingredientTypeLiNodes.forEach((node) => IngredientTypeListObserver.unobserve(node));
    };
  }, [observe]);

  const scrollToIndex = (index: number) => {
    const titleNodes = getTitleNodes();
    const titleNode = titleNodes[index];

    // disable observe when scroll by clicking Tab button
    // This prevent flash Tab active when switch first and last Tab
    setObserve(false);

    titleNode.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'center',
    });
  };

  return { tabs, activeTab, setActiveTab, ingredients, scrollToIndex, IngredientTypeListRef };
};
