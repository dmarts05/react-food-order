import { useContext } from 'react';
import CartMealsContext from '../../store/cart-meals-context';

export default function ModalMeal(props) {
  const cartMealsCtx = useContext(CartMealsContext);

  return (
    <div className='flex items-center justify-between border-b-2 border-b-zinc-200 pb-3'>
      <div className='flex flex-col justify-center gap-3'>
        <h2 className='col-span-2 text-lg font-semibold'>{props.title}</h2>
        <div className='flex items-center gap-3'>
          <span className='font-semibold text-red-900'>${props.price}</span>
          <span className='w-fit rounded-md border-2 border-zinc-200 px-2'>
            x {props.amount}
          </span>
        </div>
      </div>
      <div className='grid place-content-center gap-3 sm:grid-flow-col'>
        <button
          onClick={() => {
            cartMealsCtx.onRemoveMeal(props.id, 1);
          }}
          className='rounded-md border-2 border-red-900 px-4 font-semibold text-red-900 transition-colors duration-200 hover:bg-red-900 hover:text-white'
        >
          -
        </button>
        <button
          onClick={() => {
            cartMealsCtx.onAddMeal(props.id, 1);
          }}
          className='rounded-md border-2 border-red-900 px-4 font-semibold text-red-900 transition-colors duration-200 hover:bg-red-900 hover:text-white'
        >
          +
        </button>
      </div>
    </div>
  );
}
