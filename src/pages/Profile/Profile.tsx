import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/Profile.scss'
import { History } from './history/History';
import { Like } from './like/Like';



export const Profile = () => {
  return (
    <div className='profile'>
        <Link to='/history'>
          История
        </Link>
        <History/>
        <Link to='/like'>
          Избранное
        </Link>
        <Like />

    </div>
  )
}
