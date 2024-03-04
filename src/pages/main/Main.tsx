import React, { useEffect } from 'react'
import { Coctail } from './Coctail';
import { IDrink } from '../../types/typeContext';
import { useGetAllCoctailQuery } from '../../store/servise/data';
import'./Main.scss'
import { Loader } from '../../utilits/Loader/Loader';
import { useAppSelector } from '../../hooks/typescriptHooks/typescript';
import { getLocalStorageLike } from '../../localStorage/getLocalStorage/getLocalStorageLike';


export const Main = () => {
const email = useAppSelector(state => state.user.email)
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
