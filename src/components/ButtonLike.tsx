import React, { useState } from 'react';
import '../scss/ButtonLike.scss';
import FillHeart from '../icons/suit-heart-fill.svg';
import Heart from '../icons/suit-heart.svg';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { IDrink } from '../types/typeContext';



export const ButtonLike = (props: {data: IDrink}) => {
  const data = useLocalStorage(props.data)
  function onClick () {
  data.click()
}
  return (
    <button className='btn-like' onClick={onClick}>
      {data.isLike? <img src={FillHeart}/> : <img src={Heart}/>}
    </button>
  )
}
