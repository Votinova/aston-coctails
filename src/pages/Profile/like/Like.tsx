import React from 'react'

import { IDrink } from '../../../types/typeContext'
import { Coctail } from '../../main/Coctail'
import { useGetISLocalStore } from '../../../hooks/useGetISLocalStore'

export const Like = () => {
 const likes = useGetISLocalStore()
  return (
    <div>
      {likes?.length !== 0?  <div>
      {likes.map((like: IDrink) => {
        return <Coctail data={like} key={like.idDrink}/>
      })}
    </div>
    :
    <div>нет избранного</div>}
    </div>
    
  )
}
