import { useTranslation } from 'react-i18next';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { restrictToVerticalAxis, restrictToParentElement } from '@dnd-kit/modifiers';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { selectCartBun, selectCartIngredients } from '#entities/cart';
import { useAppSelector } from '#shared/model/hooks';
import { ConstructorElement, EmptyConstructorElement } from '#shared/ui';
import { clx } from '#shared/lib';
import { useBurger } from './model/use-burger';
import { useBurgerDnD } from './model/use-burger-dnd';
import { BurgerSortableItem } from './burger-sortable-item/burger-sortable-item';

import s from './burger.module.scss';

type Props = {
  extraClass?: string;
};

export const Burger = ({ extraClass = '' }: Props) => {
  const { t } = useTranslation();
  const bun = useAppSelector(selectCartBun);
  const ingredients = useAppSelector(selectCartIngredients);

  const { removeElementFromBurger } = useBurger();

  const isIngredientsAdded = ingredients.length !== 0;

  const { droppableRef, bunStyle, middleStyle, sortableItems, handleDragEnd, sensors } =
    useBurgerDnD();

  type Bun = {
    type: 'top' | 'bottom';
  };

  const Bun = ({ type }: Bun) => {
    return bun ? (
      <ConstructorElement
        price={bun.price}
        text={bun.name + `\n(${t(`burgerConstructor.burger.bunPosition.${type}`)})`}
        thumbnail={bun.image_mobile}
        isLocked
        type={type}
      />
    ) : (
      <EmptyConstructorElement type={type} text={t('burgerConstructor.burger.emptyBun')} />
    );
  };

  return (
    <ul ref={droppableRef} className={clx(s['burger-list'], { [extraClass]: !!extraClass })}>
      <li style={bunStyle} className={s.burger__bun} key='top_bun'>
        <Bun type='top' />
      </li>

      <li
        style={middleStyle}
        className={clx(s.burger__middle, 'customScroll')}
        key='middle_ingredients'>
        {isIngredientsAdded ? (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis, restrictToParentElement]}>
            <SortableContext items={sortableItems} strategy={verticalListSortingStrategy}>
              <ul className={s['burger-list']}>
                {ingredients.map((item) => {
                  const ingredient = item.ingredient;

                  return (
                    <BurgerSortableItem
                      text={ingredient.name}
                      price={ingredient.price}
                      thumbnail={ingredient.image_mobile}
                      uuid={item.uuid}
                      key={item.uuid}
                      handleDelete={() => removeElementFromBurger(item.uuid)}
                    />
                  );
                })}
              </ul>
            </SortableContext>
          </DndContext>
        ) : (
          <EmptyConstructorElement
            text={t('burgerConstructor.burger.emptyMain')}
            extraClass='ml-8'
          />
        )}
      </li>

      <li style={bunStyle} className={s.burger__bun} key='bottom_bun'>
        <Bun type='bottom' />
      </li>
    </ul>
  );
};
