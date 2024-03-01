import React from 'react'
import { IDrink } from '../../types/typeContext'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux'
import { setElement } from '../../store/slices/elementSlice'
import { ButtonLike } from '../../buttons.ts/ButtonLike';

export const Coctail = (props: {data: IDrink}) => {
const dispatch = useDispatch();
const isAuth = useAuth();
 function clickElement () {
  dispatch(setElement({
    id: props.data.idDrink
  }))
 }

  return (
    <div className='drink-card'>
        <img src={props.data.strDrinkThumb} title='image' alt='Image'/>
        <Link  to='/element' className='link' onClick={ () => clickElement()}>
          <h1>
              {props.data.strDrink}
          </h1>
        </Link>
        {isAuth && <ButtonLike data={props.data} />}
    </div>
  )
}
