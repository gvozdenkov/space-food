import { BurgerComponent } from '../burger-component';
import s from './burger-components.module.css';

export const BurgerComponents = (props) => {
  return (
    <div className={s.burgerComponents}>
      <BurgerComponent
        withDrag={false}
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail={'https://code.s3.yandex.net/react/code/meat-04.png'}
      />
      <BurgerComponent
        withDrag={true}
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail={'https://code.s3.yandex.net/react/code/meat-04.png'}
      />
      <BurgerComponent
        withDrag={false}
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail={'https://code.s3.yandex.net/react/code/meat-04.png'}
      />
    </div>
  );
};
