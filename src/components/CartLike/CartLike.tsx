import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useGetElementQuery } from '../../store/servise/data';
import { Link } from 'react-router-dom';
import { ButtonLike } from '../ButtonLike/ButtonLike';
import { Loader } from '../../utilits/Loader/Loader';
import { useClickElement } from '../../hooks/useClickElement';


export const CartLike = (props: {id: number}) => {
const isAuth = useAuth();
const {data, isLoading, isError} = useGetElementQuery(props.id);
const onClick = useClickElement(props.id)
  return (
    <div>
      {isLoading? <Loader /> :  <div className='drink-card'>
    <img src={data?.drinks[0].strDrinkThumb} title='image' alt='Image'/>
    <div className='cart-info'>
      <Link to={`/element`} className='link' onClick={() => onClick()}>
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
