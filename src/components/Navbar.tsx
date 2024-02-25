import React, { useContext } from 'react';
import './Navbar.scss'
import { MagnifyingGlass, UserCircle, BeerBottle } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/context';

export const Navbar = () => {
  const {dark, toggleDark} = useContext(ThemeContext)
  return (
    <div className={dark? 'navbar dark' : 'navbar'}>
      <div className='main-button'>
      <Link to='/'> <span className='logo-main'>
        <BeerBottle size={32} /></span> </Link>
        <button className={dark? 'toggle-dark dark' : 'toggle-dark'} onClick={toggleDark}>{dark? <span>light</span> : <span>dark</span>}</button>
      </div>
      <Link to='/search'>
        <div className='search-all'>
        <input title='search' className={dark? 'search dark' : 'search'}>
        </input>
        <span className='logo-search'><MagnifyingGlass size={32} /></span>
        </div>
      </Link>
      <Link to='/profile'>
        <span className='logo-profile'><UserCircle size={32} /></span>
      </Link>
      <Link  to='/sign'>
        <span className='log-in'>Sign in</span> 
      </Link> 
    </div>
  )
}
