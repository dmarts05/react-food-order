import MealForm from './MealForm';

export default function Meal(props) {
  return (
    <div className='flex justify-between border-b-2 border-zinc-200'>
      <div className='pb-3'>
        <h3 className='text-lg font-semibold'>{props.title}</h3>
        <p className='italic'>{props.description}</p>
        <span className='font-semibold text-red-900'>${props.price}</span>
      </div>
      <MealForm />
    </div>
  );
}
