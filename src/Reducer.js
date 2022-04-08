import { BUY_CAKE } from "./cakeAction";

const initialState = {
  numberOfCakes: 100,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { numberOfCakes: state.numberOfCakes - 1 };

    default:
      return state;
  }
};

export default cakeReducer;