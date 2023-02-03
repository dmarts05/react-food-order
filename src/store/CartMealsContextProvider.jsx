import { useReducer } from 'react';
import CartMealsContext from './cart-meals-context';
import {
  INITIAL_CART_STATE,
  CART_ACTION_TYPES,
  cartMealsReducer,
} from './cart-meals-reducer';

const CartMealsContextProvider = props => {
  const [cartMealsState, dispatchCartMeals] = useReducer(
    cartMealsReducer,
    INITIAL_CART_STATE
  );

  const addMealHandler = (id, amount) => {
    dispatchCartMeals({ type: CART_ACTION_TYPES.ADD_MEAL, id, amount });
  };

  const removeMealHandler = (id, amount) => {
    dispatchCartMeals({ type: CART_ACTION_TYPES.REMOVE_MEAL, id, amount });
  };

  return (
    <CartMealsContext.Provider
      value={{
        cartMeals: cartMealsState,
        onAddMeal: addMealHandler,
        onRemoveMeal: removeMealHandler,
      }}
    >
      {props.children}
    </CartMealsContext.Provider>
  );
};

export default CartMealsContextProvider;
