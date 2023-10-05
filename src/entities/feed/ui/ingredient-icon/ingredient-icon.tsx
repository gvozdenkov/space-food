import { clx } from '#shared/lib';

import s from './ingredient-icon.module.scss';

type Props = {
  img: string;
  hideCount?: number;
};

export const IngredientIcon = ({ img, hideCount = 0 }: Props) => {
  return hideCount === 0 ? (
    <div className={s.ingredientIcon}>
      <img src={img} alt='' className={clx(s.ingredientIcon__icon)} />
    </div>
  ) : (
    <div className={clx(s.ingredientIcon)}>
      <span className={clx('text text_type_main-default', s.ingredientIcon__hideCount)}>
        +{hideCount}
      </span>
      <img src={img} alt='' className={clx(s.ingredientIcon__icon_type_end)} />
    </div>
  );
};
