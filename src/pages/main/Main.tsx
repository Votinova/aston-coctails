import React from 'react'
import { Coctail } from './Coctail';
import { IDrink } from '../../types/typeContext';
import { useGetAllCoctailQuery } from '../../store/servise/data';
import'./Main.scss'
import { Loader } from '../../utilits/Loader/Loader';

export const Main = () => {
const {data, isError, isLoading} = useGetAllCoctailQuery('');
  return (
    <div>
    {isLoading? <Loader / > 
    :
    <div className='drinks-card'>
    {data && data.drinks.map((drink: IDrink) => {
      return <Coctail key={drink.idDrink} data={drink} />
    })}
   </div>
    }
    </div>
  )
}
