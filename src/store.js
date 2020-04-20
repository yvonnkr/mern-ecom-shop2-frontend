import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import Cookie from "js-cookie";

import rootReducer from "./reducers/rootReducer";

const cartItems = Cookie.getJSON("cartItems") || [];

const initialState = {
  cart: { cartItems: cartItems, shipping: {}, payment: {} },
};

const middleware = [thunk];

const devTools =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(...middleware)
    : composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducer, initialState, devTools);

export default store;
