import { useEffect, useState } from 'react';
import useHttp from '../../hooks/use-http';

import Card from '../UI/Card';
import Meal from './Meal';

export default function MealsList() {
  const [meals, setMeals] = useState([]);
  const { isLoading, error, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest(
      {
        url: 'https://react-test-52b42-default-rtdb.europe-west1.firebasedatabase.app/meals.json',
      },
      data => {
        const newMeals = [];

        for (const key in data) {
          newMeals.push({ ...data[key] });
        }

        setMeals(newMeals);
      }
    );
  }, []);

  let content;

  if (isLoading) {
    content = <p className='text-center text-lg font-semibold'>Loading...</p>;
  } else if (error) {
    content = (
      <p className='text-center text-lg font-semibold text-red-700'>
        {error}...
      </p>
    );
  } else {
    content = meals.map(meal => (
      <Meal
        key={meal.id}
        id={meal.id}
        title={meal.title}
        description={meal.description}
        price={meal.price}
      />
    ));
  }

  return (
    <Card className='my-6 flex w-3/4 flex-col gap-3 self-center'>
      {content}
    </Card>
  );
}
