import React from 'react'
import { IDrink } from '../types/typeContext'
import { useLocalStorage } from '../hooks/useLocalStorage';
import '../scss/ButtonLike.scss'
import { useAppSelector } from '../hooks/typescriptHooks/typescript';
import { useLikes } from '../hooks/useLikes';

export const ButtonLike = (props: {data: IDrink}) => {
const {isLike, click} = useLocalStorage(props.data);
const email = useAppSelector(state => state.user.email);
    return (
    <div>
        <button onClick={() => {click()}} className='button-like'>
          {isLike? 'dislike' : 'like'}
        </button>
    </div>
  )
}
