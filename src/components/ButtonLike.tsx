import React, { useEffect, useState } from 'react'
import { IDrink } from '../types/typeContext'
import { useAppDispatch, useAppSelector } from '../hooks/typescriptHooks/typescript';
import { useLocalStorage } from '../hooks/useLocalStorage';


export const ButtonLike = (props: {data: IDrink}) => {

const data = useLocalStorage(props.data)
const isLike = data.isLike
const click = data.click
console.log(isLike)
    return (
    <div>
        <button onClick={() => click()}>
          {isLike? 'dislike' : 'like'}
        </button>
    </div>
  )
}
