import React, { useEffect, useState } from 'react'
import { useAppSelector } from './typescriptHooks/typescript'
import { loadFromLocalStorage } from '../localStorage/loadFromLocalStorage';
import { IDrink } from '../types/typeContext';
import { localStorageDislike } from '../localStorage/workLocalStorage/localStorageDislike';
import { localStorageLike } from '../localStorage/workLocalStorage/localStorageLike';

export const useLocalStorage = (coctail: IDrink) => {
  const user = useAppSelector(state => state.user.email);
  const [isLike, setIsLike] = useState(false)
  useEffect(() => {
    const initialDataLocalStorage = loadFromLocalStorage(user);
    console.log(initialDataLocalStorage)
    setIsLike(initialDataLocalStorage.likes.some((like: IDrink) => like.idDrink === coctail.idDrink))
  }, [])
  
 const click = () => {
    if (!isLike) {
        localStorageLike(user, coctail)
    } else {
        localStorageDislike(user, coctail.idDrink)
    }
 }

   return {isLike, click}
}
