const InitialState = {
  products: [],
};

export const productReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};
