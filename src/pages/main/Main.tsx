import React, { useEffect, useState } from 'react'
import { Coctail } from './Coctail';
import { useCoctailsServise } from '../../hooks/useCoctailsServise';
import { IDrink } from '../../types/typeContext';
import'./Main.css'

export const Main = () => {
  const state = useCoctailsServise('www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
  console.log(state);
  return (
   <div className='drinks-card'>
    {state && state.drinks.map((drink: IDrink) => {
      return <Coctail key={drink.idDrink} data={drink} />
    })}
   </div>
  )
}
