import React from 'react';
import '../../scss/Navbar.scss'
import { Link } from 'react-router-dom';
import { FormSearch } from '../FormSearch/FormSearch';
import { useAuth } from '../../hooks/useAuth';

export const Navbar = () => {
  const isAuth = useAuth()
  return (
    <div className='navbar'>
      <header className='header-navbar'>
      <div className="container-navbar">
      <FormSearch />
      <nav>
        <ul>
          <li><Link to='/'>Главная</Link></li>
          <li><Link to='/profile'>{isAuth? 'Профиль' : ''}</Link></li>
          <li><Link to='/formlogin'>{isAuth? '' : 'Авторизация'}</Link></li>
        </ul>
      </nav>
    </div>
      </header>
    </div>
  )
}
