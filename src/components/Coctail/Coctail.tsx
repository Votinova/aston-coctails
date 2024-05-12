import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { useDispatch } from 'react-redux'
import { setElement } from '../../store/slices/elementSlice'
import { ButtonLike } from '../ButtonLike'
import ErroBoundary from '../../errorBoundary/errorBoundary';
import { useGetElementQuery } from '../../store/servise/data';
import '../../scss/Coctail.scss'



export const Coctail = (props: {id: number}) => {
const dispatch = useDispatch();
const isAuth = useAuth();

 function clickElement () {
  dispatch(setElement({
    id: props.id
  }))
 }
 const {data} = useGetElementQuery(props.id);
  return (
    <div className='drink-card'>
        <img src={data?.drinks?.[0].strDrinkThumb} title='image' alt='Image'/>
        <div className='cart-info'>
          <Link to={`/element/${data?.idDrink}`} className='link' onClick={ () => clickElement()}>
            <p>
            {data?.drinks?.[0].strDrink}
            </p>
          </Link>
          {isAuth && <ButtonLike data={props.id} />}
        </div>
    </div>
  )
}
