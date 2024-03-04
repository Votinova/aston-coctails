
import { RootState } from '../store'
import { Middleware } from 'redux'

export const SaveToLocalMiddleware: Middleware <RootState> = storeApi => next => action => {
    const result = next(action);

   
    return result;
}
