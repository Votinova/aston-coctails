import React from 'react'
import { useAppSelector } from './typescriptHooks/typescript';

import { loadFromLocalStorage } from '../localStorage/loadFromLocalStorage';


export const useGetISLocalStore = () => {
  const user = useAppSelector(state => state.user.email);
    const initialDataLocalStorage = loadFromLocalStorage(user);
    const likes = initialDataLocalStorage?.likes
  
    return likes
}
