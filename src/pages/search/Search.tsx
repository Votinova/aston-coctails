import React from 'react'
// import'../../scss/Search.scss';
import {  useGetSearchQuery } from '../../store/servise/data';
import { Loader } from '../../utilits/Loader/Loader';
import { Coctail } from '../../components/Coctail/Coctail';
import { typeResponse } from '../../types/types';
import { getSearch } from '../../localStorage/getSearch';
import { inUser } from '../../hooks/inUser';


export const Search = () => {
 inUser()
  const search = getSearch()
  const {data, isLoading} = useGetSearchQuery(search);
  return (
    <div>
   {data !== null ? isLoading? <Loader /> 
    : (
      <div className='drinks-card'>
    {data && data.map((drink: typeResponse) => {
      return <Coctail key={drink.idDrink} drink={drink}/>
    })}
   </div>): <h1> No coctails</h1>}
    </div>
  )
}
