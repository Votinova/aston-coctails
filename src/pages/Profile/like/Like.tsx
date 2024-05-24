import React from 'react'
import { useAppSelector } from '../../../hooks/typescriptHooks/typescript'
import { inUser } from '../../../hooks/inUser';
import { useFetchLikesQuery } from '../../../store/servise/Firebase'
import { CartLike } from '../../../components/CartLike'

export const Like = () => {
const email = useAppSelector(state => state.user.email)
inUser();
const {data} = useFetchLikesQuery(email);
console.log(data);
return (
  <div>
    {data?.map((id: number) => {
      return <CartLike id={id} key={id}/>
    })}
  </div>
)
}
