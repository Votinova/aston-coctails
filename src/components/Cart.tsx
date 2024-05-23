import React from 'react'
import { IElement } from '../types/typeContext'
import { Ingridients } from './Ingridients';
import { ButtonLike } from './ButtonLike';
import { useAuth } from '../hooks/useAuth';
import '../scss/Cart.scss'


export const Cart = (props : {data: IElement}) => {
    const isAuth = useAuth();
    return (
    <div className='cart'>
        <div className='cart-title'>
            <img title={props.data.strDrink} src={props.data.strDrinkThumb} />
            <div className='element-info'>
                <h1 >
                    {props.data.strDrink}
                </h1>
                {isAuth && <ButtonLike data={props.data}/>}
                <ul>
                    <Ingridients data={props.data}/>
                </ul>
            </div>
        </div>
        <div>
            {props.data.strInstructions}
        </div>
    </div>
  )
}
