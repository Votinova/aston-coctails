import React, { useContext } from 'react';
import './Navbar.scss'
import { MagnifyingGlass, UserCircle, BeerBottle } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/contex';

export const Navbar = () => {
  const {dark, toggleDark} = useContext(ThemeContext)
  return (
    <div className={dark? 'navbar' : 'navbar dark'}>
      <div className='main-button'>
      <Link to='/'> <span className='logo-main'>
        <BeerBottle size={32} /></span> </Link>
        <button className={dark? 'toggle-dark' : 'toggle-dark dark'} onClick={toggleDark}>dark</button>
      </div>
      <Link to='/search'>
        <div className='search-all'>
        <input title='search' className={dark? 'search' : 'search dark'}>
        </input>
        <span className='logo-search'><MagnifyingGlass size={32} /></span>
        </div>
      </Link>
      <Link to='/profile'>
        <span className='logo-profile'><UserCircle size={32} /></span>
      </Link>
        <span className='log-in'>Sign in</span> 
    </div>
  )
}
