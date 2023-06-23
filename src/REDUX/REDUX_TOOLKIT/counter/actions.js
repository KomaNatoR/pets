import { createAction } from "@reduxjs/toolkit";

export const increment = createAction("Counter/INCREMENT");
export const decrement = createAction("Counter/DECREMENT");