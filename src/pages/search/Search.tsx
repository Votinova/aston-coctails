import React from 'react'
import {  useGetSearchQuery } from '../../store/servise/data';
import { Loader } from '../../utilits/Loader/Loader';
import { Coctail } from '../../components/Coctail/Coctail';
import { typeResponse } from '../../types/types';
import { getSearch } from '../../localStorage/getSearch';
import { inUser } from '../../hooks/inUser';
import ErrorBoundary from '../../errorBoundary/errorBoundary';


export const Search = () => {
  inUser();
  const search = getSearch();
  const {data, isLoading, isError} = useGetSearchQuery(search);
  if (isError) return <ErrorBoundary />
  if (isLoading) return <Loader />
  return (
    <div>
   {data !== null ? 
    <div className='drinks-card'>
    {data && data.map((drink: typeResponse) => {
      return <Coctail key={drink.idDrink} drink={drink}/>
    })}
   </div>: <h1> No coctails</h1>}
   </div>
  )
}
