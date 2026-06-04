import { configureStore } from "@reduxjs/toolkit";
import { countSlice } from "@/features/count/countSlice";
import { cartSlice } from "@/features/count/cartSlice";
// set up the store
export const makeStore = () =>
  configureStore({
    reducer: {
      count: countSlice.reducer,
      cart: cartSlice.reducer,
    },
  });

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
