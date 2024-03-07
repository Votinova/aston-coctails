import React from 'react'


import { loadFromLocalStorage } from '../localStorage/loadFromLocalStorage';


export const useGetISLocalStore = (user: string) => {
    const initialDataLocalStorage = loadFromLocalStorage(user);
    const likes = initialDataLocalStorage?.likes
  
    return likes
}
