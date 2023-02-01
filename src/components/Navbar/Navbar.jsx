import Cart from './Cart';

export default function Navbar() {
  return (
    <nav className='flex h-20 flex-wrap content-center justify-between bg-red-700 px-4 shadow-md sm:px-8'>
      <h1 className='self-center text-2xl font-semibold sm:text-3xl'>
        ReactMeals
      </h1>
      <Cart />
    </nav>
  );
}
