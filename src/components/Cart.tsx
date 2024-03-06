import React from 'react'
import { IElement } from '../types/typeContext'
import { Ingridients } from './Ingridients';

export const Cart = (props : {data: IElement}) => {
  
    return (
    <div>
        <h1>
            {props.data.strDrink}
        </h1>
        <img title={props.data.strDrink} src={props.data.strDrinkThumb} />
        <ul>
            <Ingridients data={props.data}/>
        </ul>
        <div>
            {props.data.strInstructions}
        </div>
    </div>
  )
}
