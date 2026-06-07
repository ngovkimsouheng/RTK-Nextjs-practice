import { configureStore } from "@reduxjs/toolkit";
import { countSlice } from "@/features/count/countSlice";
import { cartSlice } from "@/features/count/cartSlice";
import { createApi } from "@reduxjs/toolkit/query";
import { ecommerceApi } from "@/service/ecommerce";
// set up the store
export const makeStore = () =>
  configureStore({
    reducer: {
      count: countSlice.reducer,
      cart: cartSlice.reducer,
      [ecommerceApi.reducerPath]: ecommerceApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(ecommerceApi.middleware),
  });

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
