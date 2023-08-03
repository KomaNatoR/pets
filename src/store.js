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

import { reducerNotices } from "pages/NoticesPage/Redux/notices/notices_slice";
import { reducerNoticSearch } from "pages/NoticesPage/Redux/search/noticSearch_slice";
import { reducerCounter } from "REDUX/REDUX_ASYNC/counter/counterSlice";
import { reducerAuth } from "pages/AuthPages/redux/auth-slice";
// import { reducerTodo } from "REDUX/REDUX_ASYNC/todo/todoSlice";
 

const persistConfig = {
    key: 'localTodos',
    storage,
    blacklist: ['isLoading', "error"],
};
const persistedCounterSearchReducer = persistReducer(persistConfig, reducerCounter);


export const store = configureStore({
    reducer: {
        notices: reducerNotices,
        noticesSearch: reducerNoticSearch,
        counter: persistedCounterSearchReducer,
        auth: reducerAuth,
        // todo: persistedTodoReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(store);