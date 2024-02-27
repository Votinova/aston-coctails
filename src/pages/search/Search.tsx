import React from 'react'
import'./Search.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import {  useGetSearchQuery } from '../../store/servise/data';
import { Loader } from '../../utilits/Loader/Loader';
import { Coctail } from '../main/Coctail';
import { IDrink } from '../../types/typeContext';
export const Search = () => {
  const search = useSelector((state: RootState) => state.search.search);
  const {data, isError, isLoading} = useGetSearchQuery(search);
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
