import React from 'react'
import { Coctail } from '../../components/Coctail';
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
      return<Coctail key={drink.idDrink} data={drink} />
    })}
   </div>
    }
    </div>
  )
}
