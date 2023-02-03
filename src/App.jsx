import { CartMealsContextProvider } from './store/cart-meals-context';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import MealsList from './components/MealsList/MealsList';

export default function App() {
  return (
    <div className='flex flex-col'>
      <CartMealsContextProvider>
        <Navbar />
        <Hero />
        <MealsList />
      </CartMealsContextProvider>
    </div>
  );
}
