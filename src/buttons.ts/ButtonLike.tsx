import React from 'react'
import { IDrink} from '../types/typeContext'
import { LikeElement } from '../hooks/LikeElement'




export const ButtonLike = (props: {data: IDrink}) => {
  const {likeCoctail} = LikeElement(props.data.idDrink)

const likeClick = () => {
 likeCoctail(props.data)
}

  return (
    <button onClick={likeClick}>
      like
    </button>
  )
  }

