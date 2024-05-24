import React, {useEffect, useState } from 'react'
import { useAppSelector } from './typescriptHooks/typescript'
import { useFetchLikesQuery } from '../store/servise/Firebase';
import { AddLike } from './AddLike';
import { DeleteLike } from './DeleteLike';


export const likeFirebase = (id: number) => {
  const user = useAppSelector(state => state.user.email);
  const {data} = useFetchLikesQuery(user);
  const [isLike, setIsLike] = useState<number>();
  useEffect(() => {
      setIsLike(data?.some((like: number) => like === id))
  }, [data])
 const click = () => {
    (!isLike) ? AddLike(user, id) : DeleteLike(user, id)
 }
   return {isLike, click}
}
