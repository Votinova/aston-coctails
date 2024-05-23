import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice';
import elementReducer from './slices/elementSlice'
import searchReducer from './slices/searchSlise'
import  dataApiReducer from "./servise/data";
import firebaseApiReducer from './servise/Firebase'
import  {dataApi} from "./servise/data";
import { setupListeners } from '@reduxjs/toolkit/query'
import { SaveToLocalMiddleware } from "./middlware/SaveToLocalMiddlware";
import { combineReducers } from "@reduxjs/toolkit";
import { firestoreApi } from "./servise/Firebase";


export const store = configureStore({
    reducer: {
        user: userReducer,
        element: elementReducer,
        search: searchReducer,
        [dataApi.reducerPath]: dataApiReducer,
        [firestoreApi.reducerPath]: firebaseApiReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(dataApi.middleware, firestoreApi.middleware, SaveToLocalMiddleware)
})

const rootReducer = combineReducers({user: userReducer,  
    element: elementReducer,
    search: searchReducer,
    [dataApi.reducerPath]: dataApiReducer,
    [firestoreApi.reducerPath]: firebaseApiReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch)