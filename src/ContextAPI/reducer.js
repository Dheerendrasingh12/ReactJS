export const initialState = {
  basket: [],
};
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET": // Ensure the action type is spelled consistently (REMOVE instead of Remove)
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        // Use >= 0 to correctly handle removal
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cannot remove item with id: ${action.id}`);
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};
export default reducer;
