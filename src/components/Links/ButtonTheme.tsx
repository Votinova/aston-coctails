import React from 'react';
import { ThemeContext } from '../../context/context';
import { useContext } from 'react';


export const ButtonTheme = () => {
    const {dark, toggleDark} = useContext(ThemeContext);
    return (
    <button 
    className={dark? 'toggle-dark dark' : 'toggle-dark'} 
    onClick={toggleDark}>
    {dark? <span>light</span> : <span>dark</span>}
    </button>
  )
}
