import React, { useEffect, useState } from 'react';
import '../../scss/Navbar.scss'
import { Link } from 'react-router-dom';
import { FormSearch } from '../FormSearch/FormSearch';
import { inUser } from '../../hooks/inUser';
import { useAuth } from '../../hooks/useAuth';



export const Navbar = () => {

  const email = useAuth();

  return (
    <div className='navbar'>
      <header className='header-navbar'>
      <div className="container-navbar">
      <FormSearch />
      <nav>
        <ul>
          <li><Link to='/'>Главная</Link></li>
          <li><Link to='/profile'>{email? 'Профиль' : ''}</Link></li>
          <li><Link to='/formlogin'>{email? '' : 'Авторизация'}</Link></li>
        </ul>
      </nav>
    </div>
      </header>
    </div>
  )
}
