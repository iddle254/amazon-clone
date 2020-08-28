export const initialState = {
  basket: [
    {
      title: "stylish durag",
      image:
        "https://images.unsplash.com/photo-1521681867701-9962f648c1b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      price: 600,
      rating: 3,
      id: "345667",
    },
  ],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      // LOGIC FOR ADDING ITEM TO BASKET
      return { ...state, basket: [...state.basket, action.payload] };
    case "REMOVE_FROM_BASKET":
      //LOGIC FOR REMOVING ITEM FROM BASKET
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        //   remove item from basket
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Sorry but cant remove item id: ${action.id} as it no longer exists in your cart `
        );
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
}
export default reducer;
