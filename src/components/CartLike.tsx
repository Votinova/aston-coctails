import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useGetElementQuery } from '../store/servise/data';
import { Link } from 'react-router-dom';
import { ButtonLike } from './ButtonLike';
import { useDispatch } from 'react-redux'
import { setElement } from '../store/slices/elementSlice';
import { Loader } from '../utilits/Loader/Loader';


export const CartLike = (props: {id: number}) => {
const isAuth = useAuth();
const {data, isLoading, isError} = useGetElementQuery(props.id);
const dispatch = useDispatch()
function clickElement () {
  dispatch(setElement({
    id: props.id
  }))
 }
  return (
    <div>
      {isLoading? <Loader /> :  <div className='drink-card'>
    <img src={data?.drinks[0].strDrinkThumb} title='image' alt='Image'/>
    <div className='cart-info'>
      <Link to={`/element`} className='link' onClick={() => clickElement()}>
        <p>
        {data?.drinks[0]?.strDrink}
        </p>
      </Link>
      {isAuth && <ButtonLike id={props.id} />}
  </div>
</div>}
    </div>
  
  )
}
