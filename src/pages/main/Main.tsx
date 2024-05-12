import React from 'react'
import { Coctail } from '../../components/Coctail/Coctail';
import { IDrink } from '../../types/typeContext';
import { useGetAllCoctailQuery } from '../../store/servise/data';
import'../../scss/Main.scss'
import { Loader } from '../../utilits/Loader/Loader';
import { inUser } from '../../hooks/inUser';

export const Main = () => {
  inUser()
const {data, isLoading} = useGetAllCoctailQuery('');
  return (
    <div>
    {isLoading? <Loader / > 
    :
    <div className='drinks-card'>
    {data && data.drinks.map((drink: IDrink) => {
      return<Coctail key={drink.idDrink} id={drink.idDrink} />
    })}
   </div>
    }
    </div>
  )
}
