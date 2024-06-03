import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { ButtonLike } from '../ButtonLike/ButtonLike'
import '../../scss/Coctail.scss'
import { IDrink } from '../../types/types'
import { useClickElement } from '../../hooks/useClickElement'

export const Coctail = ( props: {drink: IDrink}) => {
const isAuth = useAuth();
const onClick = useClickElement(props.drink.idDrink)
  return (
    <div className='drink-card'>
        <img src={props.drink.strDrinkThumb} title='image' alt='Image'/>
        <div className='cart-info'>
          <Link to={`/element`} className='link' onClick={ () => onClick()}>
            <p>
            {props.drink.strDrink}
            </p>
          </Link>
          {isAuth && <ButtonLike id={props.drink.idDrink} />}
        </div>
    </div>
  )
}
