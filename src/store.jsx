import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/search/searchSlice";
import homeReducer from "./features/home/homeSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    home: homeReducer,
  },
});
