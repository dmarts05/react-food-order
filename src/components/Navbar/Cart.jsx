import { FaShoppingCart } from 'react-icons/fa';

export default function Cart() {
  return (
    <div className='flex cursor-pointer select-none place-items-center justify-center gap-4 rounded-full bg-red-900 px-4 py-2'>
      <FaShoppingCart className='text-lg' />
      <span className='font-semibold'>Your Cart</span>
      <div className='w-6 rounded-full bg-red-700 text-center font-semibold'>
        0
      </div>
    </div>
  );
}
