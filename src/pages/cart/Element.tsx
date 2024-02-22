import React, { useContext } from 'react'
import { useCoctailsServise } from '../../hooks/useCoctailsServise';

import './element.scss';
import { useElement } from '../../hooks/useElementServise';
import { Cart } from './Cart';
import { IElement } from '../../types/typeContext';
import { contextElement } from '../../context/contextElement';

export const Element = () => {
  const {id} = useContext(contextElement);
const element = useElement(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
console.log(id)
console.log(element);
  return (
    <div className='element'>
     {element && element?.drinks?.map((element: IElement) => {
      return <Cart key={element.idDrink} data={element}/>
     })}
    </div>
  )
}
