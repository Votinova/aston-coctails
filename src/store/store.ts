import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice';
import elementReducer from './slices/elementSlice'
import searchReducer from './slices/searchSlise';
import { dataApi } from "./servise/data";
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        user: userReducer,
        element: elementReducer,
        search: searchReducer,
        [dataApi.reducerPath]: dataApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware),
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>