import React from 'react';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../store/slices/userSlice';
import { Link } from 'react-router-dom';
import { outUser } from '../../hooks/outUser';



export const AuthLog = (props: {isAuth: string}) => {
    const dispatch = useDispatch();
    const logOut = () => {
    outUser(),
    dispatch(removeUser())
    }
    return (
    <Link  to='/sign'>
        {props.isAuth?
         <span onClick={() => logOut()}>
          log out
        </span>
         :
         <span className='log-in'>
            Sign in
        </span> }
    </Link> 
  )
}
