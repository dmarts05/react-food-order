import React, { useState } from 'react';
import { meals } from './meals';

export const CartMealsContext = React.createContext({
  cartMeals: [],
  addMealToCart: () => {},
});

export const CartMealsContextProvider = props => {
  const [cartMeals, setCartMeals] = useState([]);

  const addMealToCart = (id, amount) => {
    const meal = meals.find(elem => elem.id === id);
    const indexCartMealSameId = cartMeals.findIndex(elem => elem.id === id);

    if (indexCartMealSameId !== -1) {
      // The meal is already in the cart, update count
      setCartMeals(prev => {
        const newCartMeals = [...prev];
        const currentAmount = newCartMeals[indexCartMealSameId].count;

        // Max amount of a meal is capped at 999
        newCartMeals[indexCartMealSameId].count =
          currentAmount + amount > 999 ? 999 : currentAmount + amount;

        return newCartMeals;
      });
    } else {
      // New meal, add it to the cart
      setCartMeals(prev => [
        {
          id: meal.id,
          title: meal.title,
          description: meal.description,
          price: meal.price,
          count: amount,
        },
        ...prev,
      ]);
    }
  };

  return (
    <CartMealsContext.Provider value={{ cartMeals, addMealToCart }}>
      {props.children}
    </CartMealsContext.Provider>
  );
};
