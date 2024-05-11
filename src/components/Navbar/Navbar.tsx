import React from 'react';
import '../../scss/Navbar.scss'
import { Link } from 'react-router-dom';
import { FormSearch } from '../Links/FormSearch';

export const NavbarMenu = (props: {isAuth: string}) => {
  
  return (
    <div className='navbar'>
      <header className='header-navbar'>
      <div className="container-navbar">
      <FormSearch />
      <nav>
        <ul>
          <li><Link to='/'>Главная</Link></li>
          <li><Link to='/profile'>Профиль</Link></li>
          <li><Link to='/auth'>{props.isAuth? 'Выход' : 'Авторизация'}</Link></li>
        </ul>
      </nav>
    </div>
      </header>
    </div>
  )
}
