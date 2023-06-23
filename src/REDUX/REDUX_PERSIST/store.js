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

import { reducerCounter } from "./counter/counterSlice";
import { reducerTodo } from "./todo/todoSlice";
 

const persistConfig = {
    key: 'localTodos',
    storage,
    blacklist: ['filtredTodo'], // Можемо вказувати які ключі з інітСтейта ігнорити!
};
const persistedTodosReducer = persistReducer(persistConfig, reducerTodo); // Обгортаємо потрібний редюсер!


export const store = configureStore({
    reducer: {
        counter: reducerCounter,
        todo: persistedTodosReducer, // Заганяємо обгорнутий редюсер сюди!
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }), // Ця штука потрібна щоб не вибивало помилки в консолі!!!
});
export const persistor = persistStore(store);


// ------------------------------| index.js |------------------------------|
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './store';

//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//        <App />
//     </PersistGate>
//   </Provider>
// ------------------------------------------------------------------------|