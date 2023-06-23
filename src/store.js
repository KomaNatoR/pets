import { configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { reducerCounter } from "store/REDUX_SLICE/counter/counterSlice";
import { reducerTodo } from "store/REDUX_SLICE/todo/todoSlice";
 

const persistConfig = {
    key: 'localTodos',
    storage,
    blacklist: ['filtredTodo'],
};
const persistedTodosReducer = persistReducer(persistConfig, reducerTodo);


export const store = configureStore({
    reducer: {
        counter: reducerCounter,
        todo: persistedTodosReducer,
    },
});
export const persistor = persistStore(store);