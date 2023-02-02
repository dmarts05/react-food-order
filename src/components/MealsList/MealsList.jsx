import Card from '../UI/Card';
import Meal from './Meal';

import { meals } from '../../store/meals';

export default function MealsList() {
  return (
    <Card className='mt-6 flex w-3/4 flex-col gap-3 self-center'>
      {meals.map(meal => (
        <Meal
          key={meal.id}
          title={meal.title}
          description={meal.description}
          price={meal.price}
        />
      ))}
    </Card>
  );
}
