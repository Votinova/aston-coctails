import React, { useContext } from 'react';
import './Navbar.scss'
import { ThemeContext } from '../context/context';
import { Bootle } from './Links/Bootle';
import { FormSearch } from './Links/FormSearch';
import { Profile } from './Links/Profile';
import { AuthLog } from './Links/AuthLog';

export const Navbar = () => {
  const {dark} = useContext(ThemeContext)
  return (
    <div className={dark? 'navbar dark' : 'navbar'}>
      <Bootle />
      <FormSearch />
      <Profile />
      <AuthLog />
    </div>
  )
}
