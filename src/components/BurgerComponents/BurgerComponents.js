import { BurgerComponent } from '../BurgerComponent/BurgerComponent';
import './BurgerComponents.css';

export const BurgerComponents = (props) => {
  return (
    <div className="BurgerComponents">
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
