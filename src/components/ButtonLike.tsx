import React from 'react'
import { IDrink } from '../types/typeContext'
import { useLocalStorage } from '../hooks/useLocalStorage';





export const ButtonLike = (props: {data: IDrink}) => {
const {isLike, click} = useLocalStorage(props.data)
const clickLike = () => {
    click()
}
    return (
    <div>
        <button onClick={clickLike}>
          {isLike? 'dislike' : 'like'}
        </button>
    </div>
  )
}
