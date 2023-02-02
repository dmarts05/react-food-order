import Card from '../UI/Card';
import foodImg from '../../assets/food.webp';

export default function Hero() {
  return (
    <header className='flex items-center justify-center'>
      <img
        src={foodImg}
        className='pointer-events-none h-96 w-full select-none object-cover brightness-90 filter'
      />
      <Card
        className='absolute flex w-2/3 flex-col gap-3 text-center'
        dark={true}
      >
        <h2 className='text-2xl font-semibold'>
          Delicious Food, Delivered To You
        </h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home
        </p>
        <p>
          All our meals are cooked with igh-quality ingredients, just-in.time
          and of course by experienced chefs!
        </p>
      </Card>
    </header>
  );
}
