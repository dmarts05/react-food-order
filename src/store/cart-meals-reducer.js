import meals from './meals';

export const INITIAL_CART_STATE = [];

export const CART_ACTION_TYPES = {
  ADD_MEAL: 'ADD_MEAL',
  REMOVE_MEAL: 'REMOVE_MEAL',
  ORDER_MEALS: 'ORDER_MEALS',
};

export const cartMealsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MEAL': {
      let newState = [...state];
      let newMeal = meals.find(meal => meal.id === action.id);

      if (newMeal) {
        newMeal = { ...newMeal, count: action.amount };

        const newMealIndexCart = state.findIndex(
          meal => meal.id === newMeal.id
        );

        if (newMealIndexCart !== -1) {
          newState = [...state];
          newState[newMealIndexCart] = {
            ...newState[newMealIndexCart],
            count: newState[newMealIndexCart].count + action.amount,
          };
        } else {
          newState = [...state, newMeal];
        }
      }

      return newState;
    }
    case 'REMOVE_MEAL': {
      let newState = [...state];
      const removedMealIndexCart = newState.findIndex(
        meal => meal.id === action.id
      );

      if (removedMealIndexCart !== -1) {
        let removedMeal = newState[removedMealIndexCart];

        if (removedMeal.count > action.amount) {
          // Remove only the specified amount from the cart
          removedMeal = {
            ...removedMeal,
            count: removedMeal.count - action.amount,
          };
          newState[removedMealIndexCart] = removedMeal;
        } else {
          // Fully remove the meal from the cart
          newState = newState.filter(meal => meal.id !== removedMeal.id);
        }
      }

      return newState;
    }
    case 'ORDER_MEALS':
      return INITIAL_CART_STATE;
    default:
      return state;
  }
};
