import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useDispatch } from 'react-redux'
import { setElement } from '../store/slices/elementSlice'
import { ButtonLike } from './ButtonLike'
import ErroBoundary from '../errorBoundary/errorBoundary';
import { useGetElementQuery } from '../store/servise/data';
import '../scss/Coctail.scss';



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
        <img src={data?.strDrinkThumb} title='image' alt='Image'/>
        <Link to={`/element/${data?.idDrink}`} className='link' onClick={ () => clickElement()}>
          <h1>

          </h1>
        </Link>
        <ErroBoundary>
        {isAuth && <ButtonLike data={props.id} />}
        </ErroBoundary>
    </div>
  )
}
