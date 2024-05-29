import React from 'react';
import '../scss/ButtonLike.scss';
import FillHeart from '../icons/suit-heart-fill.svg';
import Heart from '../icons/suit-heart.svg';
import { likeFirebase} from '../hooks/likeFirebase';

export const ButtonLike = (props: {id: number}) => {
  const data = likeFirebase(props.id)
  function onClick () {
  data.click()
  }
  return (
    <div>
      {data.isLike !== undefined? <button className='btn-like' onClick={onClick}>
      {data.isLike? <img src={FillHeart}/> : <img src={Heart}/>}
      </button> : ''}
    </div>
  )
}
