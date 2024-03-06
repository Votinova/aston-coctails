
import { RootState } from '../store'
import { Middleware } from 'redux'

export const SaveToLocalMiddleware: Middleware <RootState> = storeApi => next => action => {
    const result = next(action);
    const id = storeApi.getState().element.id
    if (id !== 0) {
        localStorage.setItem('id', id)
    }
    return result;
}


