import React, {useContext, useEffect, useState} from 'react'
import { IDrink } from '../../types/typeContext'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { useDispatch } from 'react-redux'
import { setElement } from '../../store/slices/elementSlice'
import { ButtonLike } from '../../components/ButtonLike'
import { useAppSelector } from '../../hooks/typescriptHooks/typescript';
import { isLikeElement } from '../../localStorage/workLocalStorage/isLikeElement'
import { localStorageDislike } from '../../localStorage/workLocalStorage/localStorageDislike';
import { localStorageLike } from '../../localStorage/workLocalStorage/localStorageLike'
import { getLocalStorageLike } from '../../localStorage/getLocalStorage/getLocalStorageLike'


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
