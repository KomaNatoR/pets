import { configureStore } from "@reduxjs/toolkit";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import { reducerCounter } from "REDUX/REDUX_SLICE/counter/counterSlice";
import { reducerTodo } from "REDUX/REDUX_SLICE/todo/todoSlice";
 

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
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }), // Ця штука потрібна щоб не вибивало помилки в консолі!!!
});
export const persistor = persistStore(store);