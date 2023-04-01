import { configureStore } from "@reduxjs/toolkit";
import { foodSlice } from "./foodSlice";

export const store = configureStore({
  reducer: {
    [foodSlice.reducerPath]: foodSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(foodSlice.middleware),
});
