import React, { useContext } from 'react'
import { IDrink } from '../../types/typeContext'
import { Link } from 'react-router-dom'
import { contextElement } from '../../context/contextElement'

export const Coctail = (props: {data: IDrink}) => {
  const {choiceId} = useContext(contextElement);
//  const id = props.data.idDrink?? 0;
 function clickElement () {
  if (choiceId) {
    choiceId(props.data.idDrink)
  }
  console.log(props.data.idDrink)
 }
  return (
    <div className='drink-card'>
        <img src={props.data.strDrinkThumb} title='image' alt='Image'/>
        <Link  to='/element' className='link' onClick={ () => clickElement()}>
          <h1>
              {props.data.strDrink}
          </h1>
        </Link>
    </div>
  )
}
