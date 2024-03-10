import React from 'react'
import { IDrink } from '../types/typeContext'
import { useLocalStorage } from '../hooks/useLocalStorage';
import '../scss/ButtonLike.scss'

export const ButtonLike = (props: {data: IDrink}) => {
const {isLike, click} = useLocalStorage(props.data)
    return (
    <div>
        <button onClick={() => click()} className='button-like'>
          {isLike? 'dislike' : 'like'}
        </button>
    </div>
  )
}
