import React from 'react'
import { IDrink } from '../../types/typeContext'

export const Coctail = (props: {data: IDrink}) => {
// console.log(props.data.strDrinkThumd);
  return (
    <div className='drink-card'>
        <img src={props.data.strDrinkThumb} title='image' alt='Image'/>
        <h1>
            {props.data.strDrink}
        </h1>
    </div>
  )
}
