import React from 'react';
import '../../scss/Btn.scss'
import { outUser } from '../../hooks/outUser';

export const ButtonOut = () => {
    const out = outUser()
    return (
    <div>
        <button className='btn' onClick={() => out()}> Выход </button>
    </div>
  )
}
