import React, { useEffect, useState } from 'react'
import { useAppSelector } from './typescriptHooks/typescript';
import { IDrink } from '../types/typeContext';
import { getLocalStorageLike } from '../localStorage/getLocalStorage/getLocalStorageLike';

export const useGetISLocalStore = () => {
    const email = useAppSelector(state => state.user.email);

  const [likes, setLikes] = useState<IDrink[]>([]);
  useEffect(() => {
    setLikes(() => getLocalStorageLike(email))
  }, [])
    return  likes
}
