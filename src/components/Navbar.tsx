import React, { useContext } from 'react';
import './Navbar.scss'
import { ThemeContext } from '../context/context';
import { Bootle } from './Links/Bootle';
import { FormSearch } from './Links/FormSearch';
import { Profile } from './Links/Profile';
import { AuthLog } from './Links/AuthLog';
import { useAuth } from '../hooks/useAuth';

export const Navbar = () => {
  const isAuth = useAuth()
  const {dark} = useContext(ThemeContext)
  return (
    <div className={dark? 'navbar dark' : 'navbar'}>
      <Bootle />
      <FormSearch />
      {isAuth && <Profile />}
      <AuthLog />
    </div>
  )
}
