import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import contactSlice from "./Reducer/ContactSlice";
export const store = configureStore({
  reducer: {
    contact: contactSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
