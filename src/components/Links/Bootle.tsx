import React from 'react';
import { Link } from 'react-router-dom';
import { BeerBottle } from '@phosphor-icons/react';
import { ButtonTheme } from './ButtonTheme';



export const Bootle = () => {
    return (
    <div className='main-button'>
    <Link to='/'> <span className='logo-main'>
      <BeerBottle size={32} /></span> 
    </Link>
    <ButtonTheme />
    </div>
  )
}
