import React, { useContext, useState } from 'react';
import '../scss/Navbar.scss'
import { ThemeContext } from '../context/context';
import { Bootle } from './Links/Bootle';
import { FormSearch } from './Links/FormSearch';
import { Profile } from './Links/Profile';
import { AuthLog } from './Links/AuthLog';


export const Navbar = (props: {isAuth: string}) => {
  const {dark} = useContext(ThemeContext)

  return (
    <div className={dark? 'navbar dark' : 'navbar'}>
      <Bootle />
      <FormSearch />
     {props.isAuth && <Profile /> }
      <AuthLog isAuth={props.isAuth} />
    </div>
  )
}
