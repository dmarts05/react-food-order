import React from 'react';

export const CartMealsContext = React.createContext({ cartMeals: [] });

export const CartMealsContextProvider = props => {
  return (
    <CartMealsContext.Provider value={{ cartMeals: [] }}>
      {props.children}
    </CartMealsContext.Provider>
  );
};
