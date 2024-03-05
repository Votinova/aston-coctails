import React, {useState } from 'react'
import { useAppSelector } from './typescriptHooks/typescript'
import { loadFromLocalStorage } from '../localStorage/loadFromLocalStorage';
import { IDrink } from '../types/typeContext';
import { localStorageDislike } from '../localStorage/workLocalStorage/localStorageDislike';
import { localStorageLike } from '../localStorage/workLocalStorage/localStorageLike';


export const useLocalStorage = (coctail: IDrink) => {
  const user = useAppSelector(state => state.user.email);
  const initialDataLocalStorage = loadFromLocalStorage(user);
  const [isLike, setIsLike] = useState(initialDataLocalStorage.likes.some((like: IDrink) => like.idDrink === coctail.idDrink))

  
 const click = () => {
    if (isLike) {
        localStorageDislike(user, coctail.idDrink)
        const initialDataLocalStorage = loadFromLocalStorage(user);
        setIsLike(initialDataLocalStorage.likes.some((like: IDrink) => like.idDrink === coctail.idDrink))
    } else {
        localStorageLike(user, coctail)
        const initialDataLocalStorage = loadFromLocalStorage(user);
        setIsLike(initialDataLocalStorage.likes.some((like: IDrink) => like.idDrink === coctail.idDrink))
    }
 }

   return {isLike, click}
}
