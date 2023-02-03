import React from 'react';

const CartMealsContext = React.createContext({
  cartMeals: [],
  totalPrice: 0,
  onAddMeal: () => {},
  onRemoveMeal: () => {},
  onOrderMeals: () => {},
});

export default CartMealsContext;
