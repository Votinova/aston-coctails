import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/profile.scss'



export const Profile = () => {

  return (
    <div className='profile'>
      
        <Link to='/history'>
          <button>
          history
          </button>
        </Link>
      
      
      <Link to='/like'>
          <button>
          like
          </button>  
        </Link>
      
    </div>
  )
}
