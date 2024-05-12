import React, { useState } from 'react';
import '../scss/ButtonLike.scss';
import FillHeart from '../icons/suit-heart-fill.svg';
import Heart from '../icons/suit-heart.svg';



export const ButtonLike = (props: {data: number}) => {
  const [state, setState] = useState(false);
  function onClick () {
    setState(!state)
  }  
  return (
    <button className='btn-like' onClick={onClick}>
      {state? <img src={FillHeart}/> : <img src={Heart}/>}
    </button>
  )
}
