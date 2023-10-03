import { useTranslation } from 'react-i18next';
import { selectCartBun, selectCartIngredients } from '#entities/cart';
import { useAppSelector } from '#shared/model/hooks';
import { ConstructorElement, EmptyConstructorElement } from '#shared/ui';
import { DragIcon } from '#shared/ui/icons';
import { clx } from '#shared/lib';

import s from './burger.module.scss';
import { useBurger } from './model/use-burger';

type Props = {
  extraClass?: string;
};

export const Burger = ({ extraClass = '' }: Props) => {
  const { t } = useTranslation();
  const bun = useAppSelector(selectCartBun);
  const ingredients = useAppSelector(selectCartIngredients);

  const { removeElementFromBurger } = useBurger();

  const isIngredientsAdded = ingredients.length !== 0;

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
    <ul className={clx(s['burger-list'], { [extraClass]: !!extraClass })}>
      <li className={s.burger__bun} key='top_bun'>
        <Bun type='top' />
      </li>

      <li className={clx(s.burger__middle, 'customScroll')} key='middle_ingredients'>
        {isIngredientsAdded ? (
          <ul className={s['burger-list']}>
            {ingredients.map((item) => {
              const ingredient = item.ingredient;

              return (
                <li className={clx(s.withDrag)} key={item.uuid}>
                  <div className={clx(s.drag)}>{<DragIcon type='primary' />}</div>
                  <ConstructorElement
                    price={ingredient.price}
                    text={ingredient.name}
                    thumbnail={ingredient.image_mobile}
                    handleDelete={() => removeElementFromBurger(item.uuid)}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <EmptyConstructorElement
            text={t('burgerConstructor.burger.emptyMain')}
            extraClass='ml-8'
          />
        )}
      </li>

      <li className={s.burger__bun} key='bottom_bun'>
        <Bun type='bottom' />
      </li>
    </ul>
  );
};
