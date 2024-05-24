import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useGetElementQuery } from '../store/servise/data';
import { Link } from 'react-router-dom';
import { ButtonLike } from './ButtonLike';

export const CartLike = (props: {id: number}) => {
const isAuth = useAuth();
const {data, isLoading} = useGetElementQuery(props.id);
console.log(data)
  return (
    <div className='drink-card'>
    <img src={data?.drinks[0].strDrinkThumb} title='image' alt='Image'/>
    <div className='cart-info'>
      <Link to={`/element`} className='link'>
        <p>
        {data?.drinks[0]?.strDrink}
        </p>
      </Link>
      {isAuth && <ButtonLike id={props.id} />}
  </div>
</div>
  )
}
