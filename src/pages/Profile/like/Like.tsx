import React, { useEffect, useState } from 'react'
import { IDrink } from '../../../types/typeContext'
import { Coctail } from '../../main/Coctail'
import { useGetISLocalStore } from '../../../hooks/useGetISLocalStore'
import { useAppSelector } from '../../../hooks/typescriptHooks/typescript'

export const Like = () => {

const user = useAppSelector(state => state.user.email)

const [likes, setLikes] = useState(() => useGetISLocalStore(user))
useEffect(() => {
 setLikes(() => useGetISLocalStore(user))
},[likes])
  return (
    <div>
      {likes?.length !== 0?  <div>
      {likes.map((like: IDrink) => {
        return <Coctail data={like} key={like.idDrink} />
      })}
    </div>
    :
    <div>No likes</div>}
    </div>
    
  )
}
