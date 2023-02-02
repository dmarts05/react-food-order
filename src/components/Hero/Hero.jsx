import foodImg from '../../assets/food.webp';

export default function Hero() {
  return (
    <header>
      <div className='absolute top-[13rem] h-0 w-0 border-b-[8rem] border-l-[100vw] border-transparent border-b-zinc-800' />
      <img
        src={foodImg}
        className='absolute -z-10 h-64 w-full object-cover brightness-90 filter'
      />
      Delicious Food, Delivered To You
    </header>
  );
}
