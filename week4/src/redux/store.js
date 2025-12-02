import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// Logger middleware
const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("Previous State:", store.getState());
  console.log("Action:", action);
  const result = next(action);
  console.log("Next State:", store.getState());
  console.groupEnd();
  return result;
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,  // add cart slice reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});
