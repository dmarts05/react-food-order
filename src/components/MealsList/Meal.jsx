import MealForm from './MealForm';

export default function Meal() {
  return (
    <div className='flex justify-between border-b-2 border-zinc-200'>
      <div className='pb-3'>
        <h3 className='text-lg font-semibold'>Sushi</h3>
        <p className='italic'>Finest fish and vegetables</p>
        <span className='font-semibold text-red-900'>$22.99</span>
      </div>
      <MealForm />
    </div>
  );
}
