import meals from './meals';

export const INITIAL_CART_STATE = [];

export const CART_ACTION_TYPES = {
  ADD_MEAL: 'ADD_MEAL',
  REMOVE_MEAL: 'REMOVE_MEAL',
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
    case 'REMOVE_MEAL':
      return state;
    default:
      return state;
  }
};
