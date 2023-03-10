import { FaShoppingCart } from 'react-icons/fa';
import { useContext, useState } from 'react';
import CartMealsContext from '../../store/cart-meals-context';
import CartModal from './CartModal';

export default function Cart() {
  const cartMealsCtx = useContext(CartMealsContext);

  const [showCartModal, setShowCartModal] = useState(false);

  const enableCartModalHandler = () => {
    setShowCartModal(true);
  };

  const disableCartModalHandler = () => {
    setShowCartModal(false);
  };

  const getAmountMealsCart = () =>
    cartMealsCtx.cartMeals.reduce(
      (amount, currentMeal) => amount + currentMeal.count,
      0
    );

  return (
    <>
      <div
        onClick={enableCartModalHandler}
        className='flex cursor-pointer select-none place-items-center justify-center gap-4 rounded-full bg-red-900 px-4 py-2 transition-colors duration-200 hover:bg-red-800'
      >
        <FaShoppingCart className='text-lg' />
        <span className='font-semibold'>Your Cart</span>
        <div className='w-10 rounded-full bg-red-700 text-center font-semibold'>
          {getAmountMealsCart()}
        </div>
      </div>
      {showCartModal && (
        <CartModal onDisableCartModal={disableCartModalHandler} />
      )}
    </>
  );
}
