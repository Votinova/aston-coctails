import React from 'react';
import '../../scss/Btn.scss';
import FillHeart from '../../icons/suit-heart-fill.svg';
import Heart from '../../icons/suit-heart.svg';
import { likeFirebase } from '../../hooks/likeFirebase';

export const ButtonLike = (props: {id: number}) => {
  const data = likeFirebase(props.id)
  return (
    <div>
      {data.isLike !== undefined? <button className='btn-like' onClick={() => data.click()}>
      {data.isLike? <img src={FillHeart}/> : <img src={Heart}/>}
      </button> : ''}
    </div>
  )
}
