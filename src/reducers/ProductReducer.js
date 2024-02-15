export const ProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "ALL-PRODUCTS":
      return {
        ...state,
        products: action.payload.products,

      };
    default:
      state;
  }
};
