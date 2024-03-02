import React from 'react';
import { Link } from 'react-router-dom';
import { UserCircle } from '@phosphor-icons/react';



export const Profile = () => {
  return (
    <Link to='/profile'>
        <span className='logo-profile'>
            <UserCircle size={32} />
        </span>
    </Link>
  )
}
