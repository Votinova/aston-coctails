import React, { useEffect, useState } from 'react'
import { IDrink } from '../../../types/typeContext'
import { Coctail } from '../../../components/Coctail/Coctail'
import { useGetISLocalStore } from '../../../hooks/useGetISLocalStore'
import { useAppSelector } from '../../../hooks/typescriptHooks/typescript'
import { inUser } from '../../../hooks/inUser';
import { useCallback } from 'react';
import { getLikesQuery } from '../../../hooks/getLikes'
import { useFetchLikesQuery } from '../../../store/servise/Firebase'
import { CartLike } from '../../../components/CartLike'

// export const Like = () => {
// const email = useAppSelector(state => state.user.email)
// inUser()
// // const [likes, setLikes] = useState(() => useGetISLocalStore(email))
// // useEffect(() => {
// //  setLikes(() => useGetISLocalStore(email))
// // },[likes])
// const [likes, setLikes] = useState<IDrink[]>([])
// const fetchData = useCallback(async() => {
//   const data = await getLikesQuery(email);
//   setLikes(data)
// }, [email])
// useEffect(() => {
//   fetchData()
//   .catch(console.error)
// }, [fetchData])
// console.log(likes.length !== 0)
//   return (
//     <div>
//       {likes?.length !== 0?  <div>
//       {likes?.map((like: IDrink) => {
//         return <Coctail drink={like} key={like.idDrink} />
//       })}
//     </div>
//     :
//     <div>No likes</div>}
//     </div>
    
//   )
// }
export const Like = () => {
const email = useAppSelector(state => state.user.email)
inUser();
const {data} = useFetchLikesQuery(email)
console.log(data);
return (
  <div>
    {data?.map((id: number) => {
      return <CartLike id={id} key={id}/>
    })}
  </div>
)
}
