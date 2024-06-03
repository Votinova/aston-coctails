import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/Profile.scss'
import { History } from './history/History';
import { Like } from './like/Like';
import { ButtonOut } from '../../components/ButtonOut/ButtonOut';



export const Profile = () => {
  return (
    <div className='profile'>
        <Link to='/history'>
          История поиска
        </Link>
        <History/>
        <Link to='/like'>
          Избранное
        </Link>
        <Like />
        <ButtonOut />
    </div>
  )
}
