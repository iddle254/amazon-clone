export const initialState = {
  basket: [],
};

function reducer(state, action) {
  console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      // LOGIC FOR ADDING ITEM TO BASKET
      return { ...state, basket: [...state.basket, action.payload] };
    case "REMOVE_FROM_BASKET":
    //LOGIC FOR REMOVING ITEM FROM BASKET
    default:
      return state;
  }
}
export default reducer;
