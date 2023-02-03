import { useContext } from 'react';
import { createPortal } from 'react-dom';
import CartMealsContext from '../../store/cart-meals-context';
import Card from '../UI/Card';
import ModalMeal from './ModalMeal';

const Backdrop = props => {
  return (
    <div
      onClick={props.onDisableCartModal}
      className='fixed inset-0 z-10 h-full w-full bg-zinc-800 opacity-90'
    ></div>
  );
};

const ModalOverlay = props => {
  const cartMealsCtx = useContext(CartMealsContext);

  const getTotalPriceCart = () =>
    cartMealsCtx.cartMeals
      .reduce(
        (accumulator, currentMeal) =>
          currentMeal.price * currentMeal.count + accumulator,
        0
      )
      .toFixed(2);

  const orderMealsHandler = () => {
    cartMealsCtx.onOrderMeals();
    props.onDisableCartModal();
  };

  return (
    <Card className='fixed inset-1/4 z-20 flex h-fit w-1/2 flex-col gap-3 text-black'>
      {cartMealsCtx.cartMeals.map(meal => (
        <ModalMeal
          key={meal.id}
          id={meal.id}
          title={meal.title}
          price={meal.price}
          amount={meal.count}
        />
      ))}
      <div className='flex items-center justify-between text-xl font-semibold'>
        <h2>Total Price</h2>
        <h2>${getTotalPriceCart()}</h2>
      </div>
      <div
        onClick={props.onDisableCartModal}
        className='flex flex-wrap items-center justify-end gap-3'
      >
        <button className='select-none rounded-full border-2 border-red-900 bg-white px-6 py-1 font-semibold text-red-900 transition-colors duration-200 hover:bg-red-900 hover:text-white'>
          Close
        </button>
        <button
          onClick={orderMealsHandler}
          className='select-none rounded-full border-2 border-red-900 bg-red-900 px-6 py-1 font-semibold text-white transition-colors duration-200 hover:border-red-800 hover:bg-red-800'
        >
          Order
        </button>
      </div>
    </Card>
  );
};

export default function CartModal(props) {
  return (
    <>
      {createPortal(
        <Backdrop onDisableCartModal={props.onDisableCartModal} />,
        document.getElementById('backdrop-root')
      )}
      {createPortal(
        <ModalOverlay onDisableCartModal={props.onDisableCartModal} />,
        document.getElementById('overlay-root')
      )}
    </>
  );
}
