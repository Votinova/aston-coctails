import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { useDispatch } from 'react-redux'
import { setElement } from '../../store/slices/elementSlice'
import { ButtonLike } from '../ButtonLike'
import ErroBoundary from '../../errorBoundary/errorBoundary';
import { useGetElementQuery } from '../../store/servise/data';
import '../../scss/Coctail.scss'
import { IDrink } from '../../types/typeContext'



export const Coctail = ( props: {drink: IDrink}) => {
const dispatch = useDispatch();
const isAuth = useAuth();

 function clickElement () {
  dispatch(setElement({
    id: props.drink.idDrink
  }))
 }

  return (
    <div className='drink-card'>
        <img src={props.drink.strDrinkThumb} title='image' alt='Image'/>
        <div className='cart-info'>
          <Link to={`/element`} className='link' onClick={ () => clickElement()}>
            <p>
            {props.drink.strDrink}
            </p>
          </Link>
          {isAuth && <ButtonLike id={props.drink.idDrink} />}
        </div>
    </div>
  )
}
