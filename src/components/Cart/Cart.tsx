import React from 'react';
import { IElement } from '../../types/types';
import { Ingridients } from '../Ingridients/Ingridients';
import { ButtonLike } from '../ButtonLike/ButtonLike';
import '../../scss/Cart.scss'
import { useAuth } from '../../hooks/useAuth';


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
                {isAuth && <ButtonLike id={props.data.idDrink}/>}
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
