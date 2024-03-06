import React from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { removeUser } from '../../store/slices/userSlice';
import { Link } from 'react-router-dom';



export const AuthLog = () => {
    const isAuth = useAuth();
    const dispatch = useDispatch();
    const logOut = () => {
      dispatch(removeUser());

    }

    return (
    <Link  to='/sign'>
        {isAuth?
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