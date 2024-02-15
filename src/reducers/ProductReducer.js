export const ProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "ALL-PRODUCTS":
      return {
        ...state,
        isLoading: false,
        products: action.payload.products,

      };
    default:
      state;
  }
};
