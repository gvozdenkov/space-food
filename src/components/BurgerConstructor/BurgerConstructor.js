import { BurgerComponents } from '../BurgerComponents/BurgerComponents';
import { BurgerConstructorTotal } from '../BurgerConstructorTotal/BurgerConstructorTotal';
import './BurgerConstructor.css';

export const BurgerConstructor = (props) => {
  return (
    <section className="BurgerConstructor pt-25">
      <BurgerComponents />
      <BurgerConstructorTotal />
    </section>
  );
};
