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
import storage from 'redux-persist/lib/storage';

import { reducerNotices } from "pages/NoticesPage/Redux/NoticesOperations";
// import { reducerCounter } from "./counter/counterSlice";
// import { reducerTodo } from "./todo/todoSlice";
 

const persistConfig = {
    key: 'localTodos',
    storage,
    blacklist: ['isLoading', 'error'],
};
const persistedNoticesReducer = persistReducer(persistConfig, reducerNotices);


export const store = configureStore({
    reducer: {
        notices: persistedNoticesReducer,
        // counter: reducerCounter,
        // todo: persistedTodosReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(store);