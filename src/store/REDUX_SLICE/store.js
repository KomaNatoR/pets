import { reducer as rootReducer } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({ reducer: rootReducer });
// або скорочено так: export const store = configureStore({ reducer });