import React from 'react'
import { IElement } from '../types/typeContext'
import { Ingridients } from './Ingridients';
import { ButtonLike } from './ButtonLike';
import { useAuth } from '../hooks/useAuth';


export const Cart = (props : {data: IElement}) => {
    const isAuth = useAuth();
    return (
    <div>
        <h1>
            {props.data.strDrink}
        </h1>
        <img title={props.data.strDrink} src={props.data.strDrinkThumb} />
        {isAuth && <ButtonLike data={props.data.idDrink}/>}
        <ul>
            <Ingridients data={props.data}/>
        </ul>
        <div>
            {props.data.strInstructions}
        </div>
    </div>
  )
}
