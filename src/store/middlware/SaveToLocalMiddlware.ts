import { loadFromLocalStorage } from '../../localStorage/loadFromLocalStorage';
import { saveToLocalStorage } from '../../localStorage/saveToLocalStorage';
import { RootState } from '../store'
import { Middleware } from 'redux'

export const SaveToLocalMiddleware: Middleware <RootState> = storeApi => next => action => {
    const result = next(action);
    // const likes = storeApi.getState().likes;

    // const email = storeApi.getState().user;
    // const initialState = loadFromLocalStorage(email.email)
    
    // const state = {
    //     ...initialState,
    //     likes : initialState.likes.concat(likes)
    // }

    // saveToLocalStorage(email.email, state)
    return result;
}


