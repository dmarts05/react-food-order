import Card from '../UI/Card';
import Meal from './Meal';

export default function MealsList() {
  return (
    <Card className='mt-6 flex w-3/4 flex-col gap-3 self-center'>
      <Meal />
      <Meal />
    </Card>
  );
}
