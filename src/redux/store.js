import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./todoSlice";

export const store = configureStore({
  reducer: {
    todos: toDoReducer,
  },
});
