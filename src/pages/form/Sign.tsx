import React from 'react'
import { Link } from 'react-router-dom'
import '../../scss/sign.scss'


export const Sign = () => {
  return (
    <div className='sign'>
        <Link to='/formsignup'>
           <button title='sign-in' >You have accoun? Go</button>
        </Link>
        <Link to='/formlogin'>
           <button title='sign-up' > You have not account? Create new </button>
        </Link>
    </div>
  )
}
